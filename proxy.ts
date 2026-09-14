import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth/session";

/**
 * Proxy (formerly "middleware" — renamed in Next.js 16).
 *
 * Responsibility: protect /admin/** (except /admin/login) and /api/admin/**
 * — require a valid signed session cookie, else redirect to login / return 401.
 *
 * CMS-managed 301/302 redirects are applied via next.config.ts redirects()
 * (build-time, edge-optimized), keeping public-path latency minimal.
 */
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminPage = pathname.startsWith("/admin");
  const isAdminApi = pathname.startsWith("/api/admin");
  const isLogin = pathname === "/admin/login";
  const isLoginApi = pathname === "/api/admin/login";

  if ((!isAdminPage && !isAdminApi) || isLogin || isLoginApi) {
    return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const valid = await verifySessionToken(token);

  if (valid) return NextResponse.next();

  if (isAdminApi) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = "/admin/login";
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
