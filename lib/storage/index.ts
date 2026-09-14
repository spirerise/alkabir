/**
 * Database-free persistence adapter.
 *
 * Two backends, selected by environment:
 *   - "fs"     : writes to `content/*.json` on the local filesystem. Used in
 *                development (`next dev`). NOT usable on read-only serverless
 *                filesystems (e.g. Vercel runtime).
 *   - "github" : commits `content/*.json` through the GitHub Contents API,
 *                which triggers the normal deployment pipeline. Used in
 *                production. Requires GITHUB_* env vars.
 *
 * Selection:
 *   CONTENT_STORAGE=github|fs  (explicit)
 *   otherwise: "github" if GITHUB_TOKEN is set, else "fs".
 *
 * SECURITY:
 *   - The only writable paths are those declared in CONTENT_REGISTRY. Callers
 *     pass a ContentKey (never a raw path), so path traversal is impossible.
 *   - GitHub credentials are read from server-side env only and never returned.
 *   - Content is validated by the API layer (Zod) before reaching the adapter.
 *
 * SERVER-ONLY.
 */

import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

import { CONTENT_REGISTRY, type ContentKey } from "@/lib/content/schema";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type StorageBackend = "fs" | "github";

export function getBackend(): StorageBackend {
  const explicit = process.env.CONTENT_STORAGE?.toLowerCase();
  if (explicit === "github" || explicit === "fs") return explicit;
  return process.env.GITHUB_TOKEN ? "github" : "fs";
}

/** Resolve the safe relative content path for a key (allow-listed). */
function relPathFor(key: ContentKey): string {
  const entry = CONTENT_REGISTRY[key];
  if (!entry) throw new Error(`Unknown content key: ${String(key)}`);
  // entry.file is a hard-coded constant from the registry — never user input.
  return `content/${entry.file}`;
}

function serialize(data: unknown): string {
  // Deterministic, human-readable, diff-friendly JSON.
  return JSON.stringify(data, null, 2) + "\n";
}

export interface WriteResult {
  backend: StorageBackend;
  path: string;
  /** Commit SHA (github backend only). */
  commit?: string;
}

/* --------------------------------- FS ------------------------------------ */

async function writeFs(key: ContentKey, data: unknown): Promise<WriteResult> {
  const rel = relPathFor(key);
  const abs = path.join(process.cwd(), rel);
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.writeFile(abs, serialize(data), "utf8");
  return { backend: "fs", path: rel };
}

/* ------------------------------- GitHub ---------------------------------- */

interface GithubConfig {
  token: string;
  owner: string;
  repo: string;
  branch: string;
  authorName: string;
  authorEmail: string;
}

function githubConfig(): GithubConfig {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  if (!token || !owner || !repo) {
    throw new Error(
      "GitHub storage is not configured. Set GITHUB_TOKEN, GITHUB_OWNER and GITHUB_REPO.",
    );
  }
  return {
    token,
    owner,
    repo,
    branch: process.env.GITHUB_BRANCH || "main",
    authorName: process.env.GITHUB_AUTHOR_NAME || "AL-KABIR CMS",
    authorEmail: process.env.GITHUB_AUTHOR_EMAIL || "cms@alkabirmachineryrentals.ae",
  };
}

function ghHeaders(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
}

/** Fetch the current file SHA (needed to update an existing file). */
async function getGithubSha(
  cfg: GithubConfig,
  filePath: string,
): Promise<string | undefined> {
  const url = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${encodeURIComponent(
    filePath,
  )}?ref=${encodeURIComponent(cfg.branch)}`;
  const res = await fetch(url, { headers: ghHeaders(cfg.token), cache: "no-store" });
  if (res.status === 404) return undefined;
  if (!res.ok) {
    throw new Error(`GitHub read failed (${res.status}): ${await safeText(res)}`);
  }
  const json = (await res.json()) as { sha?: string };
  return json.sha;
}

async function writeGithub(
  key: ContentKey,
  data: unknown,
): Promise<WriteResult> {
  const cfg = githubConfig();
  const rel = relPathFor(key);
  const sha = await getGithubSha(cfg, rel);

  const url = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${encodeURIComponent(
    rel,
  )}`;
  const contentBase64 = Buffer.from(serialize(data), "utf8").toString("base64");

  const res = await fetch(url, {
    method: "PUT",
    headers: ghHeaders(cfg.token),
    cache: "no-store",
    body: JSON.stringify({
      message: `chore(cms): update ${rel}`,
      content: contentBase64,
      branch: cfg.branch,
      committer: { name: cfg.authorName, email: cfg.authorEmail },
      author: { name: cfg.authorName, email: cfg.authorEmail },
      ...(sha ? { sha } : {}),
    }),
  });

  if (!res.ok) {
    throw new Error(
      `GitHub write failed (${res.status}): ${await safeText(res)}`,
    );
  }
  const json = (await res.json()) as { commit?: { sha?: string } };
  return { backend: "github", path: rel, commit: json.commit?.sha };
}

async function safeText(res: Response): Promise<string> {
  try {
    const t = await res.text();
    // Avoid leaking token if it ever appears; GitHub never echoes it, but be safe.
    return t.slice(0, 500);
  } catch {
    return "<no body>";
  }
}

/* ------------------------------- Public API ------------------------------ */

/**
 * Persist validated content for a given key using the active backend.
 * `data` MUST already be validated by the caller (API layer with Zod).
 */
export async function writeContent(
  key: ContentKey,
  data: unknown,
): Promise<WriteResult> {
  const backend = getBackend();
  if (backend === "github") return writeGithub(key, data);
  return writeFs(key, data);
}

/** True when the active backend can persist (used for admin UI messaging). */
export function isPersistenceConfigured(): boolean {
  const backend = getBackend();
  if (backend === "fs") return true;
  return Boolean(
    process.env.GITHUB_TOKEN &&
      process.env.GITHUB_OWNER &&
      process.env.GITHUB_REPO,
  );
}
