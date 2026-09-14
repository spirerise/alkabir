import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Load CMS-managed redirects from content/redirects.json at config time.
 * Safe: reads a single known path, tolerates missing/invalid file.
 */
function loadRedirects(): Array<{
  source: string;
  destination: string;
  permanent: boolean;
}> {
  try {
    const file = path.join(process.cwd(), "content", "redirects.json");
    const raw = readFileSync(file, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (r) =>
          r &&
          typeof r.source === "string" &&
          typeof r.destination === "string",
      )
      .map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: r.permanent !== false,
      }));
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  async redirects() {
    return loadRedirects();
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  // Security + SEO headers (HSTS, content-type sniffing, referrer policy, etc.)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // HSTS — force HTTPS for 2 years, include subdomains, eligible for preload list
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
