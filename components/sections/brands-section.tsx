const brands = [
  { 
    name: "Perkins", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Perkins_logo.svg",
  },
  { 
    name: "Caterpillar", 
    logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Caterpillar_logo.svg",
  },
  { 
    name: "Komatsu", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Komatsu_company_logos.svg",
  },
  { 
    name: "Volvo", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Volvo_logo.svg",
  },
  { 
    name: "Hitachi", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hitachi_logo.svg",
  },
  { 
    name: "JCB", 
    logo: "https://upload.wikimedia.org/wikipedia/en/7/72/JCB_%28company%29_logo.svg",
  },
  { 
    name: "Liebherr", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Liebherr_Logo_2017.svg",
  },
  { 
    name: "Doosan", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Doosan_logo.svg",
  },
  { 
    name: "Kobelco", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kobelco_logo.svg",
  },
];

export function BrandsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500">
              Trusted Partners
            </span>
            <div className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
            World-Class Machinery Brands
          </h2>
          <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
            We partner with the industry&apos;s leading manufacturers to bring you reliable, high-performance equipment.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-5 transition-colors hover:border-amber-500 hover:bg-amber-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-500 dark:hover:bg-amber-500/10"
            >
              <div className="relative h-10 w-full">
                <div className="flex h-full items-center justify-center text-base font-bold text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-white">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-zinc-200 pt-10 dark:border-zinc-800 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/20">
              <svg className="h-6 w-6 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-zinc-900 dark:text-white">Certified Equipment</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Quality assured</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/20">
              <svg className="h-6 w-6 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-zinc-900 dark:text-white">Regular Maintenance</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Always ready to work</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/20">
              <svg className="h-6 w-6 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-zinc-900 dark:text-white">Expert Support</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">24/7 assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
