/**
 * Code-defined content defaults.
 *
 * These are the fallback values used by the content loader when a
 * `content/*.json` file is absent or invalid. They are derived from the
 * existing typed data modules (lib/data/*) and SEO constants (lib/seo/site)
 * so that behaviour is IDENTICAL to the pre-CMS site until content is edited.
 *
 * This is what makes the CMS additive and regression-free: nothing changes
 * visually until an admin overrides content through the dashboard.
 */

import { SITE, DEFAULT_KEYWORDS } from "@/lib/seo/site";
import { allServices } from "@/lib/data/services";
import { dubaiLocations } from "@/lib/data/locations";
import { allMachinery } from "@/lib/data/machinery";
import { allBlogPosts } from "@/lib/data/blogs";
import {
  generalFaqs,
  generatorFaqs,
  compactorFaqs,
  airCompressorFaqs,
  scaffoldingFaqs,
  concreteFaqs,
  powerToolFaqs,
} from "@/lib/data/faqs";

import type {
  SiteSettings,
  Navigation,
  Footer,
  SeoSettings,
  Redirects,
  Faqs,
  ServiceContent,
  LocationContent,
  MachineryContent,
  Testimonial,
  BlogPostContent,
  Page,
} from "./schema";

/* ---------------------------------------------------------------- settings */

const settings: SiteSettings = {
  name: SITE.name,
  shortName: SITE.shortName,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: SITE.logo,
  ogImage: SITE.ogImage,
  description: SITE.description,
  shortDescription: SITE.shortDescription,
  founded: SITE.founded,
  phone: SITE.phone,
  phoneFormatted: SITE.phoneFormatted,
  whatsapp: SITE.whatsapp,
  email: SITE.email,
  emailContact: SITE.emailContact,
  emailSales: SITE.emailSales,
  phoneSales: SITE.phoneSales,
  phoneSalesFormatted: SITE.phoneSalesFormatted,
  phoneContact: SITE.phoneContact,
  phoneContactFormatted: SITE.phoneContactFormatted,
  address: { ...SITE.address },
  geo: { ...SITE.geo },
  areaServed: [...SITE.areaServed],
  openingHours: SITE.openingHours.map((h) => ({
    dayOfWeek: [...h.dayOfWeek],
    opens: h.opens,
    closes: h.closes,
  })),
  social: { ...SITE.social },
  languages: [...SITE.languages],
  currency: SITE.currency,
  priceRange: SITE.priceRange,
};

/* -------------------------------------------------------------- navigation */

const navigation: Navigation = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Machinery", href: "/machinery" },
    { label: "Categories", href: "/categories" },
    { label: "Services", href: "/services" },
    { label: "Locations", href: "/locations" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Get a Quote", href: "/get-quote" },
};

/* ------------------------------------------------------------------ footer */

const footer: Footer = {
  tagline: SITE.shortDescription,
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Locations", href: "/locations" },
        { label: "Contact Us", href: "/contact" },
        { label: "Get a Quote", href: "/get-quote" },
      ],
    },
    {
      heading: "Categories",
      links: [
        { label: "Generators", href: "/categories?type=generators" },
        { label: "Compactors", href: "/categories?type=compactors" },
        {
          label: "Concrete Equipment",
          href: "/categories?type=concrete equipment",
        },
        { label: "Power Tools", href: "/categories?type=power tools" },
        { label: "Scaffolding", href: "/categories?type=scaffolding" },
        { label: "Lighting", href: "/categories?type=lighting" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms-of-services" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Terms of Service", href: "/terms-of-services" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  copyright: `© ${new Date().getFullYear()} ${SITE.legalName}. All rights reserved.`,
};

/* --------------------------------------------------------------------- seo */

const seo: SeoSettings = {
  defaultTitle: "Generator & Construction Equipment Rental Dubai | AL-KABIR",
  titleTemplate: "%s | AL-KABIR Dubai",
  defaultDescription: SITE.description,
  defaultKeywords: [...DEFAULT_KEYWORDS],
  defaultOgImage: SITE.ogImage,
  twitterHandle: "@alkabirrentals",
  routes: {},
  robots: {
    disallow: ["/api/", "/admin/", "/private/"],
    allowAiCrawlers: true,
  },
  sitemap: {
    exclude: [],
    defaultChangeFrequency: "weekly",
  },
};

/* --------------------------------------------------------------- redirects */

const redirects: Redirects = [];

/* -------------------------------------------------------------------- faqs */

const faqs: Faqs = {
  general: generalFaqs,
  generator: generatorFaqs,
  compactor: compactorFaqs,
  airCompressor: airCompressorFaqs,
  scaffolding: scaffoldingFaqs,
  concrete: concreteFaqs,
  powerTool: powerToolFaqs,
};

/* ---------------------------------------------------------------- services */

const services: ServiceContent[] = allServices.map((s) => ({
  ...s,
  status: "published" as const,
}));

/* --------------------------------------------------------------- locations */

const locations: LocationContent[] = dubaiLocations.map((l) => ({
  ...l,
  status: "published" as const,
}));

/* --------------------------------------------------------------- machinery */

const machinery: MachineryContent[] = allMachinery.map((m) => ({
  ...m,
  status: "published" as const,
}));

/* ------------------------------------------------------------- testimonials */

const testimonials: Testimonial[] = [];

/* -------------------------------------------------------------------- blog */

const blog: BlogPostContent[] = allBlogPosts.map((p) => ({
  ...p,
  status: "published" as const,
}));

/* -------------------------------------------------------------------- pages */

const pages: Page[] = [];

/* ------------------------------------------------------------------ export */

export const CONTENT_DEFAULTS = {
  settings,
  navigation,
  footer,
  seo,
  redirects,
  faqs,
  services,
  locations,
  machinery,
  testimonials,
  blog,
  pages,
} as const;
