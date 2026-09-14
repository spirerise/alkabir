import { Suspense } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { QuoteForm } from "./quote-form";

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section — server-rendered so the H1 is always present in the
          initial HTML (fixes Semrush "missing H1" issue on /get-quote and all
          /get-quote?machine=... deep-links). */}
      <section className="relative overflow-hidden bg-zinc-950 py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
              Quick Quote - Dubai & UAE
            </Badge>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Get a <span className="text-amber-500">Free Quote</span> for Equipment Rental in Dubai
            </h1>
            <p className="text-lg text-zinc-400">
              Tell us what you need and we&apos;ll call you back with the best rates for generators, compactors, air compressors & more.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section — interactive, client component wrapped in Suspense
          because it uses useSearchParams() to prefill the message from
          /get-quote?machine=... deep-links. */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl">
            <Suspense
              fallback={
                <div className="h-[600px] animate-pulse rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
              }
            >
              <QuoteForm />
            </Suspense>

            {/* Or Call Us */}
            <div className="mt-8 text-center">
              <p className="mb-3 text-zinc-600 dark:text-zinc-400">
                Prefer to call? Reach us directly:
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="tel:+971554555786"
                  className="flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                >
                  <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +971 55 455 5786
                </a>
                <a
                  href="tel:+971504845636"
                  className="flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                >
                  <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +971 50 484 5636
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-white">
              Why Request a Quote from AL-KABIR?
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10">
                  <svg className="h-7 w-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-zinc-900 dark:text-white">Fast Response</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Get a callback within 30 minutes during business hours
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10">
                  <svg className="h-7 w-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-zinc-900 dark:text-white">Best Rates</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Competitive pricing with flexible rental terms
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10">
                  <svg className="h-7 w-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-zinc-900 dark:text-white">No Obligation</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Free quotes with no commitment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content — How quotes work */}
      <section className="bg-white py-12 dark:bg-zinc-950 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              How Our Equipment Rental Quotes Work
            </h2>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              At AL-KABIR Construction Machinery Rentals, every quote is tailored to your project. Whether
              you need a single 20 KVA portable generator for a weekend event in Dubai Marina or a fleet of
              500 KVA silent diesel generators for a long-term infrastructure project in Abu Dhabi, our team
              prepares a no-obligation rental proposal within 30 minutes during business hours. Quotes
              include rental rates (daily, weekly, and monthly), delivery and pickup costs across the UAE,
              fuel options, optional certified operator services, and 24/7 emergency support coverage.
            </p>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              We rent the full spectrum of construction equipment: diesel generators (5–1000 KVA),
              petrol and silent generators, welding generators, plate compactors, vibratory rollers, air
              compressors, concrete mixers, jack hammers, core-cutting machines, scaffolding systems,
              aluminium ladders, lighting towers, and a wide range of power tools from Hilti, Bosch,
              Makita, Wacker Neuson, Caterpillar, Cummins, Perkins, and Honda. All equipment is
              regularly serviced, fully insured, and delivered in operational condition.
            </p>
            <h3 className="mb-3 mt-8 text-xl font-bold text-zinc-900 dark:text-white">
              What to include in your quote request
            </h3>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              The more details you share, the faster and more accurate your quote will be. Useful information
              to include in the message field above:
            </p>
            <ul className="mb-6 ml-6 list-disc space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Type, brand or model of equipment (e.g., &ldquo;Cummins 100 KVA silent generator&rdquo;)</li>
              <li>Quantity required and required power output (KVA / horsepower / capacity)</li>
              <li>Rental duration — days, weeks, or months</li>
              <li>Delivery location (Dubai, Abu Dhabi, Sharjah, or anywhere across the UAE)</li>
              <li>Project start date and any tight deadlines</li>
              <li>Whether you need a certified operator, fuel included, or maintenance coverage</li>
            </ul>
            <h3 className="mb-3 mt-8 text-xl font-bold text-zinc-900 dark:text-white">
              Areas we deliver to
            </h3>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              We provide same-day delivery across <Link href="/locations" className="text-amber-600 hover:underline dark:text-amber-500">70+ Dubai locations</Link>{" "}
              including Business Bay, Dubai Marina, Downtown Dubai, Jebel Ali Industrial, Al Quoz, Dubai
              South, Palm Jumeirah, Arabian Ranches, DAMAC Hills, and Jumeirah Village Circle. We also
              serve Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain with
              next-day delivery.
            </p>
            <h3 className="mb-3 mt-8 text-xl font-bold text-zinc-900 dark:text-white">
              Browse before you request
            </h3>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              Not sure exactly what you need? Browse our{" "}
              <Link href="/machinery" className="text-amber-600 hover:underline dark:text-amber-500">full machinery catalogue</Link>,
              explore equipment by{" "}
              <Link href="/categories" className="text-amber-600 hover:underline dark:text-amber-500">category</Link>, or read
              the{" "}
              <Link href="/services" className="text-amber-600 hover:underline dark:text-amber-500">services</Link>{" "}
              we offer alongside rental — including{" "}
              <Link href="/services/operator-services" className="text-amber-600 hover:underline dark:text-amber-500">certified operators</Link>,
              {" "}<Link href="/services/maintenance-repair" className="text-amber-600 hover:underline dark:text-amber-500">on-site maintenance</Link>,
              {" "}<Link href="/services/transportation" className="text-amber-600 hover:underline dark:text-amber-500">transportation</Link>,
              and{" "}
              <Link href="/services/training" className="text-amber-600 hover:underline dark:text-amber-500">operator training</Link>.
              You can also{" "}
              <Link href="/contact" className="text-amber-600 hover:underline dark:text-amber-500">contact our team directly</Link>{" "}
              for project consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
