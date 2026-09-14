import { Metadata } from "next";
import Link from "next/link";
import {
  HeroSection,
  BrandsSection,
  StatsSection,
  CategoriesSection,
  FeaturedMachinerySection,
  WhyChooseUsSection,
  HowItWorksSection,
  ServicesSection,
  HappyCustomersSection,
  LocationsSection,
  CTASection,
  SeoContentSection,
} from "@/components/sections";
import { FaqSection } from "@/components/sections/faq-section";
import { generalFaqs } from "@/lib/data/faqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFaqs } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pathname: "/",
    fallbackTitle: "Generator & Equipment Rental Dubai | AL-KABIR",
    fallbackDescription:
      "Dubai's #1 generator & construction equipment rental — 5–1000 KVA generators, compactors, scaffolding & tools. Same-day UAE delivery.",
  });
}

export default async function Home() {
  const faqs = await getFaqs();
  const homeFaqs = faqs.general ?? generalFaqs;
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedMachinerySection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ServicesSection />
      <HappyCustomersSection />
      <LocationsSection />
      <FaqSection
        faqs={homeFaqs}
        title="Construction Equipment Rental — FAQs"
        subtitle="Quick answers about generator hire, equipment delivery, operators and pricing across Dubai and the UAE."
      />
      <SeoContentSection
        title="Dubai's most trusted construction equipment and generator rental company"
        intro={
          <>
            AL-KABIR Construction Machinery Rentals is the rental partner of choice for hundreds of UAE
            contractors, MEP firms, fit-out specialists, event organisers and government projects. We
            run a fleet of more than 200 machines &mdash; including diesel and silent generators from
            5 KVA to 1000 KVA, plate compactors, vibratory rollers, air compressors, concrete mixers,
            jack hammers, core-cutting machines, scaffolding sets, lighting towers, power trowels,
            ladders, and a deep catalogue of branded power tools from Hilti, Bosch, Makita, Wacker
            Neuson, Caterpillar, Cummins, Perkins and Honda. Same-day delivery is standard across more
            than 70 Dubai locations, with next-day cover for Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah,
            Fujairah and Umm Al Quwain.
          </>
        }
        blocks={[
          {
            heading: "Generator rental Dubai &mdash; the heart of the fleet",
            paragraphs: [
              <>
                Generators are AL-KABIR&apos;s highest-volume rental category. We stock{" "}
                <Link href="/machinery?category=Diesel%20Generators" className="text-amber-600 hover:underline dark:text-amber-500">diesel generators</Link>{" "}
                from 20 KVA to 1000 KVA,{" "}
                <Link href="/machinery?category=Silent%20Generators" className="text-amber-600 hover:underline dark:text-amber-500">silent canopy units</Link>{" "}
                for noise-sensitive sites, portable petrol sets for events, three-phase generators for
                industrial loads, and welding generators for fabrication work. Capacity sizing is
                included free of charge with every quote: provide the connected load, expected duty
                cycle and starting requirements, and our engineers will recommend the right KVA
                rating along with fuel-tank, ATS and synchronisation options if needed.
              </>,
            ],
          },
          {
            heading: "Compaction, concrete and demolition",
            paragraphs: [
              <>
                For groundworks, paving and concrete jobs we offer Wacker Neuson and Caterpillar{" "}
                <Link href="/machinery?category=Compactors" className="text-amber-600 hover:underline dark:text-amber-500">compactors and vibratory rollers</Link>,{" "}
                <Link href="/machinery?category=Concrete%20Equipment" className="text-amber-600 hover:underline dark:text-amber-500">concrete mixers, vibrators and trowels</Link>,{" "}
                and a full demolition range including Hilti TE 3000 jack hammers, Bosch GSH 11 VC
                breakers, Makita HM 0870 C hammers and Hilti DD 150 core-cutting machines. Reversible
                plate compactors are available for tight backfill jobs, and our 10-ton tandem rollers
                cover larger paving and parking-lot work.
              </>,
            ],
          },
          {
            heading: "Power tools, lighting, scaffolding and access",
            paragraphs: [
              <>
                The full <Link href="/machinery?category=Power%20Tools" className="text-amber-600 hover:underline dark:text-amber-500">power-tool catalogue</Link>{" "}
                spans drills, cutters, grinders and steel-bending machines from the major brands.
                Aluminium <Link href="/machinery?category=Scaffolding" className="text-amber-600 hover:underline dark:text-amber-500">scaffolding sets</Link>{" "}
                are available in 2-metre, 4-metre and 6-metre configurations with all UAE Civil Defence
                compliant fittings. <Link href="/machinery?category=Lighting" className="text-amber-600 hover:underline dark:text-amber-500">Lighting towers</Link>{" "}
                cover night shifts, roadworks and event venues; <Link href="/machinery?category=Air%20Compressors" className="text-amber-600 hover:underline dark:text-amber-500">air compressors</Link>{" "}
                support sand-blasting, pneumatic tools and concrete-curing operations.
              </>,
            ],
          },
          {
            heading: "More than equipment &mdash; a complete rental service",
            paragraphs: [
              <>
                AL-KABIR provides everything around the equipment as well: certified operators,
                on-site preventive and breakdown maintenance, fuel management, transportation, operator
                training, and project consulting. Most projects can be supplied under a single master
                service agreement that bundles equipment, operators, maintenance, fuel and reporting,
                substantially simplifying contractor procurement. See the full list on our{" "}
                <Link href="/services" className="text-amber-600 hover:underline dark:text-amber-500">services page</Link>{" "}
                or <Link href="/get-quote" className="text-amber-600 hover:underline dark:text-amber-500">request a quote</Link>{" "}
                directly.
              </>,
            ],
          },
          {
            heading: "Why UAE contractors return to AL-KABIR",
            paragraphs: [
              <>
                Three reasons come up repeatedly in customer feedback: the fleet is well-maintained
                and Tier-1 branded; quotes are itemised, transparent and stable; and the after-hours
                phone line is genuinely answered. Replacement guarantees are written into every
                contract, fuel and operator costs are quoted up-front, and our employee-retention
                rate above 98 percent means the same people manage your account year after year.
                Read more on our <Link href="/about" className="text-amber-600 hover:underline dark:text-amber-500">about page</Link>{" "}
                or meet the <Link href="/team" className="text-amber-600 hover:underline dark:text-amber-500">leadership team</Link>{" "}
                directly.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/machinery", label: "Browse the fleet" },
          { href: "/categories", label: "Equipment categories" },
          { href: "/services", label: "Services" },
          { href: "/locations", label: "Service areas" },
          { href: "/about", label: "About" },
          { href: "/team", label: "Team" },
          { href: "/blogs", label: "Blog" },
          { href: "/get-quote", label: "Get a quote" },
          { href: "/contact", label: "Contact" },
        ]}
      />
      <CTASection />
    </>
  );
}
