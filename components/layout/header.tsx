"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// SVG Icon Components
const EquipmentIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 18h8M5 18H4a1 1 0 01-1-1v-2a1 1 0 011-1h1m14 4h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1M5 14V9a2 2 0 012-2h2l2-3h6v6l3 4H5zm3 4a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

const OperatorIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WrenchIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
);

const CogIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
  </svg>
);

const StarIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const ScaffoldingIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M5 20V8l7-5 7 5v12M5 8h14M12 3v5M9 11v2M15 11v2M12 15v5" />
  </svg>
);

const ConcreteIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const CompactionIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
  </svg>
);

const AerialIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
  </svg>
);

const GeneratorIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const RoadIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>
);

// Icon map for services
const serviceIcons: Record<string, React.ReactNode> = {
  "Equipment Rental": <EquipmentIcon />,
  "Operator Services": <OperatorIcon />,
  "Maintenance & Repair": <WrenchIcon />,
  "Transportation": <TruckIcon />,
  "Consulting": <ClipboardIcon />,
  "Training": <AcademicCapIcon />,
};

// Icon map for team
const teamIcons: Record<string, React.ReactNode> = {
  "Leadership": <BriefcaseIcon />,
  "Operations": <CogIcon />,
  "Sales Team": <HandshakeIcon />,
  "Technical Support": <SupportIcon />,
  "Join Our Team": <StarIcon />,
};

// Icon map for categories
const categoryIcons: Record<string, React.ReactNode> = {
  "Generators": <GeneratorIcon />,
  "Compactors": <CompactionIcon />,
  "Concrete Equipment": <ConcreteIcon />,
  "Power Tools": <WrenchIcon />,
  "Scaffolding": <ScaffoldingIcon />,
  "Cutting Machines": <CogIcon />,
  "Cleaning Equipment": <SupportIcon />,
  "Drills": <WrenchIcon />,
  "Pumps": <CogIcon />,
  "Ladders": <AerialIcon />,
  "Landscaping": <RoadIcon />,
  "Lighting": <GeneratorIcon />,
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Machinery", href: "/machinery", hasDropdown: true },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Categories", href: "/categories", hasDropdown: true },
  { name: "Team", href: "/team", hasDropdown: true },
  { name: "Locations", href: "/locations" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
];

const machineryDropdown = {
  featured: [
    { name: "Perkins 500 KVA Generator", description: "Silent canopy diesel generator", href: "/machinery/perkins-500kva-diesel-generator", image: "https://static.wixstatic.com/media/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg/v1/fill/w_480,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg" },
    { name: "CAT 10 Ton Roller", description: "Vibratory smooth drum compactor", href: "/machinery/cat-10-ton-roller-compactor", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20181005-28697-10109" },
  ],
  categories: [
    { name: "Generators", count: 20, href: "/machinery?category=Generators" },
    { name: "Compactors", count: 4, href: "/machinery?category=Compactors" },
    { name: "Concrete Equipment", count: 3, href: "/machinery?category=Concrete%20Equipment" },
    { name: "Power Tools", count: 6, href: "/machinery?category=Power%20Tools" },
    { name: "Scaffolding", count: 1, href: "/machinery?category=Scaffolding" },
    { name: "Cutting Machines", count: 6, href: "/machinery?category=Cutting%20Machines" },
  ],
};

const servicesDropdown = [
  { name: "Equipment Rental", description: "Short and long-term machinery rental solutions", href: "/services/equipment-rental" },
  { name: "Operator Services", description: "Certified operators for your equipment", href: "/services/operator-services" },
  { name: "Maintenance & Repair", description: "Keep your machinery in top condition", href: "/services/maintenance-repair" },
  { name: "Transportation", description: "Safe delivery to your project site", href: "/services/transportation" },
  { name: "Consulting", description: "Expert advice for your projects", href: "/services/consulting" },
  { name: "Training", description: "Equipment operation training programs", href: "/services/training" },
];

const teamDropdown = [
  { name: "Leadership", description: "Meet our executive team", href: "/team" },
  { name: "Operations", description: "Our operations specialists", href: "/team" },
  { name: "Sales Team", description: "Get in touch with sales", href: "/team" },
  { name: "Technical Support", description: "24/7 technical assistance", href: "/team" },
  { name: "Join Our Team", description: "View career opportunities", href: "/team#careers" },
];

const categoriesDropdown = [
  { name: "Generators", description: "Portable and industrial power solutions", count: 20, href: "/machinery?category=Generators" },
  { name: "Compactors", description: "Rollers and compactors for soil work", count: 4, href: "/machinery?category=Compactors" },
  { name: "Concrete Equipment", description: "Mixers, vibrators, and finishing tools", count: 3, href: "/machinery?category=Concrete%20Equipment" },
  { name: "Power Tools", description: "Professional-grade electric and cordless tools", count: 6, href: "/machinery?category=Power%20Tools" },
  { name: "Scaffolding", description: "Safe and reliable aluminum scaffolding towers", count: 1, href: "/machinery?category=Scaffolding" },
  { name: "Cutting Machines", description: "Precision cutting tools for all materials", count: 6, href: "/machinery?category=Cutting%20Machines" },
  { name: "Cleaning Equipment", description: "Industrial vacuums and floor grinders", count: 2, href: "/machinery?category=Cleaning%20Equipment" },
  { name: "Drills", description: "Hammer drills and cordless drivers", count: 2, href: "/machinery?category=Drills" },
  { name: "Pumps", description: "Water pumps and pressure testing equipment", count: 2, href: "/machinery?category=Pumps" },
  { name: "Ladders", description: "Durable aluminum extension ladders", count: 1, href: "/machinery?category=Ladders" },
  { name: "Landscaping", description: "Professional gardening and landscaping tools", count: 3, href: "/machinery?category=Landscaping" },
  { name: "Lighting", description: "Mobile lighting towers and site lights", count: 1, href: "/machinery?category=Lighting" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenSections, setMobileOpenSections] = useState<string[]>([]);

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileSection = (name: string) => {
    setMobileOpenSections((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white dark:bg-zinc-950"
      onMouseLeave={handleMouseLeave}
    >
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto flex h-14 items-center px-4 sm:h-16">
          {/* Logo */}
          <Logo width={140} height={42} />

          {/* Desktop Navigation - Centered */}
          <nav className="hidden flex-1 items-center justify-center space-x-1 lg:flex lg:space-x-4 xl:space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative py-5"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${
                    activeDropdown === item.name 
                      ? 'text-black dark:text-white' 
                      : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Get Quote Button - Right Side (Desktop) */}
          <div className="hidden lg:block">
            <Button asChild className="bg-amber-500 text-black hover:bg-amber-400">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="ml-auto lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto p-0 sm:w-[400px]">
              <SheetHeader className="border-b border-zinc-200 p-4 dark:border-zinc-800">
                <SheetTitle className="text-left text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-4">
                {/* Navigation Links with Collapsible Dropdowns */}
                {navigation.map((item) => (
                  item.hasDropdown ? (
                    <Collapsible
                      key={item.name}
                      open={mobileOpenSections.includes(item.name)}
                      onOpenChange={() => toggleMobileSection(item.name)}
                    >
                      <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-base font-medium text-zinc-900 transition-colors hover:text-amber-600 dark:text-white dark:hover:text-amber-500">
                        {item.name}
                        <svg 
                          className={`h-5 w-5 text-zinc-400 transition-transform ${mobileOpenSections.includes(item.name) ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden">
                        <div className="space-y-1 border-l-2 border-amber-500/30 pb-3 pl-4">
                          {item.name === "Machinery" && machineryDropdown.categories.map((cat) => (
                            <Link
                              key={cat.name}
                              href={cat.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-amber-500">{categoryIcons[cat.name]}</span>
                                <span>{cat.name}</span>
                              </div>
                              <span className="text-xs text-zinc-400">{cat.count}</span>
                            </Link>
                          ))}
                          {item.name === "Services" && servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                            >
                              <span className="text-amber-500">{serviceIcons[service.name]}</span>
                              <span>{service.name}</span>
                            </Link>
                          ))}
                          {item.name === "Categories" && categoriesDropdown.slice(0, 8).map((cat) => (
                            <Link
                              key={cat.name}
                              href={cat.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-amber-500">{categoryIcons[cat.name]}</span>
                                <span>{cat.name}</span>
                              </div>
                              <span className="text-xs text-zinc-400">{cat.count}</span>
                            </Link>
                          ))}
                          {item.name === "Team" && teamDropdown.map((team) => (
                            <Link
                              key={team.name}
                              href={team.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                            >
                              <span className="text-amber-500">{teamIcons[team.name]}</span>
                              <span>{team.name}</span>
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="mt-2 flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-amber-600 dark:bg-zinc-800 dark:text-amber-500"
                          >
                            View All {item.name}
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="py-3 text-base font-medium text-zinc-900 transition-colors hover:text-amber-600 dark:text-white dark:hover:text-amber-500"
                    >
                      {item.name}
                    </Link>
                  )
                ))}

                {/* Mobile CTA */}
                <div className="mt-6 space-y-3 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                  <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-400">
                    <Link href="/get-quote" onClick={() => setOpen(false)}>
                      Get a Free Quote
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+971554555786" className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +971 55 455 5786
                    </a>
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 space-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                  <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Multiple Locations across UAE</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Full-width Dropdown Menus */}
      {/* Machinery Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-b border-zinc-200 bg-white shadow-xl transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-950 lg:block ${
          activeDropdown === "Machinery" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setActiveDropdown("Machinery")}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Featured Machines */}
            <div className="col-span-5">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">Featured Machines</h3>
              <div className="space-y-4">
                {machineryDropdown.featured.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex gap-4 rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  >
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-zinc-200">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-900 group-hover:text-amber-600 dark:text-white">{item.name}</div>
                      <div className="text-sm text-zinc-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="col-span-4">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {machineryDropdown.categories.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  >
                    <span className="font-medium text-zinc-700 group-hover:text-amber-600 dark:text-zinc-300">{item.name}</span>
                    <span className="text-xs text-zinc-400">{item.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="col-span-3 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-black">
              <h3 className="mb-2 text-lg font-bold">Need Help Choosing?</h3>
              <p className="mb-4 text-sm text-black/80">Our experts can help you find the perfect equipment for your project.</p>
              <Button asChild variant="secondary" className="w-full bg-black text-amber-500 hover:bg-zinc-900">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-b border-zinc-200 bg-white shadow-xl transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-950 lg:block ${
          activeDropdown === "Services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setActiveDropdown("Services")}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4">
            {servicesDropdown.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-500">
                  {serviceIcons[item.name]}
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 group-hover:text-amber-600 dark:text-white">{item.name}</div>
                  <div className="text-sm text-zinc-500">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <p className="text-sm text-zinc-500">Can&apos;t find what you need?</p>
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Team Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-b border-zinc-200 bg-white shadow-xl transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-950 lg:block ${
          activeDropdown === "Team" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setActiveDropdown("Team")}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-5 gap-4">
            {teamDropdown.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex flex-col items-center rounded-xl p-6 text-center transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-500">
                  {teamIcons[item.name]}
                </div>
                <div className="font-semibold text-zinc-900 group-hover:text-amber-600 dark:text-white">{item.name}</div>
                <div className="mt-1 text-xs text-zinc-500">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full z-50 hidden border-b border-zinc-200 bg-white shadow-xl transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-950 lg:block ${
          activeDropdown === "Categories" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setActiveDropdown("Categories")}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Categories Grid */}
            <div className="col-span-9">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">Equipment Categories</h3>
              <div className="grid grid-cols-4 gap-3">
                {categoriesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-500">
                      {categoryIcons[item.name]}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-zinc-900 group-hover:text-amber-600 dark:text-white">{item.name}</span>
                        <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800">{item.count}</span>
                      </div>
                      <div className="mt-0.5 truncate text-xs text-zinc-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="col-span-3 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-black">
              <h3 className="mb-2 text-lg font-bold">500+ Machines Ready</h3>
              <p className="mb-4 text-sm text-black/80">Browse our complete fleet of construction equipment available for immediate rental.</p>
              <Button asChild variant="secondary" className="w-full bg-black text-amber-500 hover:bg-zinc-900">
                <Link href="/categories">View All Categories</Link>
              </Button>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+971 55 455 5786</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
