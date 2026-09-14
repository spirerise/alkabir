import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Generators",
    description: "Reliable power solutions for construction sites, events, and industrial facilities.",
    image: "https://static.wixstatic.com/media/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg/v1/fill/w_480,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg",
    count: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Diesel Generators",
    description: "Heavy-duty diesel power generators for continuous and backup power needs.",
    image: "https://waylittetechnologies.com/wp-content/uploads/2019/01/NEW_300kVA-Diesel-Generator-Perkins.jpg",
    count: 3,
    featured: false,
  },
  {
    id: 3,
    name: "Petrol Generators",
    description: "Portable and efficient petrol generators for small tools and emergency use.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jmdylVxOYyoXI1-VpOvkVkuDRq4kZFQ1-A&s",
    count: 2,
    featured: false,
  },
  {
    id: 4,
    name: "Portable Generators",
    description: "Easy-to-transport power solutions for mobile work sites and outdoor activities.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtA_wP87tJRTMG6EhTLEoBaDnib5N38SEIA&s",
    count: 2,
    featured: false,
  },
  {
    id: 5,
    name: "Construction Site Generators",
    description: "Rugged, high-capacity generators designed for demanding construction environments.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrM3oFtbLEzLFWbHV7jGKr9Ema65mf2H_CA&s",
    count: 2,
    featured: false,
  },
  {
    id: 6,
    name: "3 Phase Generators",
    description: "Industrial-grade 3-phase power solutions for construction equipment and large sites.",
    image: "https://generatorcummins.com/wp-content/uploads/2021/04/6B5.9-G_silent.jpg",
    count: 2,
    featured: false,
  },
  {
    id: 7,
    name: "Silent Generators",
    description: "Sound-attenuated generators for noise-sensitive areas and residential projects.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8bv3e-qIJDoqH2WNMUBA7It3LgPIXAzNkQ&s",
    count: 3,
    featured: true,
  },
  {
    id: 8,
    name: "Generators for Event",
    description: "Quiet and reliable power generators specifically configured for events and exhibitions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLvr6OAZ0h4iKKj6vawt_6Tcwk6DAK6TOdw&s",
    count: 2,
    featured: false,
  },
  {
    id: 9,
    name: "Welding Generators",
    description: "Dual-purpose machines providing both welding capability and auxiliary power.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTtI2FlTzBsLtt2u9u35400i2RECmG_ukOw&s",
    count: 2,
    featured: false,
  },
  {
    id: 10,
    name: "Generators for Farming and Agriculture",
    description: "Durable power solutions designed for agricultural applications and farm equipment.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjiuzzac4WsGTW4sVwDH8tvGCUo2gXAsz2Q&s",
    count: 2,
    featured: false,
  },
  {
    id: 11,
    name: "Compactors",
    description: "Professional soil and asphalt compaction equipment for roadwork and landscaping.",
    image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20181005-28697-10109",
    count: 4,
    featured: true,
  },
  {
    id: 12,
    name: "Air Compressors",
    description: "High-performance air compressors and pneumatic tools for construction and demolition.",
    image: "https://productdata.hilti.com/APQ_HC_f1200/L146103_cropped.jpg",
    count: 3,
    featured: false,
  },
  {
    id: 13,
    name: "Concrete Equipment",
    description: "Essential machinery for concrete mixing, vibrating, and finishing on-site.",
    image: "https://image.made-in-china.com/202f0j00ibrzpIutVoql/Diesel-Engine-500L-Portable-Cement-Mixer-Concrete-Mixing-Machine.jpg",
    count: 3,
    featured: true,
  },
  {
    id: 14,
    name: "Construction Site",
    description: "General site equipment including lighting towers, fans, and safety gear.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs751W1SYv9fYm8zuS24I2ED3AA8fS_yIg8g&s",
    count: 1,
    featured: false,
  },
  {
    id: 15,
    name: "Scaffolding",
    description: "Safe and reliable aluminum scaffolding towers for high-reach maintenance work.",
    image: "https://ik.imagekit.io/mjs/images/thumbs/0006608_heavy-duty-2mm-aluminum-alloy-portable-scaffolding-working-mobile-tower-ladder_625.jpeg",
    count: 1,
    featured: false,
  },
  {
    id: 16,
    name: "Cutting Machines",
    description: "Precision cutting tools for steel, concrete, wood, and masonry materials.",
    image: "https://productdata.hilti.com/APQ_HC_f1200/L118373.jpg",
    count: 6,
    featured: true,
  },
  {
    id: 17,
    name: "Cleaning Equipment",
    description: "Industrial vacuum cleaners and floor grinders for site maintenance and preparation.",
    image: "https://www.smartflooruk.com/wp-content/uploads/2024/10/Concrete-Grinder-Polisher-600x600.png",
    count: 2,
    featured: false,
  },
  {
    id: 18,
    name: "Power Tools",
    description: "Professional-grade electric and cordless tools for various construction tasks.",
    image: "https://p.turbosquid.com/ts-thumb/n2/sB2UdS/Ogbsi0Ct/miller_1/jpg/1463176381/1920x1080/fit_q87/697681de5196a7e6a71bbcfa01cc3378dc996a57/miller_1.jpg",
    count: 6,
    featured: true,
  },
  {
    id: 19,
    name: "Drills",
    description: "Heavy-duty hammer drills and cordless drivers for precise drilling in all materials.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZAujB1cdD-AZqKhzbM5OGx36bOE8fePKuw&s",
    count: 2,
    featured: false,
  },
  {
    id: 20,
    name: "Pumps",
    description: "High-volume water pumps and pressure testing equipment for dewatering and plumbing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTE16Bm1hc6LASDoFg3wWpwcmvYPwxxAenzQ&s",
    count: 2,
    featured: false,
  },
  {
    id: 21,
    name: "Ladders",
    description: "Durable aluminum extension ladders for safe access to elevated work areas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwuDyO69i0SAZSBdQE42_4Q_4kEWoOELmXg&s",
    count: 1,
    featured: false,
  },
  {
    id: 22,
    name: "Landscaping",
    description: "Professional gardening and landscaping tools including chainsaws and trimmers.",
    image: "https://russopower.com/cdn/shop/files/MS250_act_1007_r1_1024x683.jpg?v=1764534123",
    count: 3,
    featured: false,
  },
  {
    id: 23,
    name: "Lighting",
    description: "Mobile lighting towers and site lights for safe night-time operations.",
    image: "https://www.generators-direct.co.uk/wp-content/uploads/2021/12/Generac-v20k2-1.jpg",
    count: 1,
    featured: false,
  },
];

export function CategoriesSection() {
  return (
    <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
            Construction Equipment Categories Dubai
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl lg:text-5xl">
            Rent Construction Machinery by Category
          </h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Browse AL-KABIR Construction&apos;s extensive construction equipment fleet by category. Generators, compactors, air compressors, 
            power tools & more available for hire across Dubai and UAE.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <Link key={category.id} href={`/machinery?category=${encodeURIComponent(category.name)}`}>
              <Card className="group relative h-72 cursor-pointer overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-colors hover:border-amber-500 dark:hover:border-amber-500">
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                
                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute right-4 top-4 z-10">
                    <Badge className="bg-amber-500 text-black hover:bg-amber-400">
                      Popular
                    </Badge>
                  </div>
                )}

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {category.count} machines
                    </span>
                  </div>
                  
                  <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-amber-400">
                    {category.name}
                  </h3>
                  
                  <p className="mb-4 text-sm text-zinc-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-2 text-amber-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="text-sm font-semibold">Explore Category</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="group border-zinc-300 px-8 dark:border-zinc-700">
            <Link href="/categories" className="flex items-center gap-2">
              View All Categories
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
