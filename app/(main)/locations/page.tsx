import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dubaiLocations, locationsByRegion } from "@/lib/data/locations";
import { JsonLd } from "@/components/seo/json-ld";
import { itemListSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SeoContentSection } from "@/components/sections/seo-content-section";
import { 
  Trophy, 
  Home, 
  Building2, 
  Factory, 
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/locations" },
  title: "Equipment Rental Locations Dubai & UAE",
  description:
    "Same-day construction equipment delivery to 70+ Dubai locations: DAMAC Hills, Business Bay, Al Quoz, Palm Jumeirah, JVC, Downtown & all UAE Emirates.",
  keywords: [
    "machinery rental Dubai locations",
    "equipment hire near me Dubai",
    "construction equipment delivery UAE",
    "construction equipment rental Dubai",
    "generator rental DAMAC Hills",
    "compactor hire Business Bay",
    "AL-KABIR equipment delivery",
    "machinery rental Al Quoz",
    "equipment hire JVC Dubai",
    "construction equipment Downtown Dubai",
  ],
  openGraph: {
    title: "Equipment Rental Locations Dubai & UAE | AL-KABIR",
    description:
      "Construction equipment rental & same-day delivery across 70+ Dubai locations and all UAE Emirates.",
    type: "website",
    url: "https://www.alkabirmachineryrentals.ae/locations",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: "AL-KABIR equipment rental locations Dubai" }],
  },
};

const regionLabels = {
  premium: { label: "Premium Communities", icon: <Trophy className="h-5 w-5" />, color: "bg-amber-500" },
  residential: { label: "Residential Areas", icon: <Home className="h-5 w-5" />, color: "bg-blue-500" },
  commercial: { label: "Commercial Districts", icon: <Building2 className="h-5 w-5" />, color: "bg-purple-500" },
  industrial: { label: "Industrial Zones", icon: <Factory className="h-5 w-5" />, color: "bg-zinc-500" },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        id="locations-list"
        data={[
          itemListSchema({
            name: "AL-KABIR Equipment Rental Locations in Dubai & UAE",
            description: "70+ service areas across Dubai for construction equipment rental and same-day delivery.",
            items: dubaiLocations.map((l) => ({
              name: l.name,
              url: `/locations/${l.slug}`,
            })),
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Locations", url: "/locations" },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-500">
              Same-Day Equipment Delivery | 70+ Dubai Locations
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Construction Equipment Rental{" "}
              <span className="text-amber-500">Anywhere in Dubai</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
              AL-KABIR Construction Machinery Rentals delivers generators, compactors, air compressors & construction 
              equipment to every corner of Dubai – from DAMAC Hills to Jebel Ali. Fast delivery, 
              competitive rates, 24/7 support.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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

      {/* Stats Bar */}
      <section className="border-b border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">{dubaiLocations.length}+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Service Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Machines Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">24/7</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">Same Day</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Delivery Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-zinc-50 py-16 dark:bg-zinc-900 md:py-24">
        <div className="container mx-auto px-4">
          {/* Location Regions */}
          {(Object.keys(locationsByRegion) as Array<keyof typeof locationsByRegion>).map(
            (regionKey) => {
              const region = regionLabels[regionKey];
              const locations = locationsByRegion[regionKey];
              
              return (
                <div key={regionKey} className="mb-16">
                  <div className="mb-8 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${region.color}`}>
                      {region.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
                        {region.label}
                      </h2>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {locations.length} locations
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {locations.map((location) => (
                      <Link key={location.id} href={`/locations/${location.slug}`}>
                        <Card className="group h-full cursor-pointer border-zinc-200 transition-all hover:border-amber-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-800 dark:hover:border-amber-500">
                          <CardContent className="p-5">
                            <div className="mb-3 flex items-start justify-between">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-amber-500" />
                                <h3 className="font-semibold text-zinc-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                                  {location.name}
                                </h3>
                              </div>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${
                                  regionKey === "premium"
                                    ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-500"
                                    : ""
                                }`}
                              >
                                {regionKey === "premium" ? "Premium" : "Active"}
                              </Badge>
                            </div>
                            <p className="mb-3 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                              {location.description}
                            </p>
                            <span className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-500">
                              View Details
                              <svg
                                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* SEO Content */}
      <SeoContentSection
        title="Same-day construction equipment delivery across Dubai and the UAE"
        intro={
          <>
            AL-KABIR Construction Machinery Rentals operates one of the broadest delivery networks in the
            United Arab Emirates, with same-day service to more than 70 distinct locations within Dubai
            and next-day coverage across Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al
            Quwain. We dispatch from a central yard in the Saih Al Salam corridor and run multiple
            satellite drop points to keep transit times under four hours for the vast majority of jobs.
            Whether your site is a high-rise tower in Downtown Dubai, a villa development in Arabian
            Ranches, an industrial fit-out in Jebel Ali, or a roadworks night-shift in Dubai South, we
            have the equipment, the trucks and the operators in place to deliver on time.
          </>
        }
        blocks={[
          {
            heading: "How our delivery network is structured",
            paragraphs: [
              <>
                Our logistics team divides Dubai into four operational zones &mdash; central business
                districts, residential master-developments, industrial and freezone clusters, and the
                outer-corridor mega-projects. Each zone has assigned drivers, a dedicated dispatch
                coordinator, and pre-cleared site access procedures with the major developers and
                community management firms. This structure is the reason we can confirm a same-day
                delivery slot inside a thirty-minute phone call rather than a multi-day quotation
                cycle. For Abu Dhabi, Sharjah and the Northern Emirates we run scheduled trunk
                routes plus on-demand transport for urgent jobs.
              </>,
            ],
          },
          {
            heading: "Top Dubai locations we serve",
            paragraphs: [
              <>
                Our highest-volume Dubai service areas include{" "}
                <Link href="/locations/business-bay" className="text-amber-600 hover:underline dark:text-amber-500">Business Bay</Link>,{" "}
                <Link href="/locations/downtown-dubai" className="text-amber-600 hover:underline dark:text-amber-500">Downtown Dubai</Link>,{" "}
                <Link href="/locations/jebel-ali-industrial" className="text-amber-600 hover:underline dark:text-amber-500">Jebel Ali Industrial</Link>,{" "}
                <Link href="/locations/al-quoz" className="text-amber-600 hover:underline dark:text-amber-500">Al Quoz</Link>,{" "}
                <Link href="/locations/dubai-south" className="text-amber-600 hover:underline dark:text-amber-500">Dubai South</Link>,{" "}
                <Link href="/locations/palm-jumeirah" className="text-amber-600 hover:underline dark:text-amber-500">Palm Jumeirah</Link>,{" "}
                <Link href="/locations/arabian-ranches" className="text-amber-600 hover:underline dark:text-amber-500">Arabian Ranches</Link>,{" "}
                <Link href="/locations/damac-hills-1" className="text-amber-600 hover:underline dark:text-amber-500">DAMAC Hills</Link>,{" "}
                <Link href="/locations/damac-hills-2" className="text-amber-600 hover:underline dark:text-amber-500">DAMAC Hills 2</Link>,{" "}
                <Link href="/locations/the-valley-by-emaar" className="text-amber-600 hover:underline dark:text-amber-500">The Valley by Emaar</Link>,{" "}
                <Link href="/locations/al-lisaili" className="text-amber-600 hover:underline dark:text-amber-500">Al Lisaili</Link> and{" "}
                <Link href="/locations/saih-al-salam" className="text-amber-600 hover:underline dark:text-amber-500">Saih Al Salam</Link>.
                Each location page includes the typical equipment mix demanded in that area, common
                site-access notes, and contact details for the local dispatch coordinator.
              </>,
            ],
          },
          {
            heading: "Equipment available at every location",
            paragraphs: [
              <>
                Every Dubai service area has access to the complete AL-KABIR fleet: diesel and silent
                generators (5&ndash;1000 KVA), plate compactors, vibratory rollers, air compressors,
                concrete mixers, jack hammers, core-cutting machines, scaffolding sets, lighting
                towers, power trowels, aluminium ladders and a deep catalogue of branded power tools.
                Specialised items &mdash; for example tower lights with extra-tall masts, large
                silent-canopy generators for noise-sensitive zones, or oversized scaffolding configurations
                &mdash; may require an extra few hours of advance notice but are still delivered same
                day in the great majority of cases.
              </>,
            ],
          },
          {
            heading: "Coverage beyond Dubai",
            paragraphs: [
              <>
                Outside Dubai we have ongoing rental contracts in Abu Dhabi (covering the Corniche,
                Al Reem Island, Al Raha Beach, Khalifa City, Mussafah and the Western Region),
                Sharjah (Industrial Areas 1&ndash;18, Muwaileh, Aljada and Al Khan), Ajman, Ras Al
                Khaimah (RAK Industrial City and Al Hamra), Fujairah port and industrial zones, and
                Umm Al Quwain. Cross-emirate transport is handled by our own fleet of low-loaders
                and flatbeds, which avoids the coordination delays that come with using third-party
                hauliers. Long-distance delivery quotes are issued same-day on request.
              </>,
            ],
          },
          {
            heading: "If your area is not listed",
            paragraphs: [
              <>
                The location pages on this site cover our most-requested service areas, but our
                actual delivery footprint extends to every corner of the UAE. If you do not see your
                area listed, please call <a className="text-amber-600 hover:underline dark:text-amber-500" href="tel:+971554555786">+971 55 455 5786</a>{" "}
                or <Link href="/get-quote" className="text-amber-600 hover:underline dark:text-amber-500">request a quote online</Link>{" "}
                with your project address &mdash; the dispatch team will confirm transit time and
                delivery cost within thirty minutes during business hours.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/machinery", label: "Browse fleet" },
          { href: "/categories", label: "Equipment categories" },
          { href: "/services", label: "Rental services" },
          { href: "/contact", label: "Contact us" },
          { href: "/get-quote", label: "Get a quote" },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Don&apos;t See Your Area?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-black/80">
            We serve all areas across Dubai and UAE. Contact us for delivery to
            your specific location. Our fleet can reach anywhere!
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
              <Link href="/contact">Send Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-16 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
              AL-KABIR Construction Machinery Rentals - Serving All of Dubai
            </h2>
            <div className="prose prose-zinc max-w-none dark:prose-invert">
              <p>
                AL-KABIR is Dubai&apos;s leading machinery rental company, providing
                high-quality construction equipment across more than 70 locations in
                Dubai. Whether you&apos;re working on a luxury villa project in Emirates
                Hills, a commercial development in Business Bay, or an industrial
                facility in Jebel Ali, we deliver the right equipment to your site.
              </p>
              <p>
                Our comprehensive fleet includes generators, compactors, air compressors, 
                power tools, and concrete equipment from top brands like 
                Perkins, Cummins, and Caterpillar. With same-day delivery 
                available and 24/7 emergency support, AL-KABIR ensures your project 
                never stops.
              </p>
              <h3>Areas We Cover</h3>
              <p>
                From premium communities like <strong>DAMAC Hills</strong>,{" "}
                <strong>Arabian Ranches</strong>, <strong>Palm Jumeirah</strong>, and{" "}
                <strong>Downtown Dubai</strong> to industrial zones like{" "}
                <strong>Al Quoz</strong>, <strong>Jebel Ali Industrial Area</strong>,
                and <strong>Dubai Silicon Oasis</strong> – AL-KABIR covers every
                corner of Dubai.
              </p>
              <p>
                We also serve residential developments in{" "}
                <strong>Jumeirah Village Circle</strong>,{" "}
                <strong>The Springs</strong>, <strong>Mirdif</strong>,{" "}
                <strong>Dubai South</strong>, and many more locations. Contact us
                today for equipment delivery to your project site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
