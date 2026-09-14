import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedServices } from "@/lib/data/services";

const services = getFeaturedServices(6);

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950 md:py-28 border-y border-zinc-100 dark:border-zinc-800">
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
            Professional Equipment Services Dubai
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl lg:text-5xl">
            Construction <span className="text-amber-500">Machinery Rental</span> & Services
          </h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From construction machinery rental to certified operator services, AL-KABIR Construction delivers end-to-end 
            equipment solutions across Dubai and all UAE Emirates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <Card className="group h-full cursor-pointer border border-zinc-200 bg-white transition-colors hover:border-amber-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-500">
                <CardContent className="relative p-8">
                  {/* Featured Badge */}
                  {service.popular && (
                    <Badge className="absolute right-6 top-6 bg-amber-500 text-black">
                      Popular
                    </Badge>
                  )}

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white dark:text-amber-500 dark:group-hover:text-black">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                    {service.name}
                  </h3>
                  <p className="mb-6 text-zinc-600 leading-relaxed dark:text-zinc-400">
                    {service.shortDescription}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-500">
                    Learn More
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button asChild size="lg" className="h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
