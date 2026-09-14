import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dubaiLocations, getLocationBySlug } from "@/lib/data/locations";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/sections/faq-section";
import { localBusinessSchema, breadcrumbSchema, serviceSchema } from "@/lib/seo/schema";
import { getFaqsForLocation } from "@/lib/data/faqs";
import { SITE, absoluteUrl } from "@/lib/seo/site";
import { SeoContentSection } from "@/components/sections/seo-content-section";
import {
  Truck,
  HardHat,
  Wrench,
  PhoneCall,
  Construction,
  Building2,
  Factory,
  Zap,
  Wind,
} from "lucide-react";

interface LocationDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return dubaiLocations.map((location) => ({
    id: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const location = getLocationBySlug(id);

  if (!location) {
    return {
      title: "Location Not Found",
      description: "The requested location was not found.",
      robots: { index: false, follow: false },
    };
  }

  const url = `/locations/${location.slug}`;
  // Build SEO title (≤60 chars) and description (Google sweet-spot 150-160 chars).
  const seoTitle = `Equipment Rental in ${location.name}, Dubai | AL-KABIR`.slice(0, 60);
  let baseDesc = (location.metaDescription || "").replace(/\s+/g, " ").trim();
  // Pad shorter descriptions with location-specific filler so we approach
  // the 150-160 char sweet-spot rather than sitting around 130.
  if (baseDesc.length < 150) {
    const filler = ` Generators, compactors, air compressors, scaffolding & power tools delivered same-day across ${location.name}, Dubai.`;
    baseDesc = (baseDesc + filler).replace(/\s+/g, " ").trim();
  }
  const seoDesc =
    baseDesc.length > 158
      ? baseDesc.slice(0, 155).replace(/[,.;:\s]+\S*$/, "") + "…"
      : baseDesc;

  return {
    title: { absolute: seoTitle },
    description: seoDesc,
    keywords: [
      `construction equipment rental ${location.name}`,
      `generator hire ${location.name}`,
      `machinery rental ${location.name} Dubai`,
      `equipment rental near ${location.name}`,
      `${location.name} construction machinery`,
      "AL-KABIR machinery",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      url: absoluteUrl(url),
      type: "website",
      locale: "en_AE",
      siteName: "AL-KABIR Construction Machinery Rentals",
      images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: `Equipment rental in ${location.name}, Dubai` }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDesc,
      images: ["https://www.alkabirmachineryrentals.ae/og-image.jpg"],
    },
    other: {
      "geo.region": "AE-DU",
      "geo.placename": location.name,
    },
  };
}

const equipmentAvailable = [
  { name: "Generators", count: "25+", icon: <Zap className="h-6 w-6" /> },
  { name: "Compactors", count: "15+", icon: <Construction className="h-6 w-6" /> },
  { name: "Air Compressors", count: "10+", icon: <Wind className="h-6 w-6" /> },
  { name: "Power Tools", count: "50+", icon: <Wrench className="h-6 w-6" /> },
  { name: "Concrete Equipment", count: "12+", icon: <Factory className="h-6 w-6" /> },
  { name: "Scaffolding", count: "20+", icon: <Building2 className="h-6 w-6" /> },
];

const services = [
  {
    title: "Equipment Rental",
    description: "Daily, weekly, and monthly rental options available",
    icon: <Wrench className="h-8 w-8" />,
  },
  {
    title: "On-Site Delivery",
    description: "Fast delivery directly to your construction site",
    icon: <Truck className="h-8 w-8" />,
  },
  {
    title: "Operator Services",
    description: "Skilled operators available upon request",
    icon: <HardHat className="h-8 w-8" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: <PhoneCall className="h-8 w-8" />,
  },
];

export default async function LocationDetailPage({
  params,
}: LocationDetailPageProps) {
  const { id } = await params;
  const location = getLocationBySlug(id);

  if (!location) {
    notFound();
  }

  const faqs = getFaqsForLocation(location.name);
  const url = `/locations/${location.slug}`;

  const regionColors = {
    premium: "bg-amber-500",
    residential: "bg-blue-500",
    commercial: "bg-purple-500",
    industrial: "bg-zinc-500",
  };

  return (
    <>
      <JsonLd
        id={`location-${location.slug}`}
        data={[
          // Localised LocalBusiness pointing back to root entity
          localBusinessSchema({
            "@id": `${SITE.url}${url}#localbusiness`,
            name: `${SITE.name} — ${location.name}`,
            description: location.metaDescription,
            url: absoluteUrl(url),
            areaServed: [
              { "@type": "Place", name: location.name, containedInPlace: { "@type": "City", name: "Dubai" } },
            ],
          }),
          // Service-area page schema
          serviceSchema({
            name: `Construction Machinery Rental in ${location.name}`,
            description: `Generator, compactor, air compressor and construction equipment rental delivered to ${location.name}, Dubai. Same-day delivery, certified operators, daily / weekly / monthly hire.`,
            url,
            serviceType: "Construction Equipment Rental",
            areaServed: [location.name, "Dubai", "UAE"],
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Locations", url: "/locations" },
            { name: location.name, url },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container relative mx-auto px-4">
          {/* Breadcrumb (schema injected globally above) */}
          <Breadcrumbs
            withSchema={false}
            className="mb-8 text-zinc-400 [&_a:hover]:text-white [&_[aria-current=page]]:text-amber-500"
            items={[
              { name: "Locations", url: "/locations" },
              { name: location.name, url },
            ]}
          />

          <div className="mx-auto max-w-4xl">
            <Badge className={`mb-4 text-white ${regionColors[location.region]}`}>
              {location.region === "premium"
                ? "Premium Area"
                : location.region === "residential"
                  ? "Residential Area"
                  : location.region === "commercial"
                    ? "Commercial District"
                    : "Industrial Zone"}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Construction Machinery Rental in{" "}
              <span className="text-amber-500">{location.name}</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-zinc-400">
              {location.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400"
              >
                <Link href="/get-quote" className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Get a Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 border-zinc-700 bg-zinc-900/50 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-zinc-800"
              >
                <Link href="tel:+971554555786" className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Available */}
      <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
            Equipment Available in {location.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {equipmentAvailable.map((equipment) => (
              <Card
                key={equipment.name}
                className="text-center dark:bg-zinc-800"
              >
                <CardContent className="p-6">
                  <div className="mb-3 flex justify-center text-amber-600 dark:text-amber-500">
                    {equipment.icon}
                  </div>
                  <div className="font-semibold text-zinc-900 dark:text-white">
                    {equipment.name}
                  </div>
                  <div className="text-sm text-amber-600 dark:text-amber-500">
                    {equipment.count} units
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/machinery">Browse All Machinery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
            Our Services in {location.name}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="dark:bg-zinc-800">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-500">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              Why Choose AL-KABIR in {location.name}?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl dark:bg-amber-500/20">
                  ✓
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white">
                    Local Expertise
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Deep knowledge of {location.name} terrain and project
                    requirements
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl dark:bg-amber-500/20">
                  ✓
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white">
                    Fast Delivery
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Same-day equipment delivery to {location.name} project sites
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl dark:bg-amber-500/20">
                  ✓
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white">
                    Competitive Rates
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Best prices for machinery rental in {location.name} area
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl dark:bg-amber-500/20">
                  ✓
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white">
                    Quality Equipment
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Well-maintained machinery from top brands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SeoContentSection
        title={`Why ${location.name} contractors choose AL-KABIR for equipment rental`}
        intro={
          <>
            AL-KABIR Construction Machinery Rentals has been delivering generators, compactors, air
            compressors, scaffolding, jack hammers, lighting towers and a full catalogue of branded
            power tools to projects in {location.name} for more than a decade. Our central yard in the
            Saih Al Salam corridor allows us to dispatch most {location.name} orders the same day they
            are booked, with transit times typically under three hours during normal traffic
            conditions. Whether your {location.name} project is a residential build, a commercial
            fit-out, an event installation or an emergency power restoration, we have the equipment,
            the operators and the logistics network to support you.
          </>
        }
        blocks={[
          {
            heading: `Equipment most in demand in ${location.name}`,
            paragraphs: [
              <>
                The mix of equipment we deliver to {location.name} reflects the kind of construction
                work that dominates the area. Diesel and silent generators in the 20&ndash;500 KVA
                range are the highest-volume rentals, supporting both temporary site power and
                back-up for permanent installations during commissioning. Plate compactors and
                vibratory rollers are heavily used for groundworks, paving and landscaping. Hilti
                and Bosch jack hammers, combihammers and core-cutting machines see steady demand
                for breakout, demolition and MEP coring work. Scaffolding sets, aluminium ladders,
                lighting towers and power tools round out a typical {location.name} order.
              </>,
            ],
          },
          {
            heading: `Delivery, pickup and on-site support in ${location.name}`,
            paragraphs: [
              <>
                Our {location.name} dispatch coordinator manages a pre-cleared list of access procedures
                with the major developers, community-management firms and site-security operations
                in the area, which avoids the most common cause of rental delays: gate-pass and access
                paperwork issues. For sites that require certified operators, our operator pool
                includes valid UAE heavy-equipment licence holders ready to deploy on next-day notice.
                On-site preventive maintenance, fuel top-ups and emergency callouts are available
                through our 24/7 service line.
              </>,
            ],
          },
          {
            heading: "Flexible commercial terms",
            paragraphs: [
              <>
                Rentals to {location.name} can be structured as daily, weekly, monthly or long-term
                framework agreements, with discounted rates for projects exceeding 90 days. All quotes
                include itemised delivery, pickup and standard servicing costs &mdash; with no
                surprise charges at invoice stage. Replacement guarantees are written into every
                agreement: in the unlikely event of a breakdown, a replacement machine is
                dispatched, not negotiated. We accept bank transfers, corporate accounts and
                credit-card payments.
              </>,
            ],
          },
          {
            heading: "Get started",
            paragraphs: [
              <>
                For a same-day quote covering equipment, delivery and operator costs to {location.name},{" "}
                please call <a className="text-amber-600 hover:underline dark:text-amber-500" href="tel:+971554555786">+971 55 455 5786</a>{" "}
                or use the <Link href="/get-quote" className="text-amber-600 hover:underline dark:text-amber-500">online quote form</Link>.
                You can also browse our complete <Link href="/machinery" className="text-amber-600 hover:underline dark:text-amber-500">machinery catalogue</Link>{" "}
                to identify exactly which model best fits your project before requesting pricing.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/locations", label: "All UAE service areas" },
          { href: "/machinery", label: "Equipment fleet" },
          { href: "/categories", label: "Browse by category" },
          { href: "/services", label: "Rental services" },
          { href: "/get-quote", label: "Request a quote" },
          { href: "/contact", label: "Contact us" },
        ]}
      />

      {/* FAQ Section */}
      <FaqSection
        faqs={faqs}
        title={`Equipment Rental in ${location.name} — FAQs`}
        subtitle={`Common questions about renting construction machinery in ${location.name}, Dubai.`}
      />

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Start Your Project in {location.name}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-black/80">
            Get a free quote for equipment rental in {location.name}. Our team is
            ready to support your construction project with the right machinery.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+971554555786"
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-semibold text-amber-500 transition-colors hover:bg-zinc-900"
            >
              <span>📞</span> +971 55 455 5786
            </a>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-black bg-transparent text-black hover:bg-black/10"
            >
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content — unique per location */}
      <section className="bg-white py-16 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-zinc max-w-none dark:prose-invert">
              <h2>
                Construction Equipment Rental in {location.name}, Dubai
              </h2>
              {location.intro ? (
                <p>{location.intro}</p>
              ) : (
                <p>
                  AL-KABIR Construction Machinery Rentals supplies generators,
                  compactors, breakers, dewatering pumps and small-plant for
                  projects in {location.name}. Same-day delivery and weekly
                  billing are standard.
                </p>
              )}

              {location.projectTypes && location.projectTypes.length > 0 && (
                <>
                  <h3>Typical projects we support in {location.name}</h3>
                  <ul>
                    {location.projectTypes.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </>
              )}

              {location.topEquipment && location.topEquipment.length > 0 && (
                <>
                  <h3>Most-rented equipment for {location.name}</h3>
                  <ul>
                    {location.topEquipment.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </>
              )}

              {location.landmarks && location.landmarks.length > 0 && (
                <p>
                  <strong>Landmarks &amp; sub-communities we deliver to:</strong>{" "}
                  {location.landmarks.join(" · ")}.
                </p>
              )}

              {location.nearbyAreas && location.nearbyAreas.length > 0 && (
                <p>
                  <strong>We also serve nearby:</strong>{" "}
                  {location.nearbyAreas.map((n, i) => {
                    const near = dubaiLocations.find(
                      (l) =>
                        l.name.toLowerCase() === n.toLowerCase() ||
                        l.slug === n.toLowerCase().replace(/\s+/g, "-"),
                    );
                    return (
                      <span key={n}>
                        {near ? (
                          <Link
                            href={`/locations/${near.slug}`}
                            className="text-amber-600 hover:underline dark:text-amber-500"
                          >
                            {n}
                          </Link>
                        ) : (
                          n
                        )}
                        {i < location.nearbyAreas!.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                  .
                </p>
              )}

              <p>
                Call <a href="tel:+971554555786">+971 55 455 5786</a> or{" "}
                <Link href="/get-quote">request a free quote</Link> for
                construction machinery rental in {location.name} — same-day
                delivery, certified operators on request, and daily / weekly /
                monthly hire terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
