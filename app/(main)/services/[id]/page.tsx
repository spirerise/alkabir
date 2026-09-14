import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceById, getRelatedServices, allServices } from "@/lib/data/services";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/sections/faq-section";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { getFaqsForService } from "@/lib/data/faqs";
import { absoluteUrl } from "@/lib/seo/site";

export function generateStaticParams() {
  return allServices.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service was not found at AL-KABIR Construction Machinery Rentals.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${service.name} in UAE`;
  // Build a 150-160 char description for the SEO sweet-spot. Combine
  // shortDescription + a richer slice of description + Dubai/UAE qualifier.
  const baseDesc = `${service.shortDescription}. ${service.description}`
    .replace(/\s+/g, " ")
    .trim();
  const tail = " Same-day delivery across Dubai, Abu Dhabi & all UAE.";
  const targetMax = 158;
  const room = targetMax - tail.length;
  const description =
    baseDesc.length <= targetMax
      ? baseDesc
      : baseDesc.slice(0, room).replace(/[,.;:\s]+\S*$/, "") + tail;
  const url = `/services/${service.id}`;

  return {
    title,
    description,
    keywords: [
      service.name.toLowerCase(),
      `${service.name.toLowerCase()} Dubai`,
      `${service.name.toLowerCase()} UAE`,
      `${service.name.toLowerCase()} rental`,
      `${service.name.toLowerCase()} hire`,
      "AL-KABIR machinery",
      "construction equipment rental",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url: absoluteUrl(url),
      type: "website",
      images: [{ url: service.image, width: 1200, height: 630, alt: service.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  const otherServices = getRelatedServices(id, 3);
  const faqs = getFaqsForService(service.name);
  const serviceUrl = `/services/${service.id}`;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <JsonLd
        id={`service-${service.id}`}
        data={[
          serviceSchema({
            name: service.name,
            description: service.description,
            url: serviceUrl,
            image: service.image,
            serviceType: service.name,
            priceRange: service.pricing[0]?.price ?? "$$",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.name, url: serviceUrl },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Breadcrumb (schema injected globally above) */}
          <Breadcrumbs
            withSchema={false}
            className="mb-8 text-zinc-400 [&_a:hover]:text-white [&_[aria-current=page]]:text-white"
            items={[
              { name: "Services", url: "/services" },
              { name: service.name, url: serviceUrl },
            ]}
          />

          <div className="flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-500">
              {service.icon}
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                {service.name}
              </h1>
              <p className="mb-6 max-w-2xl text-lg text-zinc-400">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
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
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
                  What&apos;s Included
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-500/20">
                        <svg className="h-4 w-4 text-amber-600 dark:text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
                  Key Benefits
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <Card key={benefit.title} className="border-zinc-200 dark:border-zinc-800">
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              <Card className="sticky top-24 border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
                    Pricing
                  </h3>
                  <div className="space-y-4">
                    {service.pricing.map((price) => (
                      <div
                        key={price.period}
                        className="flex items-center justify-between border-b border-zinc-200 pb-4 last:border-0 last:pb-0 dark:border-zinc-700"
                      >
                        <div>
                          <div className="font-medium text-zinc-900 dark:text-white">
                            {price.period}
                          </div>
                          <div className="text-xs text-zinc-500">{price.note}</div>
                        </div>
                        <div className="text-lg font-bold text-amber-600 dark:text-amber-500">
                          {price.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="mt-6 w-full bg-amber-500 text-black hover:bg-amber-400">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>

                  <p className="mt-4 text-center text-xs text-zinc-500">
                    Prices may vary based on specific requirements
                  </p>
                </CardContent>
              </Card>

              {/* Related Services */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
                  Related Services
                </h3>
                <div className="space-y-3">
                  {otherServices.map((related) => (
                    <Link
                      key={related.id}
                      href={`/services/${related.id}`}
                      className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-amber-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-500"
                    >
                      <span className="text-2xl">{related.icon}</span>
                      <span className="font-medium text-zinc-900 dark:text-white">
                        {related.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        faqs={faqs}
        title={`${service.name} — Frequently Asked Questions`}
        subtitle={`Everything you need to know about renting ${service.name.toLowerCase()} from AL-KABIR in Dubai and across the UAE.`}
      />

      {/* SEO body copy — unique per service, raises text/HTML ratio */}
      <section className="bg-white py-12 dark:bg-zinc-950 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-zinc max-w-none dark:prose-invert">
              <h2>About AL-KABIR&apos;s {service.name} in Dubai &amp; the UAE</h2>
              <p>{service.description}</p>
              <p>
                With <strong>15+ years</strong> serving construction sites,
                hotels, fit-out contractors and event organisers across the
                UAE, AL-KABIR has refined its{" "}
                <strong>{service.name.toLowerCase()}</strong> offering around
                what UAE projects actually need: predictable scheduling,
                bilingual on-site support, full insurance cover, and rapid
                escalation paths when something goes wrong. Whether you&apos;re
                running a single-shift villa hand-over in Arabian Ranches or a
                24/7 infrastructure project in Jebel Ali, we tailor the service
                to your site&apos;s working hours and access constraints.
              </p>
              <h3>What&apos;s included</h3>
              <ul>
                {service.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <h3>Coverage area</h3>
              <p>
                We provide <strong>{service.name.toLowerCase()}</strong> across
                all seven Emirates with same-day response in Dubai and
                next-day response in Abu Dhabi, Sharjah, Ajman, Umm Al Quwain,
                Ras Al Khaimah and Fujairah. Projects in our key Dubai
                catchments — Business Bay, Dubai Marina, Downtown Dubai, Al
                Quoz, Jebel Ali, Dubai South, Palm Jumeirah, Arabian Ranches,
                DAMAC Hills, Al Furjan and Jumeirah Village Circle — typically
                get equipment or crew on site inside two hours.
              </p>
              <h3>How to book</h3>
              <p>
                Call our service desk on{" "}
                <a href="tel:+971554555786">+971 55 455 5786</a> for an
                immediate response, or{" "}
                <Link href="/get-quote">request a free quote online</Link>{" "}
                — share your site location, equipment list (if any) and
                expected duration, and we&apos;ll come back with a fixed
                quote inside 30 minutes during business hours. Browse our{" "}
                <Link href="/services">full service catalogue</Link> or our{" "}
                <Link href="/machinery">machinery fleet</Link> for related
                offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Contact us today to discuss your {service.name.toLowerCase()} needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
