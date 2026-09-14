import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { featuredLocations } from "@/lib/data/locations";
import { MapPin, Phone } from "lucide-react";

export function LocationsSection() {
  return (
    <section className="bg-white py-20 dark:bg-zinc-950 md:py-28 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
            Same-Day Delivery | 70+ Dubai Locations
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl lg:text-5xl">
            Equipment Rental Across All of Dubai
          </h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From premium communities to industrial zones, AL-KABIR Construction delivers generators, compactors, 
            air compressors & construction equipment to every corner of Dubai with same-day delivery.
          </p>
        </div>

        {/* Featured Locations Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredLocations.map((location) => (
            <Link key={location.id} href={`/locations/${location.slug}`}>
              <Card className="group h-full cursor-pointer border-zinc-200 transition-all hover:border-amber-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-800 dark:hover:border-amber-500">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-500" />
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        location.region === "premium"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-500"
                          : location.region === "industrial"
                            ? "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
                            : location.region === "commercial"
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                      }`}
                    >
                      {location.region === "premium"
                        ? "Premium"
                        : location.region === "industrial"
                          ? "Industrial"
                          : location.region === "commercial"
                            ? "Commercial"
                            : "Residential"}
                    </Badge>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                    {location.name}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Equipment rental & delivery
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

        {/* All Locations Link */}
        <div className="mt-12 text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {[
              "DAMAC Hills",
              "Arabian Ranches",
              "JVC",
              "Al Quoz",
              "Business Bay",
              "Palm Jumeirah",
              "Downtown Dubai",
              "Dubai South",
            ].map((area) => (
              <Badge
                key={area}
                variant="outline"
                className="border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
              >
                {area}
              </Badge>
            ))}
            <Badge
              variant="outline"
              className="border-amber-500 text-amber-600 dark:text-amber-500"
            >
              +60 more areas
            </Badge>
          </div>
          <Button asChild size="lg">
            <Link href="/locations">View All 70+ Locations</Link>
          </Button>
        </div>

        {/* Quick Contact */}
        <div className="mt-16 rounded-2xl bg-zinc-100 p-8 text-center dark:bg-zinc-900">
          <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
            Need Equipment Delivered to Your Site?
          </h3>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            We deliver to all areas in Dubai. Call us for same-day delivery!
          </p>
          <a
            href="tel:+971554555786"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-amber-400"
          >
            <Phone className="h-5 w-5" /> +971 55 455 5786
          </a>
        </div>
      </div>
    </section>
  );
}
