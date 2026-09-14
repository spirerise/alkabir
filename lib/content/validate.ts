/**
 * Write-path validation + sanitization for CMS content.
 *
 * The API layer calls validateAndSanitize() before persisting. It:
 *   - validates the incoming payload against the registry schema (Zod)
 *   - sanitizes HTML in known rich-text fields (defense-in-depth against XSS)
 *
 * SERVER-ONLY.
 */

import "server-only";
import {
  CONTENT_REGISTRY,
  type ContentKey,
  type ContentOf,
} from "@/lib/content/schema";
import { sanitizeHtml } from "@/lib/content/sanitize";

type SanitizeResult<K extends ContentKey> =
  | { ok: true; data: ContentOf<K> }
  | { ok: false; issues: unknown };

/** Deep-clone helper (structured content is JSON-safe). */
function clone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

/** Apply HTML sanitization to rich-text fields per content type. */
function sanitizeByKey(key: ContentKey, data: unknown): unknown {
  const d = clone(data);

  if (key === "blog" && Array.isArray(d)) {
    for (const post of d) {
      if (post && typeof post.content === "string") {
        post.content = sanitizeHtml(post.content);
      }
      if (post && typeof post.excerpt === "string") {
        // excerpt is plain text; strip tags entirely
        post.excerpt = sanitizeHtml(post.excerpt).replace(/<[^>]*>/g, "");
      }
    }
  }

  if (key === "pages" && Array.isArray(d)) {
    for (const page of d) {
      if (Array.isArray(page?.blocks)) {
        for (const block of page.blocks) {
          if (block && typeof block.body === "string") {
            block.body = sanitizeHtml(block.body);
          }
        }
      }
      if (page && typeof page.intro === "string") {
        page.intro = sanitizeHtml(page.intro);
      }
    }
  }

  return d;
}

export function validateAndSanitize<K extends ContentKey>(
  key: K,
  payload: unknown,
): SanitizeResult<K> {
  const entry = CONTENT_REGISTRY[key];
  if (!entry) return { ok: false, issues: `Unknown content key: ${key}` };

  const sanitized = sanitizeByKey(key, payload);
  const parsed = entry.schema.safeParse(sanitized);
  if (!parsed.success) {
    return { ok: false, issues: parsed.error.issues };
  }
  return { ok: true, data: parsed.data as ContentOf<K> };
}

export function isContentKey(value: string): value is ContentKey {
  return Object.prototype.hasOwnProperty.call(CONTENT_REGISTRY, value);
}
