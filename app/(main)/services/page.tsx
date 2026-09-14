import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allServices, serviceStats } from "@/lib/data/services";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqSection } from "@/components/sections/faq-section";
import { itemListSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { generalFaqs } from "@/lib/data/faqs";
import { SeoContentSection } from "@/components/sections/seo-content-section";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Construction Equipment Rental Services UAE",
  description:
    "Generator hire, compactor rental, air compressor leasing, scaffolding, power tools and certified operators across Dubai, Abu Dhabi, Sharjah and all UAE.",
  keywords: [
    "construction services Dubai",
    "equipment rental services UAE",
    "generator hire services",
    "machinery rental services Dubai",
    "AL-KABIR services",
  ],
  openGraph: {
    title: "Construction Equipment Rental Services Dubai & UAE | AL-KABIR",
    description: "Generator hire, compactor rental, scaffolding and certified operators across Dubai and the UAE.",
    type: "website",
    url: "https://www.alkabirmachineryrentals.ae/services",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: "AL-KABIR construction equipment rental services Dubai" }],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <JsonLd
        id="services-list"
        data={[
          itemListSchema({
            name: "AL-KABIR Construction Equipment Rental Services",
            description: "Full catalogue of construction machinery rental services in Dubai and the UAE.",
            items: allServices.map((s) => ({
              name: s.name,
              url: `/services/${s.id}`,
              image: s.image,
            })),
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
            alt="Heavy equipment rental services Dubai UAE - AL-KABIR Machinery"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80" />
        </div>

        <div className="container relative mx-auto px-4">
          <Badge className="mb-6 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
            AL-KABIR Construction Services Dubai
          </Badge>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Construction Equipment Rental{" "}
            <span className="text-amber-500">Services in Dubai & UAE</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-zinc-400">
            AL-KABIR Construction Machinery Rentals provides comprehensive construction equipment services including 
            generator hire, compactor rental, air compressor leasing, and certified operator services across Dubai, 
            Abu Dhabi, Sharjah, and all UAE Emirates.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="group h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400">
              <Link href="/get-quote" className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Get a Quote
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 border-zinc-700 bg-zinc-900/50 px-8 text-base font-semibold text-white backdrop-blur hover:bg-zinc-800 hover:text-white">
              <Link href="tel:+971554555786" className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {serviceStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-500 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              What We Offer
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Explore our comprehensive range of services designed to support every aspect of your construction operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <Card
                key={service.id}
                className="group overflow-hidden border-zinc-200 bg-white transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-amber-600 shadow-lg backdrop-blur dark:bg-zinc-800/90 dark:text-amber-500">
                    {service.icon}
                  </div>

                  {service.popular && (
                    <Badge className="absolute right-4 top-4 bg-amber-500 text-black hover:bg-amber-400">
                      Popular
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-zinc-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                    {service.name}
                  </h3>
                  <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {service.shortDescription}
                  </p>

                  {/* Features - show first 4 */}
                  <ul className="mb-6 space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <svg className="h-4 w-4 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-400">
                    <Link href={`/services/${service.id}`} aria-label={`Learn more about ${service.name}`}>
                      Learn more about {service.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SeoContentSection
        title="Comprehensive construction equipment services across the UAE"
        intro={
          <>
            AL-KABIR Construction Machinery Rentals does more than rent equipment. Over the past two
            decades we have built a complete service ecosystem around the rental relationship &mdash;
            including delivery and pickup logistics, certified operator placement, on-site preventive
            and breakdown maintenance, fuel management, project consulting, operator training and
            specialised transportation. Whether you are a main contractor running a five-tower
            development in Dubai South, a fit-out specialist on a Business Bay refurbishment, or a
            facility-management firm covering hotels in Palm Jumeirah, you can rely on AL-KABIR for
            the full lifecycle of your equipment needs without juggling multiple vendors.
          </>
        }
        blocks={[
          {
            heading: "Equipment rental that scales with your project",
            paragraphs: [
              <>
                Our core <Link href="/services/equipment-rental" className="text-amber-600 hover:underline dark:text-amber-500">equipment rental service</Link>{" "}
                covers more than 200 machines across diesel and silent generators (5&ndash;1000 KVA),
                plate compactors, vibratory rollers, air compressors, concrete mixers, jack hammers,
                core-cutting machines, scaffolding sets, aluminium ladders, lighting towers, power
                trowels, and a wide selection of branded power tools from Hilti, Bosch, Makita, Wacker
                Neuson, Caterpillar, Cummins, Perkins, Honda and Yamaha. Daily, weekly, monthly and
                long-term framework agreements are all available, with discounted rates for projects
                exceeding 90 days.
              </>,
            ],
          },
          {
            heading: "Operators, maintenance and on-site support",
            paragraphs: [
              <>
                For projects that need a fully managed solution we provide{" "}
                <Link href="/services/operator-services" className="text-amber-600 hover:underline dark:text-amber-500">certified equipment operators</Link>{" "}
                across all major equipment categories. Operators arrive with valid UAE heavy-equipment
                licences, project-specific safety briefings, PPE, and the experience to integrate
                seamlessly with your site supervision team. Where projects prefer to use their own
                operators, our{" "}
                <Link href="/services/maintenance-repair" className="text-amber-600 hover:underline dark:text-amber-500">on-site maintenance and repair</Link>{" "}
                service keeps machines running with scheduled servicing, oil and filter changes,
                emergency callouts and rapid replacement.
              </>,
              <>
                Our{" "}
                <Link href="/services/transportation" className="text-amber-600 hover:underline dark:text-amber-500">transportation</Link>{" "}
                team handles delivery and pickup using AL-KABIR&apos;s own fleet of low-loaders,
                flatbed trucks and crane-equipped vehicles &mdash; ensuring your equipment arrives
                undamaged and on time, even in tight Dubai construction-site conditions. We coordinate
                with main-gate security, scheduling teams and tower-crane operators to slot deliveries
                into the right window for your shift plan.
              </>,
            ],
          },
          {
            heading: "Training, consulting and turnkey solutions",
            paragraphs: [
              <>
                Beyond equipment, we offer{" "}
                <Link href="/services/training" className="text-amber-600 hover:underline dark:text-amber-500">operator training programmes</Link>{" "}
                aligned with UAE Civil Defence and Dubai Municipality requirements, plus{" "}
                <Link href="/services/consulting" className="text-amber-600 hover:underline dark:text-amber-500">project-consulting engagements</Link>{" "}
                where our senior engineers help you size your power, compaction or scaffolding
                requirements at the bid stage. For very large projects we can structure a single
                turnkey contract that bundles equipment, operators, maintenance, fuel, transportation
                and reporting under one master service agreement &mdash; reducing your supplier
                management overhead substantially.
              </>,
            ],
          },
          {
            heading: "Why contractors consolidate their UAE rentals with AL-KABIR",
            paragraphs: [
              <>
                Most of our customers came to us originally for a single piece of equipment &mdash; a
                100 KVA generator for a marketing event, a Hilti combihammer for a one-week breakout
                job, or a tower light for a night-shift roadworks project. They returned because of
                the way we handle the small details: same-day quotes, transparent rates, replacement
                guarantees inside the contract, English and Urdu speaking operators, accurate fuel
                metering, and an after-hours phone line that is genuinely answered. Our customer base
                today includes general contractors, MEP firms, fit-out specialists, oil and gas
                contractors, government infrastructure projects, event-management companies and
                international film productions.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/services/equipment-rental", label: "Equipment rental" },
          { href: "/services/operator-services", label: "Certified operators" },
          { href: "/services/maintenance-repair", label: "Maintenance & repair" },
          { href: "/services/transportation", label: "Transportation" },
          { href: "/services/training", label: "Operator training" },
          { href: "/services/consulting", label: "Project consulting" },
          { href: "/machinery", label: "Browse machinery" },
          { href: "/get-quote", label: "Request a quote" },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-amber-500 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-black md:text-4xl">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-black/80">
                Contact us to discuss your specific requirements and get a tailored service package.
              </p>
            </div>
            <div className="flex shrink-0 gap-4">
              <Button asChild size="lg" className="bg-black text-amber-500 hover:bg-zinc-900">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
                <Link href="/machinery">View Equipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Why Al Kabir
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Why Choose Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              With over 15 years of industry experience, we understand what construction professionals need.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl dark:bg-amber-500/20">
                🏆
              </div>
              <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">Industry Leader</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Recognized as a top machinery rental provider in the GCC region
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl dark:bg-amber-500/20">
                ⚡
              </div>
              <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">Fast Response</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                24/7 support with rapid response times for all service requests
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl dark:bg-amber-500/20">
                💎
              </div>
              <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">Quality Assured</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                ISO certified processes ensuring highest service standards
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl dark:bg-amber-500/20">
                🤝
              </div>
              <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">Trusted Partner</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Long-term partnerships with leading construction companies
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <FaqSection
        faqs={generalFaqs}
        title="Construction Service Rental — FAQs"
        subtitle="Common questions about our construction equipment rental services in Dubai and the UAE."
      />
    </div>
  );
}
