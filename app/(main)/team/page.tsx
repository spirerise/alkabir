import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SeoContentSection } from "@/components/sections/seo-content-section";
import { 
  Coins, 
  HeartPulse, 
  GraduationCap, 
  Home, 
  Plane, 
  Target, 
  Car, 
  TrendingUp,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/team" },
  title: "Our Team & Leadership",
  description:
    "Meet the AL-KABIR team — engineers, certified operators and rental experts powering Dubai's #1 construction equipment rental company since 2010.",
  openGraph: {
    title: "Our Team & Leadership | AL-KABIR",
    description:
      "Meet the engineers, operators and rental experts powering AL-KABIR Construction Machinery Rentals.",
    type: "website",
    url: "https://www.alkabirmachineryrentals.ae/team",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: "AL-KABIR team and leadership" }],
  },
};

const leadership = [
  {
    id: "kabir-iqbal",
    name: "Kabir Iqbal",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    bio: "Visionary leader with 30+ years in construction and machinery rental industry. Founded AL-KABIR Construction with a mission to transform the machinery rental sector in the Middle East.",
    linkedin: "#",
    email: "kabir@alkabirmachineryrentals.ae",
  },
  {
    id: "hasnain-abdul-rasheed",
    name: "Hasnain Abdul Rasheed",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
    bio: "Strategic executive driving growth and operational excellence across all regions. 20+ years experience in industrial operations and business development.",
    linkedin: "#",
    email: "hasnain@alkabirmachineryrentals.ae",
  },
];

const stats = [
  { value: "2", label: "Leadership Team" },
  { value: "50+", label: "Team Members" },
  { value: "15+", label: "Avg. Years Experience" },
  { value: "98%", label: "Employee Retention" },
];

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Collaborative Culture",
    description: "We work as one team across all departments and locations.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Growth Mindset",
    description: "Continuous learning and development opportunities for all.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safety First",
    description: "Every team member is a safety champion on and off the field.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Customer Focus",
    description: "Our clients' success is our ultimate measure of achievement.",
  },
];

const openPositions = [
  {
    title: "Construction Equipment Operator",
    location: "Dubai, UAE",
    type: "Full-time",
    department: "Operations",
  },
  {
    title: "Diesel Mechanic",
    location: "Abu Dhabi, UAE",
    type: "Full-time",
    department: "Technical",
  },
  {
    title: "Sales Executive",
    location: "Sharjah, UAE",
    type: "Full-time",
    department: "Sales",
  },
  {
    title: "Fleet Coordinator",
    location: "Al Ain, UAE",
    type: "Full-time",
    department: "Operations",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
            alt="Construction team at work"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <Badge className="mb-6 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
            Our People
          </Badge>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Meet the <span className="text-amber-500">Al Kabir</span> Team
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Behind every machine is a dedicated team of professionals committed to your success. 
            Our diverse, experienced workforce is the backbone of our company.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-amber-500">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Leadership
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Executive Team
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              Experienced leaders guiding our vision and driving excellence
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            {leadership.map((leader) => (
              <Card
                key={leader.id}
                className="group overflow-hidden border-zinc-200 transition-shadow hover:shadow-xl dark:border-zinc-800"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                    <p className="text-amber-500">{leader.role}</p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {leader.bio}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={leader.linkedin}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400"
                      aria-label={`Email ${leader.name}`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
                Our Culture
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
                What Makes Us Different
              </h2>
              <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                At Al Kabir, we believe that our people are our greatest asset. We foster 
                an environment where every team member can thrive, grow, and contribute 
                to our shared success.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-500">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600"
                    alt="Construction workers on site"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600"
                    alt="Construction equipment operators"
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600"
                    alt="Team planning construction project"
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600"
                    alt="Machinery maintenance team"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Benefits
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Why Work With Us
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              We invest in our people with competitive benefits and growth opportunities
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Coins className="h-8 w-8" />,
                title: "Competitive Salary",
                description: "Market-leading compensation packages",
              },
              {
                icon: <HeartPulse className="h-8 w-8" />,
                title: "Health Insurance",
                description: "Comprehensive medical coverage for you and family",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Training & Development",
                description: "Continuous learning and certification programs",
              },
              {
                icon: <Home className="h-8 w-8" />,
                title: "Housing Allowance",
                description: "Support for accommodation expenses",
              },
              {
                icon: <Plane className="h-8 w-8" />,
                title: "Annual Leave",
                description: "Generous paid time off and travel allowance",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Performance Bonus",
                description: "Rewarding exceptional contributions",
              },
              {
                icon: <Car className="h-8 w-8" />,
                title: "Transportation",
                description: "Company transport or vehicle allowance",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Career Growth",
                description: "Clear paths for advancement and promotion",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800">
                <CardContent className="p-6">
                  <div className="mb-3 text-amber-600 dark:text-amber-500">{benefit.icon}</div>
                  <h3 className="mb-1 font-bold text-zinc-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="careers" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Careers
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Join Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              We&apos;re always looking for talented individuals to join our growing team
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="group border-zinc-200 transition-shadow hover:shadow-lg dark:border-zinc-800"
              >
                <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">
                      {position.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.department}</span>
                    </div>
                  </div>
                  <Button className="bg-amber-500 text-black hover:bg-amber-400">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Don&apos;t see a position that fits? Send us your resume anyway!
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Submit Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SeoContentSection
        title="The People Behind Dubai's Most Trusted Equipment Rental Fleet"
        intro={
          <>
            AL-KABIR Construction Machinery Rentals has grown from a single workshop in Al Quoz into one of
            the largest privately owned equipment rental companies in the United Arab Emirates because of one
            simple reason: the people. Every generator, compactor, scaffolding tower and power tool in our
            fleet is selected, serviced, delivered and operated by long-tenured professionals who treat
            your project as if it were their own. From the founder Kabir Iqbal, whose three decades in the
            UAE construction sector shaped the company&apos;s safety-first culture, to our newest operators
            arriving from training programmes in Dubai, Abu Dhabi and Sharjah &mdash; this team is the
            reason contractors keep calling us back for the next project, the next site and the next year.
          </>
        }
        blocks={[
          {
            heading: "Leadership rooted in UAE construction",
            paragraphs: [
              <>
                Our two founding executives bring more than fifty combined years of operational experience
                in the Gulf construction industry. Founder and Chairman Kabir Iqbal personally inspects the
                largest fleet purchases &mdash; from 500 KVA Perkins diesel generators down to the latest
                Hilti core-cutting machines &mdash; before they enter the rental yard. CEO Hasnain Abdul
                Rasheed leads the strategy and partnerships function, working directly with main contractors
                across major Dubai infrastructure projects, Saudi mega-developments and Abu Dhabi
                hospitality builds. Both leaders are accessible to clients on direct phone lines, which is
                deliberately unusual in our industry and one of the reasons large general contractors
                consolidate their UAE rental supply with AL-KABIR.
              </>,
            ],
          },
          {
            heading: "Engineers, operators and back-office specialists",
            paragraphs: [
              <>
                Beyond the leadership team, AL-KABIR employs more than fifty full-time professionals across
                four departments: technical workshop and maintenance, certified equipment operators, fleet
                logistics and dispatch, and sales and customer success. Our diesel mechanics are factory-
                trained on Cummins, Perkins, Caterpillar, Honda and Yamaha engines, with most holding ten
                or more years of hands-on UAE field experience. Our scaffolding crew leaders are certified
                under recognised international standards (PASMA-equivalent training) and our power-tool
                technicians work directly with manufacturer service centres for Hilti, Bosch, Makita and
                Wacker Neuson to keep response times under twenty-four hours.
              </>,
              <>
                We deliberately retain talent: our employee retention rate sits above 98 percent because
                we invest in continuous training, sponsor heavy-equipment licence renewals, and provide
                housing and transportation allowances that exceed the UAE construction-sector average.
                For our customers, that retention translates into something tangible &mdash; the same
                operator who delivered your generator last quarter is very likely the same person who
                will arrive on your next call-out, with full knowledge of your site access, fuel cycle
                and reporting preferences.
              </>,
            ],
          },
          {
            heading: "Why our culture matters to your project",
            paragraphs: [
              <>
                A construction project succeeds or fails on coordination, and rental equipment that arrives
                late, fails on site, or is delivered without the right operator can derail an entire week.
                AL-KABIR&apos;s internal culture is built around four commitments that directly affect
                project outcomes: safety as a non-negotiable, ownership of every job from quote to pickup,
                continuous improvement of the fleet and processes, and customer obsession that survives
                contract signing. New hires complete a structured onboarding programme covering UAE Civil
                Defence regulations, Dubai Municipality site rules, and AL-KABIR&apos;s own quality and
                handover protocols.
              </>,
            ],
          },
          {
            heading: "Careers and partnerships",
            paragraphs: [
              <>
                We are always recruiting for skilled operators, diesel mechanics, sales executives and
                fleet coordinators across Dubai, Abu Dhabi, Sharjah and Al Ain. If you have UAE
                construction-equipment experience &mdash; particularly with diesel generators, plate
                compactors, lighting towers, jack hammers, rollers, concrete mixers or scaffolding &mdash;
                we would like to talk. Subcontractors and suppliers interested in joint ventures or
                long-term framework agreements can reach the leadership team directly through the
                <Link href="/contact" className="text-amber-600 hover:underline dark:text-amber-500"> contact page</Link>.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/about", label: "About AL-KABIR" },
          { href: "/services", label: "Our rental services" },
          { href: "/machinery", label: "Browse the fleet" },
          { href: "/locations", label: "Service areas" },
          { href: "/contact", label: "Contact us" },
          { href: "/get-quote", label: "Request a quote" },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-amber-500 to-amber-600">
            <CardContent className="p-8 md:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                    Ready to Build Your Career?
                  </h2>
                  <p className="text-black/80">
                    Join a company that values your growth and provides opportunities 
                    to work on exciting projects across the Middle East.
                  </p>
                </div>
                <div className="flex flex-wrap justify-start gap-4 lg:justify-end">
                  <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                    <Link href="/about">Learn About Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
