import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import {
  SESSION_COOKIE,
  createSessionToken,
  verifyCredentials,
  isAuthConfigured,
} from "@/lib/auth/session";

const bodySchema = z.object({
  username: z.string().default("admin"),
  password: z.string().min(1),
});

export async function POST(req: NextRequest) {
  if (!isAuthConfigured()) {
    return NextResponse.json(
      {
        error:
          "Admin auth is not configured. Set ADMIN_PASSWORD and AUTH_SECRET (>=16 chars).",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const { username, password } = parsed.data;
  if (!verifyCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const { token, maxAge } = await createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
  return res;
}
