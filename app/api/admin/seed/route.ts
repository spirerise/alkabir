import { NextResponse } from "next/server";
import { CONTENT_DEFAULTS } from "@/lib/content/defaults";
import { CONTENT_REGISTRY, type ContentKey } from "@/lib/content/schema";
import { writeContent, isPersistenceConfigured, getBackend } from "@/lib/storage";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * POST /api/admin/seed  → materialize content/*.json from code defaults.
 *
 * Idempotent-friendly: by default only writes files that do not yet exist,
 * so it never clobbers admin edits. Pass { force: true } to overwrite all.
 *
 * Guarded by middleware (valid admin session required).
 */
export async function POST(req: Request) {
  if (!isPersistenceConfigured()) {
    return NextResponse.json(
      { error: "Persistence backend not configured." },
      { status: 503 },
    );
  }

  let force = false;
  try {
    const body = (await req.json()) as { force?: boolean };
    force = Boolean(body?.force);
  } catch {
    /* no body = default (non-destructive) */
  }

  const contentDir = path.join(process.cwd(), "content");
  const keys = Object.keys(CONTENT_REGISTRY) as ContentKey[];
  const written: string[] = [];
  const skipped: string[] = [];
  const errors: Array<{ key: string; error: string }> = [];

  for (const key of keys) {
    const file = CONTENT_REGISTRY[key].file;
    if (!force) {
      // Only relevant to the fs backend; github backend always attempts write.
      if (getBackend() === "fs") {
        try {
          await fs.access(path.join(contentDir, file));
          skipped.push(key);
          continue;
        } catch {
          /* file missing → proceed to write */
        }
      }
    }
    try {
      await writeContent(key, CONTENT_DEFAULTS[key]);
      written.push(key);
    } catch (err) {
      errors.push({
        key,
        error: err instanceof Error ? err.message : "write failed",
      });
    }
  }

  return NextResponse.json({
    ok: errors.length === 0,
    backend: getBackend(),
    written,
    skipped,
    errors,
  });
}
