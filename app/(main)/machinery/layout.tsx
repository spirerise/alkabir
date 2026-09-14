import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { itemListSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { getAllMachinery } from "@/lib/data/machinery";

export const metadata: Metadata = {
  title: "Construction Equipment Rental UAE",
  description:
    "Rent generators (5–1000 KVA), compactors, concrete equipment, scaffolding & power tools across Dubai & UAE. Daily, weekly, monthly hire.",
  keywords: [
    // Primary keywords
    "construction equipment rental",
    "machinery rental UAE",
    "heavy equipment rental Dubai",
    "construction machinery hire",
    // Generators
    "generator rental UAE",
    "500 KVA generator rental",
    "350 KVA generator rental",
    "250 KVA generator rental",
    "150 KVA generator rental",
    "100 KVA generator rental",
    "60 KVA generator rental",
    "20 KVA generator rental",
    "silent generator rental",
    "diesel generator hire",
    "Caterpillar generator rental",
    "Cummins generator rental",
    // Compactors
    "roller compactor rental",
    "plate compactor rental",
    "10 ton roller rental",
    "5 ton roller rental",
    "road compactor hire",
    "soil compactor rental",
    "Bomag compactor",
    "JCB roller rental",
    // Concrete Equipment
    "concrete mixer rental",
    "concrete vibrator rental",
    "power trowel rental",
    "floor grinder rental",
    "concrete equipment hire",
    // Power Tools
    "jack hammer rental",
    "core cutting machine rental",
    "wall cutting machine rental",
    "chainsaw rental",
    "earth auger rental",
    "demolition hammer hire",
    // Other Equipment
    "tower light rental",
    "scaffolding rental",
    "water pump rental",
    "welding machine rental",
    "pressure washer rental",
    "vacuum cleaner rental",
    "industrial equipment hire",
    // Locations
    "equipment rental Dubai",
    "machinery rental Abu Dhabi",
    "construction equipment Sharjah",
    "equipment rental Ajman",
    "machinery hire Ras Al Khaimah",
  ],
  openGraph: {
    title: "Construction Equipment & Machinery Rental Dubai | AL-KABIR",
    description:
      "Rent generators, compactors, air compressors, scaffolding and power tools across UAE. Daily, weekly & monthly hire.",
    type: "website",
    locale: "en_AE",
    url: "https://www.alkabirmachineryrentals.ae/machinery",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [
      {
        url: "https://www.alkabirmachineryrentals.ae/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AL-KABIR construction equipment rental Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Equipment Rental Dubai | AL-KABIR",
    description:
      "Generators, compactors, air compressors and power tools for hire across UAE.",
    images: ["https://www.alkabirmachineryrentals.ae/og-image.jpg"],
  },
  alternates: {
    canonical: "/machinery",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MachineryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Cap the ItemList for performance — first 60 items is more than enough for SEO/AEO crawling
  const machinery = getAllMachinery().slice(0, 60);
  return (
    <>
      <JsonLd
        id="machinery-list"
        data={[
          itemListSchema({
            name: "Construction Equipment & Machinery for Rent in Dubai & UAE",
            description: "Browse AL-KABIR's full fleet of generators, compactors, air compressors, scaffolding and power tools available for daily, weekly and monthly hire.",
            items: machinery.map((m) => ({
              name: m.name,
              url: `/machinery/${m.slug}`,
              image: m.image,
            })),
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Machinery", url: "/machinery" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
