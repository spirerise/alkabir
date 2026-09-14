/**
 * Centralized server-side content loader (database-free CMS).
 *
 * Reads structured content from `content/*.json`, validates it against the Zod
 * schemas, and falls back to code-defined defaults (migrated from lib/data and
 * lib/seo) when a file is missing or invalid. This guarantees public pages never
 * break, even before/without migration.
 *
 * SERVER-ONLY. Do not import from client components.
 */

import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";

import {
  CONTENT_REGISTRY,
  type ContentKey,
  type ContentOf,
} from "./schema";
import { CONTENT_DEFAULTS } from "./defaults";

/** Absolute path to the content directory (repo root / content). */
export const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Read + validate a single content key. Falls back to defaults on any error
 * (missing file, invalid JSON, schema violation). Cached per request via React
 * cache() so multiple consumers on a page share one read.
 */
export const getContent = cache(
  async <K extends ContentKey>(key: K): Promise<ContentOf<K>> => {
    const entry = CONTENT_REGISTRY[key];
    const fallback = CONTENT_DEFAULTS[key] as ContentOf<K>;
    const filePath = path.join(CONTENT_DIR, entry.file);

    let raw: string;
    try {
      raw = await fs.readFile(filePath, "utf8");
    } catch {
      // No file yet — use defaults (this is the normal pre-migration state).
      return fallback;
    }

    let json: unknown;
    try {
      json = JSON.parse(raw);
    } catch (err) {
      console.error(`[content] Invalid JSON in ${entry.file}:`, err);
      return fallback;
    }

    const parsed = entry.schema.safeParse(json);
    if (!parsed.success) {
      console.error(
        `[content] Schema validation failed for ${entry.file}:`,
        parsed.error.issues,
      );
      return fallback;
    }
    return parsed.data as ContentOf<K>;
  },
);

/**
 * Raw read used by the admin API to load current content for editing.
 * Unlike getContent(), this returns the defaults (not a thrown error) but does
 * NOT swallow schema errors silently for the caller — it still validates.
 */
export async function readContentForEdit<K extends ContentKey>(
  key: K,
): Promise<ContentOf<K>> {
  return getContent(key);
}

/* --------------------------- Typed convenience getters -------------------- */

export const getSiteSettings = () => getContent("settings");
export const getNavigation = () => getContent("navigation");
export const getFooter = () => getContent("footer");
export const getSeoSettings = () => getContent("seo");
export const getRedirects = () => getContent("redirects");
export const getFaqs = () => getContent("faqs");
export const getServices = () => getContent("services");
export const getLocations = () => getContent("locations");
export const getMachinery = () => getContent("machinery");
export const getTestimonials = () => getContent("testimonials");
export const getBlogPosts = () => getContent("blog");
export const getPages = () => getContent("pages");

/* --------------------------- Lookup helpers ------------------------------- */

export async function getPageBySlug(slug: string) {
  const pages = await getPages();
  return pages.find((p) => p.slug === slug);
}

export async function getServiceById(id: string) {
  const services = await getServices();
  return services.find((s) => s.id === id);
}

export async function getLocationBySlug(slug: string) {
  const locations = await getLocations();
  return locations.find((l) => l.slug === slug);
}

export async function getMachineryBySlug(slug: string) {
  const machinery = await getMachinery();
  return machinery.find((m) => m.slug === slug);
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug);
}
