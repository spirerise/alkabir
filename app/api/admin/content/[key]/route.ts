import { NextResponse, type NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

import { getContent } from "@/lib/content";
import { isContentKey, validateAndSanitize } from "@/lib/content/validate";
import { writeContent, getBackend, isPersistenceConfigured } from "@/lib/storage";
import type { ContentKey } from "@/lib/content/schema";

/**
 * GET  /api/admin/content/[key]   → current content (defaults if no file yet)
 * PUT  /api/admin/content/[key]   → validate + sanitize + persist
 *
 * Guarded by middleware (valid admin session required).
 */

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ key: string }> },
) {
  const { key } = await params;
  if (!isContentKey(key)) {
    return NextResponse.json({ error: "Unknown content key" }, { status: 404 });
  }
  const data = await getContent(key as ContentKey);
  return NextResponse.json({
    key,
    data,
    backend: getBackend(),
    persistenceConfigured: isPersistenceConfigured(),
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ key: string }> },
) {
  const { key } = await params;
  if (!isContentKey(key)) {
    return NextResponse.json({ error: "Unknown content key" }, { status: 404 });
  }

  if (!isPersistenceConfigured()) {
    return NextResponse.json(
      {
        error:
          "Persistence backend is not configured. For production set GITHUB_TOKEN, GITHUB_OWNER and GITHUB_REPO.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = validateAndSanitize(key as ContentKey, body);
  if (!result.ok) {
    return NextResponse.json(
      { error: "Validation failed", issues: result.issues },
      { status: 422 },
    );
  }

  try {
    const write = await writeContent(key as ContentKey, result.data);
    // Revalidate common paths so edits appear (fs backend / ISR).
    try {
      revalidatePath("/", "layout");
    } catch {
      /* revalidate is best-effort */
    }
    return NextResponse.json({ ok: true, ...write });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Write failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
