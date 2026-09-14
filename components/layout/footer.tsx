import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Locations", href: "/locations" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get a Quote", href: "/get-quote" },
  ],
  categories: [
    { name: "Generators", href: "/categories?type=generators" },
    { name: "Compactors", href: "/categories?type=compactors" },
    { name: "Concrete Equipment", href: "/categories?type=concrete equipment" },
    { name: "Power Tools", href: "/categories?type=power tools" },
    { name: "Scaffolding", href: "/categories?type=scaffolding" },
    { name: "Lighting", href: "/categories?type=lighting" },
  ],
  equipment: [
    { name: "Perkins 500KVA", href: "/machinery/perkins-500kva-diesel-generator" },
    { name: "Cummins 100KVA Silent", href: "/machinery/cummins-100kva-silent-generator" },
    { name: "Honda 20KVA Portable", href: "/machinery/honda-20kva-portable-generator" },
    { name: "CAT 10 Ton Roller", href: "/machinery/cat-10-ton-roller-compactor" },
    { name: "Hilti TE-3000 Jack Hammer", href: "/machinery/hilti-te-3000-jack-hammer" },
    { name: "Hilti TE-70 Combihammer", href: "/machinery/hilti-te-70-combihammer-drill" },
    { name: "Hilti DD-150 Core Cutter", href: "/machinery/hilti-dd-150-core-cutting-machine" },
    { name: "Bosch GSH-11 Jack Hammer", href: "/machinery/bosch-gsh-11-vc-jack-hammer" },
    { name: "Makita HM0870C Hammer", href: "/machinery/makita-hm0870c-jack-hammer" },
    { name: "Wacker Neuson Power Trowel", href: "/machinery/wacker-neuson-power-trowel" },
    { name: "Diesel Concrete Mixer 500L", href: "/machinery/diesel-concrete-mixture-500l" },
    { name: "Zamil 12M Aluminium Ladder", href: "/machinery/zamil-12m-aluminum-ladder" },
    { name: "Aluminium Scaffolding 2M", href: "/machinery/aluminum-scaffolding-2m-set" },
    { name: "Generac Tower Light", href: "/machinery/generac-v20-tower-light" },
    { name: "Bosch GSR 18V Drill", href: "/machinery/bosch-gsr-18v-battery-drill" },
    { name: "Bosch GWS-22 Steel Cutter", href: "/machinery/bosch-gws-22-steel-cutter" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms-of-services" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/privacy-policy" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 bg-zinc-950 dark:border-zinc-800">
      {/* Top Accent Line */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />

      {/* Newsletter Section */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 p-8 md:flex-row md:p-10">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Stay Updated with AL-KABIR Construction
              </h3>
              <p className="mt-2 text-zinc-400">
                Get the latest Dubai equipment deals, machinery updates, and exclusive rental offers.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <Input
                suppressHydrationWarning
                type="email"
                placeholder="Enter your email"
                className="h-12 border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 focus:border-amber-500"
              />
              <Button suppressHydrationWarning className="h-12 whitespace-nowrap bg-amber-500 px-6 font-semibold text-black hover:bg-amber-400">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo width={180} height={54} className="brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Dubai&apos;s trusted partner for generator and construction equipment rental. 
              Generators, compactors, air compressors, power tools & more. Serving all UAE since 1999.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="tel:+971554555786" className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-amber-500">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +971 55 455 5786
              </a>
              <a href="tel:+971504845636" className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-amber-500">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +971 50 484 5636
              </a>
              <a href="tel:+971555341166" className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-amber-500">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +971 55 534 1166
              </a>
              <a href="mailto:contact@alkabirmachineryrentals.ae" className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-amber-500">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                contact@alkabirmachineryrentals.ae
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-400">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="leading-relaxed">
                  Shop No. 6, Saih Al Salam Street,<br />
                  Marmoom, Al Lisaili, Dubai, UAE
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-all hover:bg-amber-500 hover:text-black"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {/* Company Links */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-amber-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Links */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Categories
              </h3>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-amber-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment Links */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Equipment
              </h3>
              <ul className="space-y-3">
                {footerLinks.equipment.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-amber-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-amber-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              ISO 9001 Certified
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              24/7 Customer Support
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              UAE Wide Coverage
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Secure Payments
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Al Kabir Construction Machinery Rentals. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms-of-services" className="text-sm text-zinc-500 transition-colors hover:text-amber-500">
                Terms
              </Link>
              <Link href="/terms-of-services" className="text-sm text-zinc-500 transition-colors hover:text-amber-500">
                Privacy
              </Link>
              <Link href="/terms-of-services" className="text-sm text-zinc-500 transition-colors hover:text-amber-500">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
