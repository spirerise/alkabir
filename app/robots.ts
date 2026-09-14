import type { MetadataRoute } from "next";
import { getSiteSettings, getSeoSettings } from "@/lib/content";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const [site, seo] = await Promise.all([getSiteSettings(), getSeoSettings()]);
  const baseUrl = site.url.replace(/\/$/, "");

  const disallow = seo.robots.disallow.length
    ? seo.robots.disallow
    : ["/api/", "/admin/", "/private/"];

  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: ["/", "/_next/static/", "/_next/image"],
      disallow,
    },
  ];

  if (seo.robots.allowAiCrawlers) {
    rules.push({
      userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "ClaudeBot"],
      allow: "/",
    });
  }

  return {
    rules,
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
