import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { contactPageSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us — Construction Equipment Rental Dubai",
  description:
    "Contact AL-KABIR for generator & construction equipment rental in Dubai. 24/7 support, same-day delivery across UAE. Call +971 55 455 5786.",
  keywords: [
    "contact AL-KABIR",
    "construction equipment rental contact Dubai",
    "generator rental contact UAE",
    "machinery hire phone number Dubai",
  ],
  openGraph: {
    title: "Contact AL-KABIR Construction Machinery Rentals",
    description: "Reach our 24/7 hire desk for generators, compactors and construction equipment across Dubai and the UAE.",
    type: "website",
    url: "https://www.alkabirmachineryrentals.ae/contact",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: "Contact AL-KABIR Construction Machinery Rentals" }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        id="contact"
        data={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
