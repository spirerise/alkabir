import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/get-quote" },
  title: "Get a Free Equipment Rental Quote",
  description:
    "Request a free quote for generator or construction equipment rental in Dubai. Daily, weekly & monthly rates. Same-day response — call +971 55 455 5786.",
  openGraph: {
    title: "Get a Free Equipment Rental Quote | AL-KABIR Dubai",
    description: "Free quote for generator & construction equipment rental in Dubai. Same-day response.",
    type: "website",
    url: "https://www.alkabirmachineryrentals.ae/get-quote",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: "AL-KABIR equipment rental quote request" }],
  },
};

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
