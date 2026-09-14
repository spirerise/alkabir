import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
          alt="Construction machinery rental Dubai - AL-KABIR Construction Machinery Rentals UAE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 md:via-zinc-950/90 to-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </div>

      {/* Animated Construction Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container relative mx-auto flex min-h-[80vh] lg:min-h-[90vh] items-center px-4 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <Badge className="mb-6 w-fit bg-amber-500/10 px-3 py-1.5 text-xs sm:text-sm text-amber-500 hover:bg-amber-500/20">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
              Dubai&apos;s #1 Construction Machinery Rental Company
            </Badge>
            
            <h1 className="mb-6 text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-[1.1]">
              Rent Premium
              <span className="relative">
                <span className="relative z-10 text-amber-500"> Construction </span>
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-amber-500/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 10 Q50 0 100 10 T200 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              Machinery in Dubai
            </h1>
            
            <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
              AL-KABIR Construction Machinery Rentals offers <span className="font-semibold text-white">generators, compactors, air compressors & construction equipment</span> for hire across Dubai & UAE. Same-day delivery. Competitive rates. 24/7 support.
            </p>

            {/* CTA Buttons */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
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

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 border-t border-zinc-800 pt-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Same-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 UAE Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified Operators</span>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative">
              {/* Main Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm transition-transform hover:scale-105">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-zinc-400">Machines Available</div>
                </div>
                
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm transition-transform hover:scale-105">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-zinc-400">Premium Brands</div>
                </div>
                
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm transition-transform hover:scale-105">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-sm text-zinc-400">Happy Customers</div>
                </div>
                
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm transition-transform hover:scale-105">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-zinc-400">Years Experience</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 -top-4 animate-bounce rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                🔥 Hot Deals
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="h-16 w-full text-zinc-50 dark:text-zinc-900" viewBox="0 0 1440 54" fill="currentColor" preserveAspectRatio="none">
          <path d="M0 22L60 16.7C120 11 240 1 360 0.3C480 0 600 8 720 16.7C840 25 960 35 1080 36.7C1200 39 1320 33 1380 30.3L1440 27V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" />
        </svg>
      </div>
    </section>
  );
}
