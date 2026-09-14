import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  allBlogPosts,
  blogCategories,
  getFeaturedPosts,
} from "@/lib/data/blogs";
import { JsonLd } from "@/components/seo/json-ld";
import { itemListSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SeoContentSection } from "@/components/sections/seo-content-section";

export const metadata: Metadata = {
  alternates: { canonical: "/blogs" },
  title: "Construction Machinery Blog & UAE News",
  description:
    "Equipment guides, generator-sizing tips, safety best-practices and UAE construction industry news from AL-KABIR — Dubai's machinery rental experts.",
  openGraph: {
    title: "Construction Machinery Blog | AL-KABIR Dubai",
    description: "Equipment guides, safety tips and UAE construction industry news.",
    type: "website",
    url: "https://www.alkabirmachineryrentals.ae/blogs",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: "AL-KABIR construction machinery blog" }],
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogsPage() {
  const featuredPosts = getFeaturedPosts(3);
  const regularPosts = allBlogPosts.filter((post) => !post.featured);

  return (
    <>
      <JsonLd
        id="blogs-list"
        data={[
          itemListSchema({
            name: "AL-KABIR Construction Machinery Blog",
            description: "Equipment guides, safety tips and industry news for construction professionals in the UAE.",
            items: allBlogPosts.map((p) => ({
              name: p.title,
              url: `/blogs/${p.slug}`,
              image: p.image,
            })),
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blogs" },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-20 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-amber-500/50 text-amber-500"
            >
              Insights & Updates
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Al Kabir{" "}
              <span className="text-amber-500">Blog</span>
            </h1>
            <p className="mb-8 text-lg text-zinc-400 md:text-xl">
              Stay updated with the latest industry news, equipment guides, safety tips,
              and insights from our team of construction equipment experts.
            </p>
            <div className="mx-auto mb-10 flex max-w-md items-center gap-2">
              <Input
                type="search"
                placeholder="Search articles..."
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
              />
              <Button className="bg-amber-500 text-black hover:bg-amber-400">
                Search
              </Button>
            </div>

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

      {/* Featured Posts */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              Featured Articles
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Top picks from our editorial team
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`group overflow-hidden border-zinc-200 dark:border-zinc-800 ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <Link href={`/blogs/${post.slug}`}>
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "aspect-[2/1]" : "aspect-video"
                    }`}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute left-4 top-4 bg-amber-500 text-black hover:bg-amber-400">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-sm text-zinc-500">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3
                      className={`font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 ${
                        index === 0 ? "text-xl md:text-2xl" : "text-lg"
                      }`}
                    >
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-zinc-600 dark:text-zinc-400">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-white">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-zinc-500">{post.author.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & All Posts */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {blogCategories.map((category) => (
                      <li key={category.slug}>
                        <Link
                          href={`/blogs?category=${category.slug}`}
                          className="flex items-center justify-between rounded-lg p-2 text-zinc-600 transition-colors hover:bg-white hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-zinc-400">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="rounded-xl bg-amber-500 p-6 text-black">
                  <h3 className="mb-2 text-lg font-bold">Newsletter</h3>
                  <p className="mb-4 text-sm text-black/80">
                    Get the latest articles delivered to your inbox weekly.
                  </p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-3 border-black/20 bg-white/90 text-black placeholder:text-zinc-500"
                  />
                  <Button className="w-full bg-black text-amber-500 hover:bg-zinc-900">
                    Subscribe
                  </Button>
                </div>
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  All Articles
                </h2>
                <span className="text-sm text-zinc-500">
                  {allBlogPosts.length} articles
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {regularPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group overflow-hidden border-zinc-200 dark:border-zinc-800"
                  >
                    <Link href={`/blogs/${post.slug}`}>
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <Badge className="absolute left-3 top-3 bg-zinc-900/80 text-white">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-2 flex items-center gap-2 text-xs text-zinc-500">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>•</span>
                          <span>{post.readTime} min read</span>
                        </div>
                        <h3 className="line-clamp-2 font-semibold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500">
                          {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <div className="relative h-8 w-8 overflow-hidden rounded-full">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">
                            {post.author.name}
                          </span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-300 dark:border-zinc-700"
                >
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SeoContentSection
        title="Practical guides for renting construction equipment in the UAE"
        intro={
          <>
            The AL-KABIR blog is written for the people who actually run UAE construction sites &mdash;
            project managers sizing a generator for a tower-crane back-up, MEP contractors comparing
            silent diesel sets for a Downtown Dubai event, facility teams scheduling preventive
            maintenance on a 350 KVA Perkins, and quantity surveyors deciding whether to rent a Bosch
            jack hammer for two weeks or a Hilti combihammer for three months. Every article is reviewed
            by our technical workshop in Al Quoz before publication, so the numbers, photos and
            recommendations reflect equipment we actually rent and maintain in Dubai, Abu Dhabi, Sharjah,
            Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain.
          </>
        }
        blocks={[
          {
            heading: "What you will find here",
            paragraphs: [
              <>
                Our editorial calendar focuses on five themes that come up repeatedly in our customer
                conversations: equipment selection guides (matching the right machine to the job),
                UAE-specific safety and compliance briefings, generator and diesel-engine maintenance
                explainers, project-finance and rent-versus-buy analysis, and industry news covering
                Dubai infrastructure, Abu Dhabi mega-projects and Saudi Vision 2030 spillover into the
                Emirates. Our most-read pieces include the &ldquo;Generator rental Dubai &mdash; choosing
                the right capacity&rdquo; sizing guide, the comprehensive AL-KABIR fleet overview, and the
                annual safety-protocols article.
              </>,
            ],
          },
          {
            heading: "Why it pays to rent rather than buy",
            paragraphs: [
              <>
                A 100 KVA silent diesel generator from a top-tier brand can cost more than AED 80,000 to
                purchase, plus annual servicing, fuel-tank certification, transport between sites, and
                eventual depreciation. Renting that same generator for a six-month build typically costs
                a fraction of the purchase price &mdash; with delivery, fuel option, certified operator,
                preventive maintenance, replacement guarantee and 24/7 emergency support all bundled. We
                publish a number of articles that walk through the actual numbers using real UAE rates,
                so contractors can build defensible business cases for their finance teams.
              </>,
              <>
                The same logic applies to plate compactors, vibratory rollers, scaffolding sets, jack
                hammers, core-cutting machines and lighting towers. If a piece of equipment is used on
                fewer than 60 percent of working days across the year, renting almost always wins on a
                total-cost-of-ownership basis. Our technical articles include sample utilisation
                spreadsheets you can adapt for your own fleet.
              </>,
            ],
          },
          {
            heading: "Coverage of UAE projects and locations",
            paragraphs: [
              <>
                We track the construction story across the seven Emirates and write practical pieces on
                what equipment is in highest demand, where bottlenecks occur, and how rental availability
                is moving. Recent coverage has included tower-light deployment in Jebel Ali Industrial,
                core-cutting demand around Business Bay refurbishments, generator-rental patterns in
                Dubai South&apos;s expansion phase, and scaffolding logistics for villa developments
                in <Link href="/locations/arabian-ranches" className="text-amber-600 hover:underline dark:text-amber-500">Arabian Ranches</Link>,{" "}
                <Link href="/locations/damac-hills-1" className="text-amber-600 hover:underline dark:text-amber-500">DAMAC Hills</Link> and{" "}
                <Link href="/locations/the-valley-by-emaar" className="text-amber-600 hover:underline dark:text-amber-500">The Valley by Emaar</Link>.
              </>,
            ],
          },
          {
            heading: "Subscribe and contribute",
            paragraphs: [
              <>
                Use the newsletter form on this page to receive new guides directly to your inbox each
                week. We also welcome guest contributions from civil engineers, quantity surveyors,
                safety officers and equipment specialists working in the UAE &mdash; if you would like
                to publish an article, please <Link href="/contact" className="text-amber-600 hover:underline dark:text-amber-500">get in touch</Link>{" "}
                with a one-paragraph pitch and we will respond within two working days.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/machinery", label: "Browse the full fleet" },
          { href: "/categories", label: "Equipment categories" },
          { href: "/services", label: "Rental services" },
          { href: "/locations", label: "UAE service areas" },
          { href: "/about", label: "About AL-KABIR" },
          { href: "/get-quote", label: "Request a free quote" },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-zinc-950 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Want to Contribute?
            </h2>
            <p className="mb-8 text-lg text-zinc-400">
              Share your expertise with our community. We welcome guest articles
              from industry professionals and construction experts.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 text-black hover:bg-amber-400"
              >
                <Link href="/contact">Submit an Article</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-800"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
