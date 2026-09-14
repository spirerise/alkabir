// JSON-LD structured data generators for SEO + AEO + Entity SEO.
// All functions return plain objects — wrap with <JsonLd> component to render.

import { SITE, sameAs, absoluteUrl } from "./site";

type SchemaObject = Record<string, unknown>;

/* -------------------------------------------------------------------------- */
/*  Organization & LocalBusiness — site-wide entity                           */
/* -------------------------------------------------------------------------- */

export function organizationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
      width: 512,
      height: 512,
    },
    image: SITE.logo,
    description: SITE.description,
    foundingDate: SITE.founded,
    telephone: SITE.phoneFormatted,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneFormatted,
        contactType: "customer service",
        areaServed: SITE.areaServed,
        availableLanguage: SITE.languages,
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneFormatted,
        contactType: "sales",
        areaServed: SITE.areaServed,
        availableLanguage: SITE.languages,
      },
    ],
    sameAs,
  };
}

export function localBusinessSchema(overrides?: Partial<SchemaObject>): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EquipmentRentalAgency"],
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    legalName: SITE.legalName,
    image: [SITE.logo, SITE.ogImage],
    logo: SITE.logo,
    url: SITE.url,
    telephone: SITE.phoneFormatted,
    email: SITE.email,
    description: SITE.description,
    priceRange: SITE.priceRange,
    currenciesAccepted: SITE.currency,
    paymentAccepted: "Cash, Credit Card, Bank Transfer, Cheque",
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SITE.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: SITE.openingHours,
    sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "287",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Machinery Rental Catalog",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Generator Rental",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diesel Generator Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Silent Generator Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portable Generator Rental" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Construction Equipment Rental",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compactor Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Compressor Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Equipment Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scaffolding Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Power Tool Rental" } },
          ],
        },
      ],
    },
    ...overrides,
  };
}

/* -------------------------------------------------------------------------- */
/*  WebSite + SearchAction — sitelinks search box                             */
/* -------------------------------------------------------------------------- */

export function websiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/machinery?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-AE",
  };
}

/* -------------------------------------------------------------------------- */
/*  Breadcrumb                                                                */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*  FAQPage                                                                   */
/* -------------------------------------------------------------------------- */

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FAQItem[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*  Service                                                                   */
/* -------------------------------------------------------------------------- */

export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  serviceType?: string;
  priceRange?: string;
  areaServed?: string[];
}

export function serviceSchema(input: ServiceSchemaInput): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url: absoluteUrl(input.url),
    image: input.image,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: (input.areaServed ?? SITE.areaServed).map((name) => ({
      "@type": "City",
      name,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: SITE.currency,
      priceRange: input.priceRange ?? SITE.priceRange,
      availability: "https://schema.org/InStock",
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Product / Rental Equipment                                                */
/* -------------------------------------------------------------------------- */

export interface ProductSchemaInput {
  name: string;
  description: string;
  brand: string;
  category: string;
  sku: string | number;
  image: string | string[];
  price: number;
  priceCurrency?: string;
  availability?: boolean;
  url: string;
  rating?: number;
  reviewCount?: number;
  additionalProperties?: { name: string; value: string | number }[];
}

export function productSchema(input: ProductSchemaInput): SchemaObject {
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);

  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    sku: `AK-${input.sku}`,
    mpn: `AK-${input.sku}`,
    category: input.category,
    image: Array.isArray(input.image) ? input.image : [input.image],
    url: absoluteUrl(input.url),
    brand: { "@type": "Brand", name: input.brand },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(input.url),
      priceCurrency: input.priceCurrency ?? SITE.currency,
      price: input.price,
      priceValidUntil: validUntil.toISOString().split("T")[0],
      availability: input.availability !== false
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/UsedCondition",
      seller: { "@id": `${SITE.url}/#organization` },
      eligibleRegion: SITE.areaServed.map((name) => ({ "@type": "Country", name })),
    },
  };

  if (input.rating && input.reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: input.rating,
      reviewCount: input.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  if (input.additionalProperties?.length) {
    schema.additionalProperty = input.additionalProperties.map((p) => ({
      "@type": "PropertyValue",
      name: p.name,
      value: p.value,
    }));
  }

  return schema;
}

/* -------------------------------------------------------------------------- */
/*  Article / BlogPosting                                                     */
/* -------------------------------------------------------------------------- */

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorRole?: string;
  url: string;
  keywords?: string[];
  articleSection?: string;
}

export function articleSchema(input: ArticleSchemaInput): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    image: [input.image],
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName,
      jobTitle: input.authorRole,
    },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(input.url),
    },
    url: absoluteUrl(input.url),
    keywords: input.keywords?.join(", "),
    articleSection: input.articleSection,
    inLanguage: "en-AE",
  };
}

/* -------------------------------------------------------------------------- */
/*  ContactPage / ContactPoint                                                */
/* -------------------------------------------------------------------------- */

export function contactPageSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE.name}`,
    url: absoluteUrl("/contact"),
    mainEntity: { "@id": `${SITE.url}/#organization` },
  };
}

/* -------------------------------------------------------------------------- */
/*  AboutPage                                                                 */
/* -------------------------------------------------------------------------- */

export function aboutPageSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE.name}`,
    url: absoluteUrl("/about"),
    mainEntity: { "@id": `${SITE.url}/#organization` },
  };
}

/* -------------------------------------------------------------------------- */
/*  ItemList — useful for listing pages (machinery, services, locations)      */
/* -------------------------------------------------------------------------- */

export interface ItemListInput {
  name: string;
  description?: string;
  items: { name: string; url: string; image?: string }[];
}

export function itemListSchema(input: ItemListInput): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    description: input.description,
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: absoluteUrl(item.url),
      name: item.name,
      image: item.image,
    })),
  };
}
