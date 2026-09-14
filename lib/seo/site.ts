// Centralized SEO/business constants for AL-KABIR Construction Machinery Rentals
// Use these EVERYWHERE for NAP consistency (name, address, phone) — critical for Local SEO.

export const SITE = {
  name: "AL-KABIR Construction Machinery Rentals",
  shortName: "AL-KABIR",
  legalName: "AL-KABIR Construction Machinery Rentals LLC",
  url: "https://www.alkabirmachineryrentals.ae",
  logo: "https://www.alkabirmachineryrentals.ae/logo.svg",
  ogImage: "https://www.alkabirmachineryrentals.ae/og-image.jpg",
  description:
    "Dubai's #1 generator & construction equipment rental company. Generators (5–1000 KVA), compactors, air compressors, scaffolding & power tools across UAE.",
  shortDescription:
    "Dubai's #1 generator & construction equipment rental company. Same-day delivery across UAE.",
  founded: "2010",
  // Primary contact
  phone: "+971554555786",
  phoneFormatted: "+971 55 455 5786",
  whatsapp: "971554555786",
  email: "info@alkabirmachineryrentals.ae",
  emailContact: "contact@alkabirmachineryrentals.ae",
  emailSales: "sales@alkabirmachineryrentals.ae",
  phoneSales: "+971504845636",
  phoneSalesFormatted: "+971 50 484 5636",
  phoneContact: "+971555341166",
  phoneContactFormatted: "+971 55 534 1166",
  // Address (NAP consistency) — Marmoom, Al Lisaili, Dubai
  address: {
    streetAddress: "Shop No. 6, Saih Al Salam Street, Marmoom, Al Lisaili",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE",
  },
  // Geo (Al Lisaili / Marmoom approx — update with exact yard coordinates)
  geo: {
    latitude: 24.9258,
    longitude: 55.4208,
  },
  // Service area
  areaServed: [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah",
    "Umm Al Quwain",
    "United Arab Emirates",
  ],
  // Business hours
  openingHours: [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: ["Friday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  // Social profiles
  social: {
    facebook: "https://facebook.com/alkabirmachineryrentals",
    instagram: "https://instagram.com/alkabirmachineryrentals",
    linkedin: "https://linkedin.com/company/alkabir-machinery-rentals",
    twitter: "https://twitter.com/alkabirrentals",
    youtube: "https://youtube.com/@alkabirmachineryrentals",
  },
  // Languages spoken
  languages: ["en", "ar", "ur", "hi"],
  // Payment / currency
  currency: "AED",
  priceRange: "$$",
} as const;

export const sameAs = Object.values(SITE.social);

export const DEFAULT_KEYWORDS = [
  "construction machinery rental Dubai",
  "generator rental UAE",
  "diesel generator hire Dubai",
  "silent generator rental",
  "compactor rental Dubai",
  "air compressor hire UAE",
  "power tool rental Dubai",
  "scaffolding rental UAE",
  "concrete equipment rental",
  "construction equipment hire Abu Dhabi",
  "machinery rental Sharjah",
  "AL-KABIR machinery",
  "equipment rental near me Dubai",
  "heavy equipment hire UAE",
];

export function absoluteUrl(path: string = ""): string {
  if (!path) return SITE.url;
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
