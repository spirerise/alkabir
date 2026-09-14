/**
 * Centralized, strongly-typed content schemas (Zod v4).
 *
 * These schemas are the single source of truth for the database-free CMS.
 * They are used to:
 *   - validate JSON content read from `content/*.json`
 *   - validate write requests coming from the admin dashboard/API
 *   - infer TypeScript types consumed by public pages and the loader
 *
 * Design rules:
 *   - Every content type has sensible defaults so a missing/partial file
 *     never crashes a public page.
 *   - Content data is separated from presentation.
 *   - Image binaries are NEVER stored here — only URLs + structured metadata.
 */

import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*  Shared primitives                                                         */
/* -------------------------------------------------------------------------- */

/** Structured image reference — URL only, never binary. */
export const imageSchema = z.object({
  url: z.string().min(1),
  alt: z.string().default(""),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  /** Optional focal point (0-1) for art-directed cropping. */
  focalX: z.number().min(0).max(1).optional(),
  focalY: z.number().min(0).max(1).optional(),
});
export type ImageRef = z.infer<typeof imageSchema>;

/** Per-page SEO overrides. All fields optional — fall back to global defaults. */
export const seoOverrideSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  canonical: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  noindex: z.boolean().optional(),
  nofollow: z.boolean().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().optional(),
});
export type SeoOverride = z.infer<typeof seoOverrideSchema>;

/** A named link (used for nav + footer + CTAs). */
export const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().optional(),
});
export type LinkItem = z.infer<typeof linkSchema>;

const publishStateSchema = z
  .enum(["draft", "published"])
  .default("published");

/* -------------------------------------------------------------------------- */
/*  1. Global site settings                                                   */
/* -------------------------------------------------------------------------- */

export const siteSettingsSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  legalName: z.string().min(1),
  url: z.string().url(),
  logo: z.string().min(1),
  ogImage: z.string().min(1),
  description: z.string().min(1),
  shortDescription: z.string().min(1),
  founded: z.string().default(""),
  phone: z.string().default(""),
  phoneFormatted: z.string().default(""),
  whatsapp: z.string().default(""),
  email: z.string().default(""),
  emailContact: z.string().default(""),
  emailSales: z.string().default(""),
  phoneSales: z.string().default(""),
  phoneSalesFormatted: z.string().default(""),
  phoneContact: z.string().default(""),
  phoneContactFormatted: z.string().default(""),
  address: z.object({
    streetAddress: z.string().default(""),
    addressLocality: z.string().default(""),
    addressRegion: z.string().default(""),
    postalCode: z.string().default(""),
    addressCountry: z.string().default(""),
  }),
  geo: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  areaServed: z.array(z.string()).default([]),
  openingHours: z
    .array(
      z.object({
        dayOfWeek: z.array(z.string()),
        opens: z.string(),
        closes: z.string(),
      }),
    )
    .default([]),
  social: z.object({
    facebook: z.string().default(""),
    instagram: z.string().default(""),
    linkedin: z.string().default(""),
    twitter: z.string().default(""),
    youtube: z.string().default(""),
  }),
  languages: z.array(z.string()).default(["en"]),
  currency: z.string().default("AED"),
  priceRange: z.string().default("$$"),
});
export type SiteSettings = z.infer<typeof siteSettingsSchema>;

/* -------------------------------------------------------------------------- */
/*  2. Navigation + Footer                                                    */
/* -------------------------------------------------------------------------- */

export const navigationSchema = z.object({
  primary: z.array(linkSchema).default([]),
  cta: linkSchema.optional(),
});
export type Navigation = z.infer<typeof navigationSchema>;

export const footerSchema = z.object({
  tagline: z.string().default(""),
  columns: z
    .array(
      z.object({
        heading: z.string(),
        links: z.array(linkSchema),
      }),
    )
    .default([]),
  bottomLinks: z.array(linkSchema).default([]),
  copyright: z.string().default(""),
});
export type Footer = z.infer<typeof footerSchema>;

/* -------------------------------------------------------------------------- */
/*  3. Generic editable page (homepage / about / custom static pages)         */
/* -------------------------------------------------------------------------- */

/** A flexible content block for long-form editable sections. */
export const contentBlockSchema = z.object({
  heading: z.string().default(""),
  /** HTML/Markdown string — sanitized on write. */
  body: z.string().default(""),
});
export type ContentBlock = z.infer<typeof contentBlockSchema>;

export const pageSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  status: publishStateSchema,
  hero: z
    .object({
      heading: z.string().default(""),
      subheading: z.string().default(""),
      image: imageSchema.optional(),
    })
    .optional(),
  intro: z.string().default(""),
  blocks: z.array(contentBlockSchema).default([]),
  seo: seoOverrideSchema.optional(),
  updatedAt: z.string().optional(),
});
export type Page = z.infer<typeof pageSchema>;

/* -------------------------------------------------------------------------- */
/*  4. Services                                                               */
/* -------------------------------------------------------------------------- */

export const serviceSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  shortDescription: z.string().default(""),
  description: z.string().default(""),
  icon: z.string().default(""),
  image: z.string().default(""),
  features: z.array(z.string()).default([]),
  benefits: z
    .array(z.object({ title: z.string(), description: z.string() }))
    .default([]),
  pricing: z
    .array(
      z.object({ period: z.string(), price: z.string(), note: z.string() }),
    )
    .default([]),
  popular: z.boolean().default(false),
  status: publishStateSchema,
  seo: seoOverrideSchema.optional(),
});
export type ServiceContent = z.infer<typeof serviceSchema>;

/* -------------------------------------------------------------------------- */
/*  5. Locations                                                              */
/* -------------------------------------------------------------------------- */

export const locationSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  slug: z.string().min(1),
  region: z.enum(["residential", "commercial", "industrial", "premium"]),
  description: z.string().default(""),
  metaTitle: z.string().default(""),
  metaDescription: z.string().default(""),
  intro: z.string().optional(),
  landmarks: z.array(z.string()).optional(),
  nearbyAreas: z.array(z.string()).optional(),
  projectTypes: z.array(z.string()).optional(),
  topEquipment: z.array(z.string()).optional(),
  status: publishStateSchema,
  seo: seoOverrideSchema.optional(),
});
export type LocationContent = z.infer<typeof locationSchema>;

/* -------------------------------------------------------------------------- */
/*  6. Rental inventory (machinery)                                           */
/* -------------------------------------------------------------------------- */

export const machinerySchema = z.object({
  id: z.number().int(),
  slug: z.string().min(1),
  name: z.string().min(1),
  brand: z.string().default(""),
  category: z.string().default(""),
  price: z.number().default(0),
  priceUnit: z.string().default("day"),
  image: z.string().default(""),
  gallery: z.array(z.string()).default([]),
  specs: z.array(z.string()).default([]),
  available: z.boolean().default(true),
  rating: z.number().default(0),
  reviews: z.number().int().default(0),
  capacity: z.string().default(""),
  year: z.number().int().default(new Date().getFullYear()),
  location: z.string().default(""),
  description: z.string().default(""),
  features: z.array(z.string()).default([]),
  specifications: z.record(z.string(), z.string()).default({}),
  weeklyPrice: z.number().default(0),
  monthlyPrice: z.number().default(0),
  status: publishStateSchema,
  seo: seoOverrideSchema.optional(),
});
export type MachineryContent = z.infer<typeof machinerySchema>;

/* -------------------------------------------------------------------------- */
/*  7. FAQs                                                                   */
/* -------------------------------------------------------------------------- */

export const faqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});
export type FaqItem = z.infer<typeof faqItemSchema>;

/** FAQs grouped by named collection (general, generator, ...). */
export const faqsSchema = z.record(z.string(), z.array(faqItemSchema));
export type Faqs = z.infer<typeof faqsSchema>;

/* -------------------------------------------------------------------------- */
/*  8. Testimonials                                                           */
/* -------------------------------------------------------------------------- */

export const testimonialSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().default(""),
  company: z.string().default(""),
  avatar: z.string().default(""),
  rating: z.number().min(0).max(5).default(5),
  quote: z.string().min(1),
  status: publishStateSchema,
});
export type Testimonial = z.infer<typeof testimonialSchema>;

/* -------------------------------------------------------------------------- */
/*  9. Blog / articles                                                        */
/* -------------------------------------------------------------------------- */

export const blogPostSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string().default(""),
  content: z.string().default(""),
  image: z.string().default(""),
  author: z.object({
    name: z.string().default(""),
    avatar: z.string().default(""),
    role: z.string().default(""),
  }),
  category: z.string().default(""),
  tags: z.array(z.string()).default([]),
  publishedAt: z.string(),
  readTime: z.number().int().default(5),
  featured: z.boolean().default(false),
  status: publishStateSchema,
  seo: seoOverrideSchema.optional(),
});
export type BlogPostContent = z.infer<typeof blogPostSchema>;

/* -------------------------------------------------------------------------- */
/*  10. Global SEO settings + redirects + sitemap/robots config               */
/* -------------------------------------------------------------------------- */

export const seoSettingsSchema = z.object({
  defaultTitle: z.string().min(1),
  titleTemplate: z.string().default("%s"),
  defaultDescription: z.string().min(1),
  defaultKeywords: z.array(z.string()).default([]),
  defaultOgImage: z.string().default(""),
  twitterHandle: z.string().default(""),
  /** Per-route overrides keyed by pathname (e.g. "/about"). */
  routes: z.record(z.string(), seoOverrideSchema).default({}),
  robots: z.object({
    /** Extra disallow paths appended to the safe defaults. */
    disallow: z.array(z.string()).default([]),
    allowAiCrawlers: z.boolean().default(true),
  }),
  sitemap: z.object({
    /** Exclude these pathnames from the generated sitemap. */
    exclude: z.array(z.string()).default([]),
    /** Default change frequency for static pages. */
    defaultChangeFrequency: z
      .enum([
        "always",
        "hourly",
        "daily",
        "weekly",
        "monthly",
        "yearly",
        "never",
      ])
      .default("weekly"),
  }),
});
export type SeoSettings = z.infer<typeof seoSettingsSchema>;

export const redirectSchema = z.object({
  source: z.string().min(1),
  destination: z.string().min(1),
  permanent: z.boolean().default(true),
});
export type Redirect = z.infer<typeof redirectSchema>;

export const redirectsSchema = z.array(redirectSchema);
export type Redirects = z.infer<typeof redirectsSchema>;

/* -------------------------------------------------------------------------- */
/*  Content registry — maps a content key to its schema + storage path        */
/* -------------------------------------------------------------------------- */

/**
 * Single source of truth for which content keys exist, their schema, and the
 * relative file path (under content/) they persist to. The storage adapter's
 * path allow-list is derived from this — nothing outside this registry can be
 * written.
 */
export const CONTENT_REGISTRY = {
  settings: { file: "settings.json", schema: siteSettingsSchema },
  navigation: { file: "navigation.json", schema: navigationSchema },
  footer: { file: "footer.json", schema: footerSchema },
  seo: { file: "seo.json", schema: seoSettingsSchema },
  redirects: { file: "redirects.json", schema: redirectsSchema },
  faqs: { file: "faqs.json", schema: faqsSchema },
  services: { file: "services.json", schema: z.array(serviceSchema) },
  locations: { file: "locations.json", schema: z.array(locationSchema) },
  machinery: { file: "machinery.json", schema: z.array(machinerySchema) },
  testimonials: {
    file: "testimonials.json",
    schema: z.array(testimonialSchema),
  },
  blog: { file: "blog.json", schema: z.array(blogPostSchema) },
  pages: { file: "pages.json", schema: z.array(pageSchema) },
} as const;

export type ContentKey = keyof typeof CONTENT_REGISTRY;

/** Type of the parsed content for a given key. */
export type ContentOf<K extends ContentKey> = z.infer<
  (typeof CONTENT_REGISTRY)[K]["schema"]
>;
