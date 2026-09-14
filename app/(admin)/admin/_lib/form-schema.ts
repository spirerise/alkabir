/**
 * Form-field metadata (a "form schema") that mirrors the Zod content schemas in
 * `lib/content/schema.ts`. This descriptor layer is what powers the interactive
 * admin editors: instead of asking non-technical users to edit raw JSON, the
 * generic <FormEditor> renders proper inputs (text boxes, number fields,
 * toggles, dropdowns, tag/list editors, repeatable item cards) from these
 * definitions.
 *
 * IMPORTANT: This layer is for UX only. The server-side Zod validation in
 * `lib/content/validate.ts` remains the single source of truth / authority.
 * Anything not covered by a form definition (or edited via the Advanced JSON
 * tab) still passes through the same Zod gate on save.
 *
 * Keep this in sync with schema.ts when fields change. Fields intentionally
 * omitted here (e.g. computed/rarely-touched ones) can still be edited via the
 * Advanced (JSON) tab.
 */

/** Kinds of inputs the FormEditor knows how to render. */
export type FieldKind =
  | "text"
  | "textarea"
  | "richtext" // multi-line, HTML/Markdown allowed (sanitized server-side)
  | "number"
  | "boolean"
  | "select"
  | "image" // URL string (rendered with a preview)
  | "tags" // string[] edited as add/remove chips
  | "list" // array of objects -> repeatable cards of sub-fields
  | "group"; // nested object -> a labelled fieldset of sub-fields

export interface SelectOption {
  value: string;
  label: string;
}

export interface FieldDef {
  /** Object key this field maps to. */
  name: string;
  /** Human label shown to the editor. */
  label: string;
  kind: FieldKind;
  /** Helper text under the label. */
  help?: string;
  /** Placeholder for text/number inputs. */
  placeholder?: string;
  /** Options for `select`. */
  options?: SelectOption[];
  /** For `group` and `list`: the sub-fields of each object. */
  fields?: FieldDef[];
  /** For `list`: which sub-field to use as the card title. */
  itemTitleKey?: string;
  /** For `list`: singular noun used in the "Add {noun}" button. */
  itemNoun?: string;
  /** Marks a field that should span the full width in a 2-col grid. */
  wide?: boolean;
}

/**
 * A complete form definition for one content key.
 *
 * `shape` describes the top-level structure of the content value:
 *   - "object" : the value is a single object (settings, navigation, footer, seo)
 *   - "list"   : the value is an array of objects (services, machinery, ...)
 *
 * `faqs` (a record of name -> items) and `redirects` are handled with dedicated
 * shapes below.
 */
export type FormShape = "object" | "list" | "faqs" | "redirects";

export interface FormDef {
  shape: FormShape;
  /** Fields for the object (shape "object") or for each list item (shape "list"). */
  fields: FieldDef[];
  /** For "list": sub-field used as each item's card title. */
  itemTitleKey?: string;
  /** For "list": singular noun for the "Add {noun}" button. */
  itemNoun?: string;
}

/* -------------------------------------------------------------------------- */
/*  Reusable sub-field groups                                                 */
/* -------------------------------------------------------------------------- */

const statusField: FieldDef = {
  name: "status",
  label: "Status",
  kind: "select",
  help: "Draft pages are hidden from the public site.",
  options: [
    { value: "published", label: "Published" },
    { value: "draft", label: "Draft" },
  ],
};

const linkFields: FieldDef[] = [
  { name: "label", label: "Label", kind: "text", placeholder: "Home" },
  { name: "href", label: "Link (href)", kind: "text", placeholder: "/ or https://…" },
  { name: "external", label: "Opens external site", kind: "boolean" },
];

const seoFields: FieldDef[] = [
  { name: "title", label: "Meta title", kind: "text", wide: true },
  { name: "description", label: "Meta description", kind: "textarea", wide: true },
  { name: "canonical", label: "Canonical URL", kind: "text", wide: true },
  { name: "keywords", label: "Keywords", kind: "tags" },
  { name: "noindex", label: "No-index (hide from search)", kind: "boolean" },
  { name: "nofollow", label: "No-follow links", kind: "boolean" },
  { name: "ogImage", label: "Social share image URL", kind: "image", wide: true },
];

const seoGroup: FieldDef = {
  name: "seo",
  label: "SEO overrides (optional)",
  kind: "group",
  help: "Leave blank to use the global SEO defaults.",
  fields: seoFields,
};

/* -------------------------------------------------------------------------- */
/*  Per-content-key form definitions                                          */
/* -------------------------------------------------------------------------- */

const settingsForm: FormDef = {
  shape: "object",
  fields: [
    { name: "name", label: "Business name", kind: "text" },
    { name: "shortName", label: "Short name", kind: "text" },
    { name: "legalName", label: "Legal name", kind: "text" },
    { name: "url", label: "Website URL", kind: "text", placeholder: "https://…" },
    { name: "logo", label: "Logo URL", kind: "image" },
    { name: "ogImage", label: "Default social image URL", kind: "image" },
    { name: "description", label: "Description", kind: "textarea", wide: true },
    { name: "shortDescription", label: "Short description", kind: "textarea", wide: true },
    { name: "founded", label: "Founded (year)", kind: "text" },
    { name: "phone", label: "Phone", kind: "text" },
    { name: "phoneFormatted", label: "Phone (formatted)", kind: "text" },
    { name: "whatsapp", label: "WhatsApp", kind: "text" },
    { name: "email", label: "Email", kind: "text" },
    { name: "emailContact", label: "Contact email", kind: "text" },
    { name: "emailSales", label: "Sales email", kind: "text" },
    { name: "phoneSales", label: "Sales phone", kind: "text" },
    { name: "phoneSalesFormatted", label: "Sales phone (formatted)", kind: "text" },
    { name: "phoneContact", label: "Contact phone", kind: "text" },
    { name: "phoneContactFormatted", label: "Contact phone (formatted)", kind: "text" },
    {
      name: "address",
      label: "Address",
      kind: "group",
      fields: [
        { name: "streetAddress", label: "Street", kind: "text", wide: true },
        { name: "addressLocality", label: "City / locality", kind: "text" },
        { name: "addressRegion", label: "Region / emirate", kind: "text" },
        { name: "postalCode", label: "Postal code", kind: "text" },
        { name: "addressCountry", label: "Country", kind: "text" },
      ],
    },
    {
      name: "geo",
      label: "Geo coordinates",
      kind: "group",
      fields: [
        { name: "latitude", label: "Latitude", kind: "number" },
        { name: "longitude", label: "Longitude", kind: "number" },
      ],
    },
    { name: "areaServed", label: "Areas served", kind: "tags", wide: true },
    {
      name: "openingHours",
      label: "Opening hours",
      kind: "list",
      itemNoun: "time block",
      fields: [
        { name: "dayOfWeek", label: "Days", kind: "tags", help: "e.g. Monday, Tuesday" },
        { name: "opens", label: "Opens", kind: "text", placeholder: "08:00" },
        { name: "closes", label: "Closes", kind: "text", placeholder: "18:00" },
      ],
    },
    {
      name: "social",
      label: "Social links",
      kind: "group",
      fields: [
        { name: "facebook", label: "Facebook", kind: "text", wide: true },
        { name: "instagram", label: "Instagram", kind: "text", wide: true },
        { name: "linkedin", label: "LinkedIn", kind: "text", wide: true },
        { name: "twitter", label: "Twitter / X", kind: "text", wide: true },
        { name: "youtube", label: "YouTube", kind: "text", wide: true },
      ],
    },
    { name: "languages", label: "Languages", kind: "tags" },
    { name: "currency", label: "Currency", kind: "text", placeholder: "AED" },
    { name: "priceRange", label: "Price range", kind: "text", placeholder: "$$" },
  ],
};

const navigationForm: FormDef = {
  shape: "object",
  fields: [
    {
      name: "primary",
      label: "Primary menu links",
      kind: "list",
      itemTitleKey: "label",
      itemNoun: "link",
      fields: linkFields,
    },
    {
      name: "cta",
      label: "Header call-to-action button (optional)",
      kind: "group",
      fields: linkFields,
    },
  ],
};

const footerForm: FormDef = {
  shape: "object",
  fields: [
    { name: "tagline", label: "Tagline", kind: "textarea", wide: true },
    {
      name: "columns",
      label: "Footer columns",
      kind: "list",
      itemTitleKey: "heading",
      itemNoun: "column",
      fields: [
        { name: "heading", label: "Heading", kind: "text" },
        {
          name: "links",
          label: "Links",
          kind: "list",
          itemTitleKey: "label",
          itemNoun: "link",
          fields: linkFields,
        },
      ],
    },
    {
      name: "bottomLinks",
      label: "Bottom links",
      kind: "list",
      itemTitleKey: "label",
      itemNoun: "link",
      fields: linkFields,
    },
    { name: "copyright", label: "Copyright text", kind: "text", wide: true },
  ],
};

const pagesForm: FormDef = {
  shape: "list",
  itemTitleKey: "title",
  itemNoun: "page",
  fields: [
    { name: "slug", label: "Slug", kind: "text", help: "URL segment, e.g. about" },
    { name: "title", label: "Title", kind: "text" },
    statusField,
    {
      name: "hero",
      label: "Hero section",
      kind: "group",
      fields: [
        { name: "heading", label: "Heading", kind: "text", wide: true },
        { name: "subheading", label: "Subheading", kind: "textarea", wide: true },
      ],
    },
    { name: "intro", label: "Intro", kind: "richtext", wide: true },
    {
      name: "blocks",
      label: "Content blocks",
      kind: "list",
      itemTitleKey: "heading",
      itemNoun: "block",
      fields: [
        { name: "heading", label: "Heading", kind: "text", wide: true },
        { name: "body", label: "Body", kind: "richtext", wide: true },
      ],
    },
    seoGroup,
  ],
};

const servicesForm: FormDef = {
  shape: "list",
  itemTitleKey: "name",
  itemNoun: "service",
  fields: [
    { name: "id", label: "ID", kind: "text", help: "Unique slug, e.g. equipment-rental" },
    { name: "name", label: "Name", kind: "text" },
    { name: "shortDescription", label: "Short description", kind: "textarea", wide: true },
    { name: "description", label: "Description", kind: "richtext", wide: true },
    { name: "icon", label: "Icon", kind: "text" },
    { name: "image", label: "Image URL", kind: "image", wide: true },
    { name: "features", label: "Features", kind: "tags", wide: true },
    {
      name: "benefits",
      label: "Benefits",
      kind: "list",
      itemTitleKey: "title",
      itemNoun: "benefit",
      fields: [
        { name: "title", label: "Title", kind: "text" },
        { name: "description", label: "Description", kind: "textarea", wide: true },
      ],
    },
    {
      name: "pricing",
      label: "Pricing",
      kind: "list",
      itemTitleKey: "period",
      itemNoun: "price",
      fields: [
        { name: "period", label: "Period", kind: "text", placeholder: "per day" },
        { name: "price", label: "Price", kind: "text", placeholder: "AED 500" },
        { name: "note", label: "Note", kind: "text", wide: true },
      ],
    },
    { name: "popular", label: "Popular", kind: "boolean" },
    statusField,
    seoGroup,
  ],
};

const locationsForm: FormDef = {
  shape: "list",
  itemTitleKey: "name",
  itemNoun: "location",
  fields: [
    { name: "id", label: "ID", kind: "text" },
    { name: "name", label: "Name", kind: "text" },
    { name: "slug", label: "Slug", kind: "text" },
    {
      name: "region",
      label: "Region",
      kind: "select",
      options: [
        { value: "residential", label: "Residential" },
        { value: "commercial", label: "Commercial" },
        { value: "industrial", label: "Industrial" },
        { value: "premium", label: "Premium" },
      ],
    },
    { name: "description", label: "Description", kind: "textarea", wide: true },
    { name: "metaTitle", label: "Meta title", kind: "text", wide: true },
    { name: "metaDescription", label: "Meta description", kind: "textarea", wide: true },
    { name: "intro", label: "Intro", kind: "textarea", wide: true },
    { name: "landmarks", label: "Landmarks", kind: "tags", wide: true },
    { name: "nearbyAreas", label: "Nearby areas", kind: "tags", wide: true },
    { name: "projectTypes", label: "Project types", kind: "tags", wide: true },
    { name: "topEquipment", label: "Top equipment", kind: "tags", wide: true },
    statusField,
    seoGroup,
  ],
};

const machineryForm: FormDef = {
  shape: "list",
  itemTitleKey: "name",
  itemNoun: "machine",
  fields: [
    { name: "id", label: "ID (number)", kind: "number" },
    { name: "slug", label: "Slug", kind: "text" },
    { name: "name", label: "Name", kind: "text" },
    { name: "brand", label: "Brand", kind: "text" },
    { name: "category", label: "Category", kind: "text" },
    { name: "price", label: "Price", kind: "number" },
    { name: "priceUnit", label: "Price unit", kind: "text", placeholder: "day" },
    { name: "weeklyPrice", label: "Weekly price", kind: "number" },
    { name: "monthlyPrice", label: "Monthly price", kind: "number" },
    { name: "image", label: "Main image URL", kind: "image", wide: true },
    { name: "gallery", label: "Gallery image URLs", kind: "tags", wide: true },
    { name: "specs", label: "Specs (bullet list)", kind: "tags", wide: true },
    { name: "available", label: "Available", kind: "boolean" },
    { name: "rating", label: "Rating", kind: "number" },
    { name: "reviews", label: "Review count", kind: "number" },
    { name: "capacity", label: "Capacity", kind: "text" },
    { name: "year", label: "Year", kind: "number" },
    { name: "location", label: "Location", kind: "text" },
    { name: "description", label: "Description", kind: "richtext", wide: true },
    { name: "features", label: "Features", kind: "tags", wide: true },
    statusField,
    seoGroup,
  ],
};

const testimonialsForm: FormDef = {
  shape: "list",
  itemTitleKey: "name",
  itemNoun: "testimonial",
  fields: [
    { name: "id", label: "ID", kind: "text" },
    { name: "name", label: "Name", kind: "text" },
    { name: "role", label: "Role", kind: "text" },
    { name: "company", label: "Company", kind: "text" },
    { name: "avatar", label: "Avatar URL", kind: "image", wide: true },
    { name: "rating", label: "Rating (0-5)", kind: "number" },
    { name: "quote", label: "Quote", kind: "textarea", wide: true },
    statusField,
  ],
};

const blogForm: FormDef = {
  shape: "list",
  itemTitleKey: "title",
  itemNoun: "post",
  fields: [
    { name: "id", label: "ID", kind: "text" },
    { name: "title", label: "Title", kind: "text", wide: true },
    { name: "slug", label: "Slug", kind: "text" },
    { name: "excerpt", label: "Excerpt", kind: "textarea", wide: true },
    { name: "content", label: "Content", kind: "richtext", wide: true },
    { name: "image", label: "Cover image URL", kind: "image", wide: true },
    {
      name: "author",
      label: "Author",
      kind: "group",
      fields: [
        { name: "name", label: "Name", kind: "text" },
        { name: "role", label: "Role", kind: "text" },
        { name: "avatar", label: "Avatar URL", kind: "image", wide: true },
      ],
    },
    { name: "category", label: "Category", kind: "text" },
    { name: "tags", label: "Tags", kind: "tags", wide: true },
    { name: "publishedAt", label: "Published at", kind: "text", placeholder: "2025-01-31" },
    { name: "readTime", label: "Read time (min)", kind: "number" },
    { name: "featured", label: "Featured", kind: "boolean" },
    statusField,
    seoGroup,
  ],
};

const seoForm: FormDef = {
  shape: "object",
  fields: [
    { name: "defaultTitle", label: "Default title", kind: "text", wide: true },
    { name: "titleTemplate", label: "Title template", kind: "text", help: "Use %s for the page title, e.g. \"%s | AL-KABIR\"", wide: true },
    { name: "defaultDescription", label: "Default description", kind: "textarea", wide: true },
    { name: "defaultKeywords", label: "Default keywords", kind: "tags", wide: true },
    { name: "defaultOgImage", label: "Default social image URL", kind: "image", wide: true },
    { name: "twitterHandle", label: "Twitter handle", kind: "text", placeholder: "@alkabir" },
    {
      name: "robots",
      label: "Robots",
      kind: "group",
      fields: [
        { name: "disallow", label: "Disallow paths", kind: "tags", wide: true },
        { name: "allowAiCrawlers", label: "Allow AI crawlers", kind: "boolean" },
      ],
    },
    {
      name: "sitemap",
      label: "Sitemap",
      kind: "group",
      fields: [
        { name: "exclude", label: "Exclude paths", kind: "tags", wide: true },
        {
          name: "defaultChangeFrequency",
          label: "Default change frequency",
          kind: "select",
          options: [
            { value: "always", label: "Always" },
            { value: "hourly", label: "Hourly" },
            { value: "daily", label: "Daily" },
            { value: "weekly", label: "Weekly" },
            { value: "monthly", label: "Monthly" },
            { value: "yearly", label: "Yearly" },
            { value: "never", label: "Never" },
          ],
        },
      ],
    },
  ],
};

const redirectsForm: FormDef = {
  shape: "redirects",
  itemNoun: "redirect",
  fields: [
    { name: "source", label: "From (source path)", kind: "text", placeholder: "/old-url" },
    { name: "destination", label: "To (destination)", kind: "text", placeholder: "/new-url" },
    { name: "permanent", label: "Permanent (301)", kind: "boolean" },
  ],
};

const faqsForm: FormDef = {
  shape: "faqs",
  itemNoun: "FAQ",
  fields: [
    { name: "question", label: "Question", kind: "text", wide: true },
    { name: "answer", label: "Answer", kind: "textarea", wide: true },
  ],
};

/**
 * Registry of interactive form definitions, keyed by content key. A section
 * with an entry here renders the interactive editor; anything missing falls
 * back to the raw JSON editor automatically.
 */
export const FORM_DEFS: Record<string, FormDef> = {
  settings: settingsForm,
  navigation: navigationForm,
  footer: footerForm,
  pages: pagesForm,
  services: servicesForm,
  locations: locationsForm,
  machinery: machineryForm,
  testimonials: testimonialsForm,
  blog: blogForm,
  seo: seoForm,
  redirects: redirectsForm,
  faqs: faqsForm,
};

export function getFormDef(key: string): FormDef | undefined {
  return FORM_DEFS[key];
}
