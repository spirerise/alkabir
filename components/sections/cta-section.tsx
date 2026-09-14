import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950 md:py-28 border-t border-zinc-100 dark:border-zinc-900">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* CTA Card with Amber Gradient */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-amber-500 to-amber-600 p-8 md:p-12 lg:p-16">
            {/* Decorative Elements */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber-600/30 blur-3xl" />
            
            {/* Main Content */}
            <div className="relative text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
                24/7 Equipment Rental Support | Dubai & UAE
              </div>

              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Ready to Rent Construction
                <br />
                <span className="text-zinc-900">Machinery in Dubai?</span>
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
                Get in touch with AL-KABIR Construction&apos;s expert team for competitive rates on generators, compactors, air compressors, 
                & construction equipment. Same-day delivery across all Dubai locations.
              </p>

              {/* Phone CTA */}
              <div className="mb-10 inline-flex flex-col items-center rounded-2xl bg-white/20 p-6 backdrop-blur-sm sm:flex-row sm:gap-6 sm:p-4">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white sm:mb-0">
                  <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm font-medium text-white/80">Call us now</div>
                  <a
                    href="tel:+971554555786"
                    className="text-3xl font-bold text-white transition-colors hover:text-zinc-900 md:text-4xl"
                  >
                    +971 55 455 5786
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 bg-zinc-900 px-10 text-base font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  <Link href="/get-quote" className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Request a Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 border-2 border-white bg-transparent px-10 text-base font-semibold text-white transition-colors hover:bg-white hover:text-amber-600"
                >
                  <Link href="/machinery" className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Browse Machinery
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Indicators - Outside the CTA Card */}
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 dark:bg-amber-500/20">
                <svg className="h-7 w-7 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">Free Consultation</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 dark:bg-amber-500/20">
                <svg className="h-7 w-7 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">Flexible Terms</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 dark:bg-amber-500/20">
                <svg className="h-7 w-7 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">On-site Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 dark:bg-amber-500/20">
                <svg className="h-7 w-7 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
