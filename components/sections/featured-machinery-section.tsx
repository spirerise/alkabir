import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedMachinery } from "@/lib/data/machinery";

const featuredMachinery = getFeaturedMachinery(6);

export function FeaturedMachinerySection() {
  return (
    <section className="bg-white py-20 dark:bg-zinc-950 md:py-28 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              Top-Rated Construction Machinery Dubai
            </Badge>
            <h2 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl lg:text-5xl">
              Featured Construction Machinery
            </h2>
            <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              AL-KABIR Construction&apos;s most popular generators, compactors, air compressors & construction equipment available for immediate rental in Dubai.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="group border-zinc-300 dark:border-zinc-700">
            <Link href="/machinery" className="flex items-center gap-2">
              View All Machinery
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </div>

        {/* Machinery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredMachinery.map((machine) => (
            <Card key={machine.id} className="group overflow-hidden border border-zinc-200 bg-white transition-colors hover:border-amber-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-500">
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Availability Badge */}
                <Badge
                  className={`absolute left-4 top-4 ${
                    machine.available
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {machine.available ? "Available" : "Rented"}
                </Badge>
              </div>

              <CardContent className="p-5">
                {/* Category & Brand */}
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="secondary" className="bg-zinc-100 text-xs font-medium dark:bg-zinc-800">
                    {machine.category}
                  </Badge>
                  <span className="text-xs font-medium text-zinc-500">{machine.brand}</span>
                </div>

                {/* Name */}
                <h3 className="mb-3 text-lg font-bold text-zinc-900 transition-colors group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                  {machine.name}
                </h3>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(machine.rating) ? "text-amber-500" : "text-zinc-300 dark:text-zinc-600"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-zinc-900 dark:text-white">{machine.rating}</span>
                  <span className="text-sm text-zinc-500">({machine.reviews})</span>
                </div>

                {/* Specs */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {machine.specs.slice(0, 3).map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Contact for Quote */}
                <div className="mb-5 flex items-center gap-2 text-sm text-zinc-500">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Contact us for pricing</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button asChild variant="outline" className="flex-1 border-zinc-300 dark:border-zinc-700">
                    <Link href={`/machinery/${machine.slug}`}>View Details</Link>
                  </Button>
                  <Button asChild className="flex-1 bg-amber-500 text-black hover:bg-amber-400">
                    <Link href={`/get-quote?machine=${machine.slug}`}>Get Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
