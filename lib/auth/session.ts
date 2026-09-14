/**
 * Minimal, dependency-free admin auth.
 *
 * A signed session token stored in an httpOnly cookie. The token is an HMAC
 * (SHA-256, Web Crypto) over an expiry timestamp, so it is stateless, tamper-
 * evident, and verifiable in Edge middleware without a database.
 *
 * Secrets (AUTH_SECRET, ADMIN_PASSWORD) are server-only and never sent to the
 * client. No secret is embedded in the token.
 *
 * Env:
 *   ADMIN_PASSWORD  - the password required to log in (required to enable admin)
 *   ADMIN_USERNAME  - optional username (default "admin")
 *   AUTH_SECRET     - HMAC signing secret (required; use a long random string)
 *   AUTH_TTL_HOURS  - session lifetime in hours (default 12)
 */

export const SESSION_COOKIE = "alkabir_admin_session";

const encoder = new TextEncoder();

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error(
      "AUTH_SECRET is missing or too short (needs >= 16 chars). Admin auth is disabled.",
    );
  }
  return secret;
}

async function hmac(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return base64UrlFromBuffer(sig);
}

function base64UrlFromBuffer(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Constant-time-ish string comparison. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Create a signed session token valid for AUTH_TTL_HOURS. */
export async function createSessionToken(): Promise<{
  token: string;
  maxAge: number;
}> {
  const ttlHours = Number(process.env.AUTH_TTL_HOURS || "12");
  const maxAge = Math.max(1, ttlHours) * 60 * 60;
  const exp = Date.now() + maxAge * 1000;
  const payload = `v1.${exp}`;
  const sig = await hmac(payload, getSecret());
  return { token: `${payload}.${sig}`, maxAge };
}

/** Verify a session token; returns true when valid and unexpired. */
export async function verifySessionToken(
  token: string | undefined,
): Promise<boolean> {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [v, expStr, sig] = parts;
  if (v !== "v1") return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp < Date.now()) return false;

  let expected: string;
  try {
    expected = await hmac(`${v}.${expStr}`, getSecret());
  } catch {
    return false;
  }
  return timingSafeEqual(sig, expected);
}

/** Validate submitted credentials against server-side env. */
export function verifyCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD;
  if (!expectedPass) return false;
  return (
    timingSafeEqual(username, expectedUser) &&
    timingSafeEqual(password, expectedPass)
  );
}

/** Whether admin auth is configured (used to show a helpful message). */
export function isAuthConfigured(): boolean {
  return Boolean(
    process.env.ADMIN_PASSWORD &&
      process.env.AUTH_SECRET &&
      process.env.AUTH_SECRET.length >= 16,
  );
}
