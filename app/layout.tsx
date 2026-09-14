import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import { JsonLd } from "@/components/seo/json-ld";
import { SITE, DEFAULT_KEYWORDS } from "@/lib/seo/site";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/seo/schema";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Generator & Construction Equipment Rental Dubai | AL-KABIR",
    template: "%s | AL-KABIR Dubai",
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  category: "Construction Equipment Rental",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_US", "ar_AE"],
    url: SITE.url,
    siteName: SITE.name,
    title:
      "AL-KABIR Construction Machinery Rentals Dubai | Generator & Equipment Rental UAE",
    description:
      "Dubai's leading generator & construction equipment rental company. Generators (5–1000 KVA), compactors, air compressors, scaffolding & power tools for hire across UAE. Same-day delivery, certified operators, 24/7 support.",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "AL-KABIR Construction Machinery Rentals — Generator & Equipment Hire Dubai UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alkabirrentals",
    creator: "@alkabirrentals",
    title:
      "AL-KABIR Construction Machinery Rentals Dubai | Generator Rental UAE",
    description:
      "Generator & construction equipment rental in Dubai & UAE. Same-day delivery, certified operators, 24/7 support.",
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-site-verification-code",
    // other: { "facebook-domain-verification": "..." },
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE" dir="ltr">
      <head>
        {/* Site-wide JSON-LD: Organization + LocalBusiness + WebSite (sitelinks search box) */}
        <JsonLd
          id="site-graph"
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
        {/* DNS prefetch + preconnect for performance (Core Web Vitals) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}

        {/* WhatsApp Floating Action Button */}
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
            "Hi AL-KABIR, I'd like a quote for construction equipment rental."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with AL-KABIR on WhatsApp"
          title="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.072-1.952A15.913 15.913 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.608c-.39 1.1-1.932 2.012-3.172 2.278-.848.18-1.956.324-5.684-1.222-4.772-1.976-7.838-6.82-8.076-7.138-.228-.318-1.918-2.554-1.918-4.872s1.214-3.456 1.644-3.928c.43-.472.94-.59 1.254-.59.312 0 .626.002.9.016.288.014.676-.11 1.058.806.39.94 1.332 3.244 1.448 3.48.118.236.196.51.04.826-.158.316-.236.514-.472.79-.236.278-.496.62-.708.832-.236.236-.482.492-.208.964.276.472 1.226 2.022 2.632 3.276 1.81 1.614 3.336 2.114 3.808 2.35.472.236.748.198 1.022-.118.276-.316 1.178-1.374 1.492-1.846.314-.472.628-.39 1.06-.236.432.158 2.736 1.29 3.206 1.526.472.236.786.354.902.55.118.196.118 1.13-.272 2.226z" />
          </svg>
        </a>
      </body>
      {/* Google Analytics 4 — loaded via Next.js official third-party component
          (uses next/script with afterInteractive strategy under the hood) */}
      {GA_MEASUREMENT_ID ? (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      ) : null}
    </html>
  );
}
