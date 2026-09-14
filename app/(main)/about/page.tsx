import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SeoContentSection } from "@/components/sections/seo-content-section";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us — Construction Equipment Rental Dubai",
  description:
    "Learn about AL-KABIR — Dubai's leading provider of generators and construction equipment since 2010. Trusted by 1,200+ UAE projects with same-day delivery.",
  keywords: [
    "about AL-KABIR",
    "AL-KABIR machinery Dubai",
    "construction equipment rental company UAE",
    "generator rental company Dubai",
    "AL-KABIR history",
  ],
  openGraph: {
    title: "About AL-KABIR Construction Machinery Rentals Dubai",
    description: "Dubai's leading construction equipment rental company since 2010 — trusted by 1200+ UAE projects.",
    type: "website",
    url: "https://www.alkabirmachineryrentals.ae/about",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: "About AL-KABIR Construction Machinery Rentals" }],
  },
};

const stats = [
  { value: "25+", label: "Years Serving Dubai & UAE" },
  { value: "200+", label: "Construction Machinery Fleet" },
  { value: "1,200+", label: "UAE Projects Completed" },
  { value: "70+", label: "Dubai Service Areas" },
];

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safety First",
    description: "Every piece of equipment undergoes rigorous safety inspections. We maintain the highest safety standards in the industry.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Reliability",
    description: "Our equipment is meticulously maintained to ensure maximum uptime and performance on your job site.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Expert Team",
    description: "Our certified operators and technicians bring decades of combined experience to every project.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Pricing",
    description: "Flexible rental terms and transparent pricing ensure you get the best value for your investment.",
  },
];

const milestones = [
  {
    year: "1999",
    title: "AL-KABIR Founded in Dubai",
    description: "AL-KABIR Construction Machinery Rentals was established in Dubai with a vision to provide quality construction equipment rental services across UAE.",
  },
  {
    year: "2005",
    title: "UAE-Wide Expansion",
    description: "Expanded our construction machinery rental services to Abu Dhabi, Sharjah, and all Emirates across the UAE.",
  },
  {
    year: "2010",
    title: "Fleet Milestone",
    description: "Grew our fleet to 200+ generators, compactors, air compressors & equipment, becoming a leading rental provider in Dubai.",
  },
  {
    year: "2015",
    title: "Premium Partnerships",
    description: "Partnered with top global brands like Perkins, Cummins, and Caterpillar to offer world-class equipment in UAE.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched online booking platform with same-day delivery across all Dubai locations and IoT-enabled fleet management.",
  },
  {
    year: "2024",
    title: "Dubai&apos;s #1 Equipment Rental",
    description: "Achieved 200+ machinery fleet with 70+ Dubai service areas, recognized as the top construction equipment rental company in UAE.",
  },
];

const leadership = [
  {
    name: "Ahmed Al Kabir",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
    bio: "Visionary leader with 30+ years in construction and machinery rental industry.",
  },
  {
    name: "Mohammed Hassan",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
    bio: "Strategic executive driving growth and operational excellence across all regions.",
  },
  {
    name: "Fatima Al Rashid",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    bio: "Operations expert ensuring seamless service delivery and fleet management.",
  },
  {
    name: "Khalid Ibrahim",
    role: "Chief Technical Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
    bio: "Technology leader overseeing equipment maintenance and digital innovation.",
  },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "ISO 14001:2015", description: "Environmental Management" },
  { name: "ISO 45001:2018", description: "Occupational Health & Safety" },
  { name: "OHSAS 18001", description: "Workplace Safety Standards" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <JsonLd
        id="about"
        data={[
          aboutPageSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
            alt="AL-KABIR Construction Machinery Rentals Dubai - Construction machinery rental company UAE"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
              Trusted Since 1999 | Dubai, UAE
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              About AL-KABIR{" "}
              <span className="text-amber-500">Construction Machinery Rentals</span>
            </h1>
            <p className="mb-10 text-lg text-zinc-400">
              For over 25 years, AL-KABIR Construction Machinery Rentals has been Dubai&apos;s trusted partner 
              for construction companies, contractors, and developers across the UAE. We provide 
              reliable, well-maintained construction machinery to power your projects.
            </p>
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
      <section className="relative z-10 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-amber-500 md:text-4xl">
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

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
                Our Story
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
                Dubai&apos;s Leading Machinery Rental Company
              </h2>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Al Kabir was founded in 1999 by Ahmed Al Kabir with a simple mission: to provide 
                  construction companies with reliable, well-maintained machinery at fair prices. 
                  Starting with generators and compactors in a small yard in Dubai, we&apos;ve grown into one 
                  of the region&apos;s most trusted construction equipment rental companies.
                </p>
                <p>
                  Today, our fleet includes over 200 machines – from powerful generators to compactors 
                  and air compressors – serving clients across all Emirates in the UAE. Our success is 
                  built on a foundation of trust, reliability, and an unwavering commitment to 
                  customer satisfaction.
                </p>
                <p>
                  We understand that downtime costs money. That&apos;s why we invest heavily in 
                  preventive maintenance, operator training, and 24/7 customer support. When you 
                  rent from Al Kabir, you&apos;re not just getting a machine – you&apos;re getting 
                  a partner dedicated to your project&apos;s success.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild className="bg-amber-500 text-black hover:bg-amber-400">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/machinery">View Our Fleet</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800"
                  alt="Al Kabir machinery fleet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-amber-500 p-6 text-black shadow-xl">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-amber-200 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-black">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  To be the most trusted and preferred construction equipment rental company in the 
                  Middle East, known for our quality equipment, exceptional service, and 
                  commitment to helping our clients build the infrastructure of tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-zinc-700">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  To empower construction professionals with reliable, well-maintained machinery 
                  and expert support, enabling them to complete projects safely, efficiently, 
                  and on time. We are committed to continuous improvement and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              What Drives Us
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-500">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Our Journey
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Milestones That Define Us
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              A timeline of growth, innovation, and commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-zinc-300 dark:bg-zinc-700 md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col gap-4 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 && (
                      <Card className="inline-block border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800">
                        <CardContent className="p-6">
                          <div className="mb-2 text-2xl font-bold text-amber-600 dark:text-amber-500">
                            {milestone.year}
                          </div>
                          <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden items-center justify-center md:flex">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500">
                      <div className="h-2 w-2 rounded-full bg-white dark:bg-zinc-900" />
                    </div>
                  </div>

                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <Card className="inline-block border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800">
                        <CardContent className="p-6">
                          <div className="mb-2 text-2xl font-bold text-amber-600 dark:text-amber-500">
                            {milestone.year}
                          </div>
                          <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                    {/* Mobile view */}
                    {index % 2 === 0 && (
                      <Card className="border-zinc-700 bg-zinc-800 md:hidden">
                        <CardContent className="p-6">
                          <div className="mb-2 text-2xl font-bold text-amber-500">
                            {milestone.year}
                          </div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-zinc-400">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Leadership
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              Experienced leaders driving innovation and excellence
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader) => (
              <Card key={leader.name} className="group overflow-hidden border-zinc-200 dark:border-zinc-800">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                    <p className="text-amber-500">{leader.role}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/team">View Full Team →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Quality Assurance
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Certifications & Standards
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              We maintain the highest industry standards and certifications
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-zinc-200 text-center dark:border-zinc-800">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/20">
                    <svg className="h-8 w-8 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SeoContentSection
        title="A Dubai-built equipment rental company serving the entire UAE"
        intro={
          <>
            AL-KABIR Construction Machinery Rentals was founded in Dubai with a single proposition: that
            UAE contractors deserve a rental partner who is technically competent, financially predictable
            and reachable around the clock. From a humble first yard in Al Quoz, we have grown into one of
            the largest privately owned construction-equipment rental companies operating across all seven
            Emirates &mdash; with a fleet of more than 200 machines, more than 1,200 completed projects on
            our reference list, and trusted relationships with main contractors, MEP firms, fit-out
            specialists and government infrastructure programmes.
          </>
        }
        blocks={[
          {
            heading: "Our story and journey",
            paragraphs: [
              <>
                Founded by Kabir Iqbal after three decades inside the UAE construction sector, AL-KABIR
                began with a small selection of diesel generators and a deliberately simple business
                model: the right equipment, on time, in working condition, with a phone number that is
                always answered. As Dubai accelerated through the 2010 Vision projects, the run-up to
                Expo 2020 and the post-pandemic infrastructure boom, our customer base scaled with it.
                Today the fleet spans 5 KVA portable generators to 1000 KVA stationary diesel units,
                plate compactors and vibratory rollers from Wacker Neuson and Caterpillar, jack hammers
                and combihammers from Hilti, Bosch and Makita, scaffolding sets, lighting towers, power
                trowels, concrete mixers and a deep catalogue of branded power tools.
              </>,
              <>
                Throughout that growth we have stayed deliberately family-led and operationally hands-on.
                Senior executives still inspect new fleet purchases, sign off major rental agreements,
                and field escalations directly. Our customers tell us this is one of the reasons they
                consolidate their UAE rental supply with us &mdash; decisions get made quickly and
                accountability is transparent.
              </>,
            ],
          },
          {
            heading: "What we do and where we do it",
            paragraphs: [
              <>
                AL-KABIR provides equipment rental, certified operator placement, on-site maintenance
                and repair, transportation and logistics, operator training and project consulting
                across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. We
                deliver to more than 70 locations within Dubai alone &mdash; including Business Bay,
                Dubai Marina, Downtown Dubai, Jebel Ali Industrial, Al Quoz, Dubai South, Palm Jumeirah,
                Arabian Ranches, DAMAC Hills, Jumeirah Village Circle and the Saih Al Salam corridor.
                Most rentals reach the customer site the same day they are booked.
              </>,
            ],
          },
          {
            heading: "How we are different",
            paragraphs: [
              <>
                Three things consistently set AL-KABIR apart: the depth of our maintenance workshop,
                the seniority of our operators, and the predictability of our pricing. Our diesel
                mechanics are factory-trained on Cummins, Perkins, Caterpillar, Honda and Yamaha
                engines; our operator pool averages more than fifteen years of UAE site experience;
                and our quotes are itemised, transparent and stable, with no surprise add-ons at
                invoice time. Replacement guarantees are written into every contract &mdash; if a
                machine fails, a replacement is dispatched, not negotiated.
              </>,
            ],
          },
          {
            heading: "Industries we serve",
            paragraphs: [
              <>
                Our customer base spans general contracting, MEP, fit-out and joinery, civil
                infrastructure, oil and gas, power and utilities, hospitality and facilities
                management, real-estate developers, government and quasi-government bodies, event
                management, film and broadcast production, and emergency response. We have supplied
                equipment to high-profile Dubai projects including airport expansion works, metro-line
                extensions, Expo legacy developments and several landmark hotel and residential
                builds. References available on request through our{" "}
                <Link href="/contact" className="text-amber-600 hover:underline dark:text-amber-500">contact page</Link>.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/team", label: "Meet our team" },
          { href: "/services", label: "Services we offer" },
          { href: "/machinery", label: "Equipment fleet" },
          { href: "/locations", label: "Service areas" },
          { href: "/blogs", label: "Blog & resources" },
          { href: "/contact", label: "Contact us" },
          { href: "/get-quote", label: "Request a quote" },
        ]}
      />

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
            alt="Construction project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-zinc-900/80" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Partner with Us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
            Join thousands of satisfied clients who trust Al Kabir for their machinery needs. 
            Get in touch today for a free consultation and quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/machinery">Explore Our Fleet</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
