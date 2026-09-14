import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaqSection } from "@/components/sections/faq-section";
import { getFaqsForCategory } from "@/lib/data/faqs";
import {
  getAllMachinery,
  getRelatedMachinery,
  getSameBrandMachinery,
  getMachineryBySlug,
} from "@/lib/data/machinery";

// Dynamic metadata generation for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMachineryBySlug(slug);

  if (!machine) {
    return {
      title: "Equipment Not Found",
      description: "The requested equipment could not be found at AL-KABIR.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${machine.name} Rental Dubai | ${machine.brand}`.slice(0, 60);
  // Build a 150-160 char description aiming at the SEO sweet-spot. Includes
  // capacity, brand, year, hire-period options and UAE coverage qualifier.
  const baseDesc = `Rent ${machine.name} (${machine.capacity}) by ${machine.brand} in Dubai. ${machine.year} model, well-maintained. Daily, weekly & monthly hire across the UAE with same-day delivery.`
    .replace(/\s+/g, " ")
    .trim();
  const description =
    baseDesc.length <= 158
      ? baseDesc
      : baseDesc.slice(0, 155).replace(/[,.;:\s]+\S*$/, "") + "…";

  return {
    title,
    description,
    keywords: [
      `${machine.name} rental`,
      `${machine.brand} ${machine.category} rental`,
      `${machine.category} rental UAE`,
      `${machine.category} rental ${machine.location}`,
      `rent ${machine.name}`,
      `${machine.brand} equipment hire`,
      `construction equipment ${machine.location}`,
      machine.capacity,
      ...machine.features.slice(0, 5),
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_AE",
      siteName: "AL-KABIR Construction Machinery Rentals",
      url: `https://www.alkabirmachineryrentals.ae/machinery/${machine.slug}`,
      images: [
        {
          url: machine.image,
          width: 1200,
          height: 630,
          alt: `${machine.name} — ${machine.brand}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [machine.image],
    },
    alternates: {
      canonical: `/machinery/${machine.slug}`,
    },
  };
}

// Generate static params for all machinery
export async function generateStaticParams() {
  const allMachinery = getAllMachinery();
  return allMachinery.map((machine) => ({
    slug: machine.slug,
  }));
}

// Calculate a stable date for schema (1 year from now)
const PRICE_VALID_UNTIL = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0];

export default async function MachineryDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const machine = getMachineryBySlug(slug);

  if (!machine) {
    notFound();
  }

  const relatedMachinery = getRelatedMachinery(machine.id, machine.category);
  const sameBrandMachinery = getSameBrandMachinery(machine.id, machine.brand);
  const allMachinery = getAllMachinery();
  const suggestedMachinery = relatedMachinery.length > 0 ? relatedMachinery : sameBrandMachinery.length > 0 ? sameBrandMachinery : allMachinery.filter(m => m.id !== machine.id).slice(0, 3);

  // JSON-LD structured data for Product/RentalOffer
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: machine.name,
    description: machine.description,
    brand: {
      "@type": "Brand",
      name: machine.brand,
    },
    image: machine.gallery.length > 0 ? machine.gallery : [machine.image],
    sku: `AK-${machine.id}`,
    category: machine.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: machine.price,
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: machine.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/UsedCondition",
      seller: {
        "@type": "Organization",
        name: "Al Kabir Enterprises",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: machine.rating,
      reviewCount: machine.reviews,
      bestRating: 5,
      worstRating: 1,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: machine.capacity,
      },
      {
        "@type": "PropertyValue",
        name: "Year",
        value: machine.year,
      },
      {
        "@type": "PropertyValue",
        name: "Location",
        value: machine.location,
      },
    ],
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.alkabirmachineryrentals.ae",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Machinery",
        item: "https://www.alkabirmachineryrentals.ae/machinery",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: machine.name,
        item: `https://www.alkabirmachineryrentals.ae/machinery/${machine.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-12 md:py-20">
        <div className="absolute inset-0">
          <Image
            src={machine.image}
            alt={machine.name}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/machinery" className="hover:text-white transition-colors">Machinery</Link>
            <span>/</span>
            <span className="text-white">{machine.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-800">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                  priority
                />
                <Badge
                  className={`absolute left-4 top-4 ${
                    machine.available
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {machine.available ? "✓ Available Now" : "Currently Rented"}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {machine.gallery.map((img, index) => (
                  <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-800 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src={img}
                      alt={`${machine.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Machine Info */}
            <div className="flex flex-col">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="bg-amber-500/20 text-amber-500">
                  {machine.category}
                </Badge>
                <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                  {machine.brand}
                </Badge>
                <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                  {machine.year} Model
                </Badge>
              </div>

              <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {machine.name}
              </h1>

              <div className="mb-6 flex items-center gap-4 text-zinc-400">
                <div className="flex items-center gap-1">
                  <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium text-white">{machine.rating}</span>
                  <span>({machine.reviews} reviews)</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{machine.location}</span>
                </div>
              </div>

              <p className="mb-8 text-lg text-zinc-400">
                {machine.description}
              </p>

              {/* Quick Specs */}
              <div className="mb-8 flex flex-wrap gap-3">
                {machine.specs.map((spec, index) => (
                  <div key={index} className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                    {spec}
                  </div>
                ))}
              </div>

              {/* Contact for Quote Card */}
              <Card className="mb-8 border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-amber-600/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Get a Custom Quote</h3>
                      <p className="text-zinc-400">Contact us for competitive rates and flexible rental terms tailored to your project needs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-14 flex-1 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400"
                >
                  <Link
                    href={`/get-quote?machine=${machine.slug}`}
                    className="flex items-center justify-center gap-2"
                  >
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
                  className="h-14 flex-1 border-zinc-700 bg-zinc-900/50 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-zinc-800"
                >
                  <Link
                    href="tel:+971554555786"
                    className="flex items-center justify-center gap-2"
                  >
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

      {/* Details Tabs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="rental">Rental Terms</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {machine.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                      <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300">{feature}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="space-y-6">
              <Card className="border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {Object.entries(machine.specifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between border-b border-zinc-100 py-3 dark:border-zinc-800">
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </span>
                        <span className="font-medium text-zinc-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rental" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-zinc-200 dark:border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">What&apos;s Included</h3>
                    <ul className="space-y-3">
                      {[
                        "Pre-rental inspection and testing",
                        "Basic operator orientation",
                        "24/7 breakdown support",
                        "Fuel (initial tank)",
                        "Standard insurance coverage",
                        "Delivery to site (within 50km)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                          <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-zinc-200 dark:border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Optional Add-ons</h3>
                    <ul className="space-y-3">
                      {[
                        { name: "Certified Operator", description: "Trained professional included" },
                        { name: "Extended Insurance", description: "Comprehensive coverage" },
                        { name: "GPS Tracking", description: "Real-time location monitoring" },
                        { name: "Long-distance Delivery", description: "Anywhere in UAE" },
                        { name: "Weekend Support", description: "24/7 assistance" },
                        { name: "Operator Training", description: "For your team" },
                      ].map((item, index) => (
                        <li key={index} className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                          <div>
                            <span className="font-medium text-zinc-900 dark:text-white">{item.name}</span>
                            <p className="text-xs text-zinc-500">{item.description}</p>
                          </div>
                          <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-500">Available</Badge>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-4 w-full bg-amber-500 text-black hover:bg-amber-400">
                      <Link href={`/get-quote?machine=${machine.slug}`}>Request Quote with Add-ons</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                      <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-zinc-900 dark:text-white">Important Notes</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Minimum rental period is 1 day. Long-term rentals (3+ months) qualify for additional discounts. 
                        Operator certification required for self-operation. Contact us for custom rental packages.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Machinery */}
      {suggestedMachinery.length > 0 && (
        <section className="border-t border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
                  Similar Equipment
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Explore more options that might suit your needs
                </p>
              </div>
              <Button asChild variant="outline" className="hidden sm:flex">
                <Link href="/machinery">View All Machinery</Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedMachinery.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-zinc-200 bg-white transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge
                      className={`absolute left-4 top-4 ${
                        item.available
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      {item.available ? "Available" : "Rented"}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                      <span className="text-xs text-zinc-500">{item.brand}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                      {item.name}
                    </h3>
                    <div className="mb-4 flex items-center gap-1 text-sm text-zinc-500">
                      <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{item.rating}</span>
                      <span>({item.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link href={`/machinery/${item.slug}`}>Details</Link>
                      </Button>
                      <Button asChild size="sm" className="flex-1 bg-amber-500 text-black hover:bg-amber-400">
                        <Link href={`/get-quote?machine=${item.slug}`}>Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline">
                <Link href="/machinery">View All Machinery</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FaqSection
        faqs={getFaqsForCategory(machine.category)}
        title={`${machine.name} Rental — FAQs`}
        subtitle={`Common questions about renting the ${machine.brand} ${machine.name} and ${machine.category.toLowerCase()} from AL-KABIR.`}
      />

      {/* SEO body copy — unique per machine, raises text/HTML ratio and
          gives long-tail rankings (e.g. "perkins 500 kva generator rental dubai") */}
      <section className="bg-white py-12 dark:bg-zinc-950 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-zinc max-w-none dark:prose-invert">
              <h2>About the {machine.name} rental in Dubai &amp; the UAE</h2>
              <p>
                The <strong>{machine.brand} {machine.name}</strong>{" "}
                ({machine.capacity}, {machine.year} model) is one of the most
                requested {machine.category.toLowerCase()} in our Dubai fleet.
                AL-KABIR Construction Machinery Rentals supplies it on{" "}
                <strong>daily, weekly and monthly hire</strong> with same-day
                delivery anywhere in the UAE — Dubai, Abu Dhabi, Sharjah,
                Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Each unit is
                serviced before dispatch, fully insured, and arrives in
                operational condition with documentation, fuel (where
                applicable) and a brief operator hand-over.
              </p>
              <h3>Why contractors in the UAE rent the {machine.brand}{" "}
                {machine.name}</h3>
              <p>{machine.description}</p>
              <ul>
                {machine.features.slice(0, 6).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <h3>Rental terms</h3>
              <p>
                We offer flexible rental terms tailored to your project: short
                bursts (a single day for emergency power), medium hires (1-4
                weeks for fit-outs and refurbishments), and long-term project
                rentals (3-12 months for infrastructure jobs). All prices are
                indicative starting points; final quotes depend on duration,
                site location, fuel and operator requirements. For projects
                outside Dubai, we coordinate transport with our{" "}
                <Link href="/services/transportation">
                  equipment transportation service
                </Link>{" "}
                — low-bed trailers, GPS-tracked, licensed and insured.
              </p>
              <h3>Operators, fuel and on-site support</h3>
              <p>
                Need a certified operator, on-site fuel top-ups or 24/7
                breakdown coverage? AL-KABIR provides{" "}
                <Link href="/services/operator-services">trained operators</Link>,{" "}
                <Link href="/services/maintenance-repair">on-site maintenance</Link>{" "}
                and emergency replacement units across the UAE. Most projects
                in Dubai get a callback inside 30 minutes during business
                hours.
              </p>
              <h3>How to rent the {machine.name}</h3>
              <p>
                Two ways to book: call our equipment desk on{" "}
                <a href="tel:+971554555786">+971 55 455 5786</a>, or{" "}
                <Link href={`/get-quote?machine=${machine.slug}`}>
                  request a free quote online
                </Link>{" "}
                and we&apos;ll respond with availability, transport and
                operator pricing for your site. You can also browse the full{" "}
                <Link href={`/categories?type=${machine.category.toLowerCase()}`}>
                  {machine.category.toLowerCase()} catalogue
                </Link>{" "}
                or our{" "}
                <Link href="/machinery">complete machinery fleet</Link>{" "}
                if you&apos;re comparing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Ready to Rent This Equipment?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-black/70">
            Get a customized quote for {machine.name} or speak with our equipment specialists for expert advice.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800">
              <Link href={`/get-quote?machine=${machine.slug}`}>Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
