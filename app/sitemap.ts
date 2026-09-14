import type { MetadataRoute } from "next";
import {
  getSiteSettings,
  getSeoSettings,
  getLocations,
  getMachinery,
  getServices,
  getBlogPosts,
} from "@/lib/content";

/**
 * Sitemap sourced from the centralized content loader.
 * - Only published entries are included.
 * - Pathnames listed in seoSettings.sitemap.exclude are dropped.
 * - Behaviour matches the previous hardcoded sitemap when content == defaults.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [site, seo, locations, machinery, services, blog] = await Promise.all([
    getSiteSettings(),
    getSeoSettings(),
    getLocations(),
    getMachinery(),
    getServices(),
    getBlogPosts(),
  ]);

  const baseUrl = site.url.replace(/\/$/, "");
  const exclude = new Set(seo.sitemap.exclude);

  const staticEntries: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "daily", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/machinery", changeFrequency: "daily", priority: 0.9 },
    { path: "/categories", changeFrequency: "weekly", priority: 0.8 },
    { path: "/locations", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/get-quote", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blogs", changeFrequency: "daily", priority: 0.7 },
    { path: "/team", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-of-services", changeFrequency: "yearly", priority: 0.3 },
  ];

  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = staticEntries
    .filter((e) => !exclude.has(e.path || "/"))
    .map((e) => ({
      url: `${baseUrl}${e.path}`,
      lastModified: now,
      changeFrequency: e.changeFrequency,
      priority: e.priority,
    }));

  const isPublished = (s?: string) => s !== "draft";

  const locationPages: MetadataRoute.Sitemap = locations
    .filter((l) => isPublished(l.status) && !exclude.has(`/locations/${l.slug}`))
    .map((l) => ({
      url: `${baseUrl}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const machineryPages: MetadataRoute.Sitemap = machinery
    .filter((m) => isPublished(m.status) && !exclude.has(`/machinery/${m.slug}`))
    .map((m) => ({
      url: `${baseUrl}/machinery/${m.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const servicePages: MetadataRoute.Sitemap = services
    .filter((s) => isPublished(s.status) && !exclude.has(`/services/${s.id}`))
    .map((s) => ({
      url: `${baseUrl}/services/${s.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const blogPages: MetadataRoute.Sitemap = blog
    .filter((p) => isPublished(p.status) && !exclude.has(`/blogs/${p.slug}`))
    .map((p) => ({
      url: `${baseUrl}/blogs/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [
    ...staticPages,
    ...locationPages,
    ...machineryPages,
    ...servicePages,
    ...blogPages,
  ];
}
