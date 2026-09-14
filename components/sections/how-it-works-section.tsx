import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Browse & Select",
    description:
      "Explore our extensive fleet of generators, compactors, air compressors & construction equipment online or visit our showroom. Filter by category, capacity, or brand to find exactly what you need.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get a Quote",
    description:
      "Submit your requirements and receive a customized quote within hours. Our team will suggest the best equipment for your project needs.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Confirm & Schedule",
    description:
      "Finalize your rental agreement and schedule delivery. Choose your preferred date and time – we work around your project timeline.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "We Deliver",
    description:
      "Our logistics team delivers the equipment to your site on time, every time. Optional operator services available for immediate productivity.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
            Easy Equipment Rental Process
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl lg:text-5xl">
            How to Rent <span className="text-amber-500">Machinery in Dubai</span>
          </h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Renting construction equipment from AL-KABIR is simple. Follow these steps to get 
            generators, compactors, or air compressors delivered to your Dubai construction site.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="absolute left-0 right-0 top-24 hidden h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-colors hover:border-amber-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-500">
                  {/* Step Number - Floating */}
                  <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-black">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white dark:text-amber-500">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="my-4 flex justify-center lg:hidden">
                    <svg
                      className="h-8 w-8 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400"
          >
            <Link href="/get-quote">Get Started Today</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base font-semibold"
          >
            <Link href="/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
