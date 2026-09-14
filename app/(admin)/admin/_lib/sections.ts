/** Admin dashboard navigation + content-section metadata. */

export interface AdminSection {
  /** Route segment under /admin (empty = overview). */
  segment: string;
  label: string;
  /** Content key this section edits (if any). */
  contentKey?: string;
  /** Editor kind: structured form or validated JSON editor. */
  editor?: "settings" | "seo" | "redirects" | "json";
  description?: string;
}

export const ADMIN_SECTIONS: AdminSection[] = [
  { segment: "", label: "Overview" },
  {
    segment: "settings",
    label: "Website Settings",
    contentKey: "settings",
    editor: "settings",
    description: "Global business info, contact, address, social links.",
  },
  {
    segment: "navigation",
    label: "Navigation",
    contentKey: "navigation",
    editor: "json",
    description: "Primary menu links and header CTA.",
  },
  {
    segment: "footer",
    label: "Footer",
    contentKey: "footer",
    editor: "json",
    description: "Footer columns, links and copyright.",
  },
  {
    segment: "pages",
    label: "Pages",
    contentKey: "pages",
    editor: "json",
    description: "Custom static pages (slug-addressable).",
  },
  {
    segment: "machinery",
    label: "Rental Inventory",
    contentKey: "machinery",
    editor: "json",
    description: "Machinery catalog and specifications.",
  },
  {
    segment: "locations",
    label: "Locations",
    contentKey: "locations",
    editor: "json",
    description: "Service-area location pages.",
  },
  {
    segment: "services",
    label: "Services",
    contentKey: "services",
    editor: "json",
    description: "Service offerings and pricing.",
  },
  {
    segment: "faqs",
    label: "FAQs",
    contentKey: "faqs",
    editor: "json",
    description: "FAQ collections used across pages.",
  },
  {
    segment: "testimonials",
    label: "Testimonials",
    contentKey: "testimonials",
    editor: "json",
    description: "Customer testimonials.",
  },
  {
    segment: "blog",
    label: "Blog / Articles",
    contentKey: "blog",
    editor: "json",
    description: "Blog posts and articles.",
  },
  {
    segment: "seo",
    label: "SEO Manager",
    contentKey: "seo",
    editor: "seo",
    description: "Global SEO defaults + per-route overrides.",
  },
  {
    segment: "redirects",
    label: "Redirects",
    contentKey: "redirects",
    editor: "redirects",
    description: "301/302 redirect management.",
  },
];
