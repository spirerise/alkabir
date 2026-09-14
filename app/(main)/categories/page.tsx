import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SeoContentSection } from "@/components/sections/seo-content-section";

export const metadata: Metadata = {
  alternates: { canonical: "/categories" },
  title: "Construction Machinery Categories Dubai",
  description:
    "Browse construction machinery rental by category — generators, compactors, air compressors, power tools, scaffolding, lighting and landscaping equipment in Dubai.",
  openGraph: {
    title: "Construction Machinery Categories Dubai | AL-KABIR",
    description: "Generators, compactors, air compressors, power tools and more — by category.",
    type: "website",
    url: "https://www.alkabirmachineryrentals.ae/categories",
    siteName: "AL-KABIR Construction Machinery Rentals",
    images: [{ url: "https://www.alkabirmachineryrentals.ae/og-image.jpg", width: 1200, height: 630, alt: "AL-KABIR construction machinery categories" }],
  },
};

const categories = [
  {
    id: 1,
    name: "Generators",
    slug: "generators",
    description: "Reliable power solutions for every need. From small portable units to large industrial generators, AL-KABIR provides top-brand power equipment across the UAE.",
    image: "https://static.wixstatic.com/media/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg/v1/fill/w_480,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg",
    count: 5,
    featured: true,
    specs: ["10 - 500 KVA", "Diesel & Petrol", "Silent & Open Type"],
  },
  {
    id: 2,
    name: "Diesel Generators",
    slug: "diesel-generators",
    description: "High-performance diesel generators for industrial, commercial, and construction use. Reliable power backup with fuel efficiency and durability.",
    image: "https://waylittetechnologies.com/wp-content/uploads/2019/01/NEW_300kVA-Diesel-Generator-Perkins.jpg",
    count: 3,
    featured: true,
    specs: ["100 - 500 KVA", "3 Phase", "Weatherproof Enclosure"],
  },
  {
    id: 3,
    name: "Petrol Generators",
    slug: "petrol-generators",
    description: "Compact and efficient petrol generators for light tools, small events, and emergency backup. Easy to transport and operate.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jmdylVxOYyoXI1-VpOvkVkuDRq4kZFQ1-A&s",
    count: 2,
    featured: false,
    specs: ["2 - 10 KVA", "Single Phase", "Portable Design"],
  },
  {
    id: 4,
    name: "Portable Generators",
    slug: "portable-generators",
    description: "Highly mobile power units for on-the-go requirements. Perfect for remote sites, camping, and small outdoor projects.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtA_wP87tJRTMG6EhTLEoBaDnib5N38SEIA&s",
    count: 2,
    featured: false,
    specs: ["3 - 15 KVA", "Lightweight", "Easy Transport"],
  },
  {
    id: 5,
    name: "Construction Site Generators",
    slug: "construction-site-generators",
    description: "Rugged generators specifically designed to withstand the demanding environments of construction sites.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrM3oFtbLEzLFWbHV7jGKr9Ema65mf2H_CA&s",
    count: 2,
    featured: false,
    specs: ["150 - 500 KVA", "Heavy Duty", "Site-Ready Features"],
  },
  {
    id: 6,
    name: "3 Phase Generators",
    slug: "3-phase-generators",
    description: "Stable and reliable 3-phase power solutions for industrial machinery and large-scale operations.",
    image: "https://generatorcummins.com/wp-content/uploads/2021/04/6B5.9-G_silent.jpg",
    count: 2,
    featured: false,
    specs: ["80 - 120 KVA", "Industrial Grade", "Digital Control"],
  },
  {
    id: 7,
    name: "Silent Generators",
    slug: "silent-generators",
    description: "Ultra-quiet power solutions for residential areas, events, and noise-sensitive environments.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8bv3e-qIJDoqH2WNMUBA7It3LgPIXAzNkQ&s",
    count: 3,
    featured: true,
    specs: ["15 - 60 KVA", "Soundproof Canopy", "Premium Brands"],
  },
  {
    id: 8,
    name: "Generators for Event",
    slug: "generators-for-event",
    description: "Specialized generators for events and exhibitions, providing quiet, stable, and reliable power.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLvr6OAZ0h4iKKj6vawt_6Tcwk6DAK6TOdw&s",
    count: 2,
    featured: false,
    specs: ["20 - 30 KVA", "Event-Grade Silencing", "Reliable Output"],
  },
  {
    id: 9,
    name: "Welding Generators",
    slug: "welding-generators",
    description: "Dual-purpose machines providing both high-quality welding capability and auxiliary power for tools.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTtI2FlTzBsLtt2u9u35400i2RECmG_ukOw&s",
    count: 2,
    featured: false,
    specs: ["5 - 10 KVA", "200 - 300A Welding", "Engine Driven"],
  },
  {
    id: 10,
    name: "Generators for Farming and Agriculture",
    slug: "generators-for-farming-and-agriculture",
    description: "Durable power solutions designed for agricultural use, powering farm equipment and remote facilities.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjiuzzac4WsGTW4sVwDH8tvGCUo2gXAsz2Q&s",
    count: 2,
    featured: false,
    specs: ["10 - 15 KVA", "Tough Design", "Reliable Performance"],
  },
  {
    id: 11,
    name: "Compactors",
    slug: "compactors",
    description: "Professional soil and asphalt compaction equipment. From heavy-duty rollers to versatile plate compactors for all construction needs.",
    image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20181005-28697-10109",
    count: 4,
    featured: true,
    specs: ["30 KG - 10 Ton", "Vibratory & Static", "Plate & Roller Type"],
  },
  {
    id: 12,
    name: "Air Compressors",
    slug: "air-compressors",
    description: "High-performance air compressors and pneumatic tools for construction, demolition, and industrial applications.",
    image: "https://productdata.hilti.com/APQ_HC_f1200/L146103_cropped.jpg",
    count: 3,
    featured: false,
    specs: ["7 - 20 KG", "Electric & Diesel", "High Impact Force"],
  },
  {
    id: 13,
    name: "Concrete Equipment",
    slug: "concrete-equipment",
    description: "Essential equipment for concrete work, including mixers, vibrators, and power trowels for a professional finish.",
    image: "https://image.made-in-china.com/202f0j00ibrzpIutVoql/Diesel-Engine-500L-Portable-Cement-Mixer-Concrete-Mixing-Machine.jpg",
    count: 3,
    featured: true,
    specs: ["Mixers & Vibrators", "Power Trowels", "Diesel & Petrol"],
  },
  {
    id: 14,
    name: "Construction Site",
    slug: "construction-site",
    description: "General construction site equipment including lighting towers, ventilation fans, and other essential site utilities.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs751W1SYv9fYm8zuS24I2ED3AA8fS_yIg8g&s",
    count: 1,
    featured: false,
    specs: ["Lighting Towers", "Exhaust Fans", "Site Utilities"],
  },
  {
    id: 15,
    name: "Scaffolding",
    slug: "scaffolding",
    description: "Safe and reliable access solutions. Lightweight aluminum scaffolding towers for maintenance and construction work.",
    image: "https://ik.imagekit.io/mjs/images/thumbs/0006608_heavy-duty-2mm-aluminum-alloy-portable-scaffolding-working-mobile-tower-ladder_625.jpeg",
    count: 1,
    featured: false,
    specs: ["Aluminum Alloy", "Mobile Towers", "Safety Certified"],
  },
  {
    id: 16,
    name: "Cutting Machines",
    slug: "cutting-machines",
    description: "Precision cutting tools for concrete, steel, wood, and tiles. Professional-grade machines for accurate results.",
    image: "https://productdata.hilti.com/APQ_HC_f1200/L118373.jpg",
    count: 6,
    featured: true,
    specs: ["Core Drills", "Steel Cutters", "Tile & Wood Saws"],
  },
  {
    id: 17,
    name: "Cleaning Equipment",
    slug: "cleaning-equipment",
    description: "Industrial cleaning solutions including floor grinders, pressure washers, and heavy-duty vacuums.",
    image: "https://www.smartflooruk.com/wp-content/uploads/2024/10/Concrete-Grinder-Polisher-600x600.png",
    count: 2,
    featured: false,
    specs: ["Floor Grinders", "Industrial Vacuums", "Wet/Dry Cleaning"],
  },
  {
    id: 18,
    name: "Power Tools",
    slug: "power-tools",
    description: "A wide range of professional power tools for every trade. High-quality drills, grinders, and fastening tools.",
    image: "https://p.turbosquid.com/ts-thumb/n2/sB2UdS/Ogbsi0Ct/miller_1/jpg/1463176381/1920x1080/fit_q87/697681de5196a7e6a71bbcfa01cc3378dc996a57/miller_1.jpg",
    count: 6,
    featured: false,
    specs: ["Drills & Grinders", "Impact Wrenches", "Blowers & Sanders"],
  },
  {
    id: 19,
    name: "Drills",
    slug: "drills",
    description: "Professional drilling equipment from compact cordless drivers to heavy-duty hammer drills for concrete.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZAujB1cdD-AZqKhzbM5OGx36bOE8fePKuw&s",
    count: 2,
    featured: false,
    specs: ["SDS Max & Plus", "Cordless & Electric", "Hammer & Rotary"],
  },
  {
    id: 20,
    name: "Pumps",
    slug: "pumps",
    description: "Reliable water pumps for dewatering, irrigation, and pressure testing applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTE16Bm1hc6LASDoFg3wWpwcmvYPwxxAenzQ&s",
    count: 2,
    featured: false,
    specs: ["3 inch Flow", "Petrol & Manual", "High Discharge"],
  },
  {
    id: 21,
    name: "Ladders",
    slug: "ladders",
    description: "High-quality aluminum ladders for safe access at various heights. Durable and lightweight.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwuDyO69i0SAZSBdQE42_4Q_4kEWoOELmXg&s",
    count: 1,
    featured: false,
    specs: ["Aluminum Extension", "Up to 12 Meters", "150 kg Capacity"],
  },
  {
    id: 22,
    name: "Landscaping",
    slug: "landscaping",
    description: "Professional landscaping equipment including chainsaws, trimmers, and earth augers for outdoor projects.",
    image: "https://russopower.com/cdn/shop/files/MS250_act_1007_r1_1024x683.jpg?v=1764534123",
    count: 3,
    featured: false,
    specs: ["Chainsaws", "Trimmers", "Earth Augers"],
  },
  {
    id: 23,
    name: "Lighting",
    slug: "lighting",
    description: "Mobile lighting solutions for construction sites, events, and emergency situations.",
    image: "https://www.generators-direct.co.uk/wp-content/uploads/2021/12/Generac-v20k2-1.jpg",
    count: 1,
    featured: false,
    specs: ["LED Towers", "Diesel Powered", "High Coverage"],
  },
];

export default function CategoriesPage() {
  const featuredCategories = categories.filter((cat) => cat.featured);
  const allCategories = categories;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 md:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
              Heavy Equipment Categories Dubai
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Rent Construction Equipment
              <span className="block text-amber-500">by Category in Dubai</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
              Browse AL-KABIR Construction&apos;s complete fleet of construction equipment organized by category. Generators, compactors, 
              air compressors, power tools & more available for immediate rental across Dubai and UAE.
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

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="rounded-xl bg-zinc-900/50 p-4 backdrop-blur">
                <div className="text-3xl font-bold text-amber-500">12</div>
                <div className="text-sm text-zinc-400">Equipment Types</div>
              </div>
              <div className="rounded-xl bg-zinc-900/50 p-4 backdrop-blur">
                <div className="text-3xl font-bold text-amber-500">500+</div>
                <div className="text-sm text-zinc-400">Machines Dubai</div>
              </div>
              <div className="rounded-xl bg-zinc-900/50 p-4 backdrop-blur">
                <div className="text-3xl font-bold text-amber-500">24/7</div>
                <div className="text-sm text-zinc-400">UAE Support</div>
              </div>
              <div className="rounded-xl bg-zinc-900/50 p-4 backdrop-blur">
                <div className="text-3xl font-bold text-amber-500">100%</div>
                <div className="text-sm text-zinc-400">Safety Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="border-b border-zinc-100 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Most Popular
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              Featured Categories
            </h2>
            <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
              Our most requested equipment categories, trusted by leading construction companies across the UAE.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((category) => (
              <Link key={category.id} href={`/machinery?category=${encodeURIComponent(category.name)}`}>
                <Card className="group relative h-96 cursor-pointer overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Background Image */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-zinc-900/20" />
                  
                  {/* Featured Badge */}
                  <div className="absolute right-4 top-4 z-10">
                    <Badge className="bg-amber-500 font-semibold text-black shadow-lg hover:bg-amber-400">
                      Popular
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {category.count} machines
                      </span>
                    </div>
                    
                    <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-amber-400">
                      {category.name}
                    </h3>
                    
                    <p className="mb-4 line-clamp-2 text-sm text-zinc-300">
                      {category.description}
                    </p>

                    <div className="flex items-center gap-2 text-amber-400">
                      <span className="text-sm font-semibold">View Equipment</span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Complete Fleet
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              All Equipment Categories
            </h2>
            <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
              Browse our full range of construction machinery and equipment available for rental.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allCategories.map((category) => (
              <Link key={category.id} href={`/machinery?category=${encodeURIComponent(category.name)}`}>
                <Card className="group h-full cursor-pointer overflow-hidden border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                    
                    {/* Count Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 shadow-sm backdrop-blur-sm dark:bg-zinc-900/90 dark:text-white">
                        {category.count} machines
                      </span>
                    </div>

                    {category.featured && (
                      <div className="absolute right-3 top-3">
                        <Badge className="bg-amber-500 text-xs font-semibold text-black">
                          Popular
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-bold text-zinc-900 transition-colors group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                      {category.name}
                    </h3>
                    
                    <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {category.description}
                    </p>

                    {/* Specs */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {category.specs.slice(0, 2).map((spec, index) => (
                        <span
                          key={index}
                          className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500">
                      <span className="text-sm font-semibold">Browse Equipment</span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SeoContentSection
        title="Browse the AL-KABIR construction equipment fleet by category"
        intro={
          <>
            Renting the right machine starts with picking the right category. AL-KABIR maintains a fleet
            of more than 200 construction machines across more than a dozen distinct equipment families
            &mdash; from diesel and silent generators to plate compactors, air compressors, jack hammers,
            core-cutting machines, scaffolding, lighting towers and a deep catalogue of branded power
            tools. Each category page on this site lists the specific brands and models we stock,
            typical use cases, and the daily, weekly and monthly rental rates we publish for our
            standard UAE service areas. If you are unsure which category fits your project, the
            descriptions below will help you decide before you request a quote.
          </>
        }
        blocks={[
          {
            heading: "Power generation",
            paragraphs: [
              <>
                Our generator fleet covers <Link href="/machinery?category=Diesel%20Generators" className="text-amber-600 hover:underline dark:text-amber-500">diesel generators</Link>,{" "}
                <Link href="/machinery?category=Silent%20Generators" className="text-amber-600 hover:underline dark:text-amber-500">silent generators</Link>,{" "}
                <Link href="/machinery?category=Petrol%20Generators" className="text-amber-600 hover:underline dark:text-amber-500">petrol and portable generators</Link>,{" "}
                <Link href="/machinery?category=Welding%20Generators" className="text-amber-600 hover:underline dark:text-amber-500">welding generators</Link>,{" "}
                <Link href="/machinery?category=3%20Phase%20Generators" className="text-amber-600 hover:underline dark:text-amber-500">3-phase generators</Link>,{" "}
                <Link href="/machinery?category=Construction%20Site%20Generators" className="text-amber-600 hover:underline dark:text-amber-500">construction-site generators</Link>{" "}
                and specialised{" "}
                <Link href="/machinery?category=Generators%20for%20Event" className="text-amber-600 hover:underline dark:text-amber-500">event generators</Link>{" "}
                and{" "}
                <Link href="/machinery?category=Generators%20for%20Farming%20and%20Agriculture" className="text-amber-600 hover:underline dark:text-amber-500">agricultural generators</Link>.
                Brands include Cummins, Perkins, Caterpillar, Honda and Yamaha. Capacity options
                run from 5 KVA portable units up to 1000 KVA stationary diesel sets.
              </>,
            ],
          },
          {
            heading: "Compaction, concrete and earthworks",
            paragraphs: [
              <>
                For groundworks, paving and concrete jobs we offer{" "}
                <Link href="/machinery?category=Compactors" className="text-amber-600 hover:underline dark:text-amber-500">plate compactors and rollers</Link>{" "}
                from Wacker Neuson and Caterpillar, plus a full range of{" "}
                <Link href="/machinery?category=Concrete%20Equipment" className="text-amber-600 hover:underline dark:text-amber-500">concrete equipment</Link>{" "}
                including mixers, trowels and vibrators. The compaction range covers small forward-plate
                units for tight backfills up to 10-ton tandem rollers for road and parking-lot work.
              </>,
            ],
          },
          {
            heading: "Power tools, drills and cutting machines",
            paragraphs: [
              <>
                Our{" "}
                <Link href="/machinery?category=Power%20Tools" className="text-amber-600 hover:underline dark:text-amber-500">power-tool catalogue</Link>{" "}
                spans Hilti, Bosch and Makita brands and includes{" "}
                <Link href="/machinery?category=Drills" className="text-amber-600 hover:underline dark:text-amber-500">drills and combihammers</Link>,{" "}
                <Link href="/machinery?category=Cutting%20Machines" className="text-amber-600 hover:underline dark:text-amber-500">cutting machines</Link>{" "}
                including steel cutters, interlock cutters and core-cutting rigs, plus the heavy-duty
                jack hammers most contractors specifically request by model name (Hilti TE 3000, Bosch
                GSH 11 VC, Makita HM 0870 C). Battery and corded options are available for most tools.
              </>,
            ],
          },
          {
            heading: "Air, lifting, lighting and access",
            paragraphs: [
              <>
                Beyond power and concrete, the AL-KABIR fleet also covers{" "}
                <Link href="/machinery?category=Air%20Compressors" className="text-amber-600 hover:underline dark:text-amber-500">air compressors</Link>,{" "}
                <Link href="/machinery?category=Scaffolding" className="text-amber-600 hover:underline dark:text-amber-500">aluminium and steel scaffolding</Link>,{" "}
                <Link href="/machinery?category=Ladders" className="text-amber-600 hover:underline dark:text-amber-500">aluminium ladders</Link>,{" "}
                <Link href="/machinery?category=Lighting" className="text-amber-600 hover:underline dark:text-amber-500">lighting towers and balloon lights</Link>,{" "}
                <Link href="/machinery?category=Landscaping" className="text-amber-600 hover:underline dark:text-amber-500">landscaping equipment</Link>,{" "}
                <Link href="/machinery?category=Pumps" className="text-amber-600 hover:underline dark:text-amber-500">water and dewatering pumps</Link>{" "}
                and{" "}
                <Link href="/machinery?category=Cleaning%20Equipment" className="text-amber-600 hover:underline dark:text-amber-500">cleaning equipment</Link>.
                If a category you need is not listed, please contact us &mdash; the catalogue you see
                online is a representative sample and our actual stock is broader.
              </>,
            ],
          },
          {
            heading: "Rental terms across all categories",
            paragraphs: [
              <>
                All categories share the same commercial framework: daily, weekly, monthly and
                long-term rates; included delivery and pickup within all standard UAE service areas;
                optional certified operators; preventive maintenance and 24/7 emergency support;
                replacement guarantees written into every contract. Discounts apply automatically
                for projects over 90 days. For volume orders or framework agreements, please{" "}
                <Link href="/contact" className="text-amber-600 hover:underline dark:text-amber-500">contact our sales team</Link>{" "}
                directly.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/machinery", label: "Browse complete fleet" },
          { href: "/services", label: "Rental services" },
          { href: "/locations", label: "Service areas" },
          { href: "/about", label: "About AL-KABIR" },
          { href: "/get-quote", label: "Request a quote" },
        ]}
      />

      {/* CTA Section */}
      <section className="border-t border-zinc-100 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-amber-500 to-amber-600 p-8 shadow-2xl shadow-amber-500/20 md:p-12">
              {/* Decorative Elements */}
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber-600/30 blur-3xl" />
              
              <div className="relative text-center">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Can&apos;t Find What You Need?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                  Our equipment specialists can help you find the perfect machinery for your specific project requirements.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 bg-zinc-900 px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-zinc-800"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Contact Us
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 border-2 border-white bg-transparent px-8 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-white hover:text-amber-600"
                  >
                    <a href="tel:+971554555786" className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +971 55 455 5786
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Why Al Kabir
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
              The Al Kabir Advantage
            </h2>
            <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
              When you rent from Al Kabir, you get more than just equipment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Quality Guaranteed",
                description: "All equipment undergoes rigorous maintenance and safety inspections before each rental.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "24/7 Support",
                description: "Round-the-clock technical support and emergency assistance whenever you need it.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                ),
                title: "Fast Delivery",
                description: "Swift delivery and pickup services across all Emirates in the UAE.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Competitive Rates",
                description: "Transparent pricing with flexible rental terms to fit your project budget.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 transition-all group-hover:bg-amber-500 group-hover:text-white dark:text-amber-500">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
