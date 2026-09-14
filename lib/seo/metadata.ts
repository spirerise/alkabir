/**
 * Centralized SEO metadata builder.
 *
 * Merges, in priority order (later wins):
 *   1. Global SEO defaults (content/seo.json → seoSettings)
 *   2. Per-route overrides (seoSettings.routes[pathname])
 *   3. Explicit page-level override passed by the caller
 *
 * Produces a Next.js `Metadata` object. This is the ONE place page metadata is
 * assembled, preventing duplicate title/description logic across pages.
 *
 * SERVER-ONLY (reads content via the loader).
 */

import "server-only";
import type { Metadata } from "next";

import { getSeoSettings, getSiteSettings } from "@/lib/content";
import type { SeoOverride } from "@/lib/content/schema";

export interface BuildMetadataInput {
  /** Canonical pathname for the page, e.g. "/about" or "/machinery/foo". */
  pathname: string;
  /** Explicit page-level overrides (highest priority). */
  override?: SeoOverride;
  /** Fallback title when nothing else supplies one (before template). */
  fallbackTitle?: string;
  /** Fallback description when nothing else supplies one. */
  fallbackDescription?: string;
  /** OG type (defaults to "website"). */
  ogType?: "website" | "article";
}

function applyTemplate(template: string, title: string): string {
  if (!template || !template.includes("%s")) return title;
  return template.replace("%s", title);
}

/**
 * Build a Next.js Metadata object from centralized SEO settings + overrides.
 */
export async function buildMetadata(
  input: BuildMetadataInput,
): Promise<Metadata> {
  const [seo, site] = await Promise.all([getSeoSettings(), getSiteSettings()]);
  const routeOverride = seo.routes[input.pathname] ?? {};
  const o: SeoOverride = { ...routeOverride, ...(input.override ?? {}) };

  const rawTitle =
    o.title ?? input.fallbackTitle ?? seo.defaultTitle;
  // Only apply the template to non-default titles (default title is complete).
  const title =
    o.title || input.fallbackTitle
      ? applyTemplate(seo.titleTemplate, rawTitle)
      : rawTitle;

  const description =
    o.description ?? input.fallbackDescription ?? seo.defaultDescription;

  const canonical = o.canonical ?? input.pathname;
  const ogImage = o.ogImage ?? seo.defaultOgImage ?? site.ogImage;
  const keywords = o.keywords ?? seo.defaultKeywords;

  const index = o.noindex ? false : true;
  const follow = o.nofollow ? false : true;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: {
      index,
      follow,
      googleBot: { index, follow },
    },
    openGraph: {
      type: input.ogType ?? "website",
      url: canonical,
      title: o.ogTitle ?? title,
      description: o.ogDescription ?? description,
      siteName: site.name,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      site: seo.twitterHandle || undefined,
      title: o.twitterTitle ?? o.ogTitle ?? title,
      description: o.twitterDescription ?? o.ogDescription ?? description,
      images: (o.twitterImage ?? ogImage) ? [o.twitterImage ?? ogImage] : undefined,
    },
  };
}
