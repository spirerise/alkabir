"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  getAllMachinery,
  categories,
  brands,
  locations,
} from "@/lib/data/machinery";
import { SeoContentSection } from "@/components/sections/seo-content-section";

interface FilterSidebarProps {
  activeFiltersCount: number;
  clearAllFilters: () => void;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLocations: string[];
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>;
  availableOnly: boolean;
  setAvailableOnly: (checked: boolean) => void;
  toggleFilter: (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => void;
}

const FilterSidebar = ({
  activeFiltersCount,
  clearAllFilters,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  selectedLocations,
  setSelectedLocations,
  availableOnly,
  setAvailableOnly,
  toggleFilter,
}: FilterSidebarProps) => (
  <div className="space-y-6">
    {/* Clear Filters */}
    {activeFiltersCount > 0 && (
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-900 dark:text-white">
          Active Filters ({activeFiltersCount})
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="text-amber-600 hover:text-amber-700"
        >
          Clear All
        </Button>
      </div>
    )}

    <Accordion
      type="multiple"
      defaultValue={["category", "brand", "price", "location"]}
      className="w-full"
    >
      {/* Category Filter */}
      <AccordionItem
        value="category"
        className="border-zinc-200 dark:border-zinc-800"
      >
        <AccordionTrigger className="text-sm font-semibold text-zinc-900 hover:no-underline dark:text-white">
          Category
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-3">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() =>
                    toggleFilter(
                      category,
                      selectedCategories,
                      setSelectedCategories
                    )
                  }
                  className="border-zinc-300 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-sm font-normal text-zinc-600 cursor-pointer dark:text-zinc-400"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Brand Filter */}
      <AccordionItem
        value="brand"
        className="border-zinc-200 dark:border-zinc-800"
      >
        <AccordionTrigger className="text-sm font-semibold text-zinc-900 hover:no-underline dark:text-white">
          Brand
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-3">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() =>
                    toggleFilter(brand, selectedBrands, setSelectedBrands)
                  }
                  className="border-zinc-300 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                />
                <Label
                  htmlFor={`brand-${brand}`}
                  className="text-sm font-normal text-zinc-600 cursor-pointer dark:text-zinc-400"
                >
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Location Filter */}
      <AccordionItem
        value="location"
        className="border-zinc-200 dark:border-zinc-800"
      >
        <AccordionTrigger className="text-sm font-semibold text-zinc-900 hover:no-underline dark:text-white">
          Location
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-2">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-3">
                <Checkbox
                  id={`location-${location}`}
                  checked={selectedLocations.includes(location)}
                  onCheckedChange={() =>
                    toggleFilter(
                      location,
                      selectedLocations,
                      setSelectedLocations
                    )
                  }
                  className="border-zinc-300 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                />
                <Label
                  htmlFor={`location-${location}`}
                  className="text-sm font-normal text-zinc-600 cursor-pointer dark:text-zinc-400"
                >
                  {location}
                </Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Availability Filter */}
      <AccordionItem
        value="availability"
        className="border-zinc-200 dark:border-zinc-800"
      >
        <AccordionTrigger className="text-sm font-semibold text-zinc-900 hover:no-underline dark:text-white">
          Availability
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center space-x-3 pt-2">
            <Checkbox
              id="available-only"
              checked={availableOnly}
              onCheckedChange={(checked) => setAvailableOnly(checked as boolean)}
              className="border-zinc-300 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
            />
            <Label
              htmlFor="available-only"
              className="text-sm font-normal text-zinc-600 cursor-pointer dark:text-zinc-400"
            >
              Show available only
            </Label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    {/* Need Help Card */}
    <div className="rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 p-5 text-black">
      <h4 className="mb-2 font-bold">Need Expert Advice?</h4>
      <p className="mb-4 text-sm text-black/80">
        AL-KABIR equipment specialists help you find the perfect machinery for
        your Dubai project.
      </p>
      <Button
        asChild
        size="sm"
        className="w-full bg-black text-white hover:bg-zinc-800"
      >
        <Link href="/contact">Call +971 55 455 5786</Link>
      </Button>
    </div>
  </div>
);

function MachineryContent() {
  const searchParams = useSearchParams();
  
  // Initialize filters from URL directly in state to avoid cascading renders
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category") ? [searchParams.get("category")!] : []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get("brand") ? [searchParams.get("brand")!] : []
  );
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    searchParams.get("location") ? [searchParams.get("location")!] : []
  );
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  // Get all machinery
  const allMachinery = getAllMachinery();

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedLocations([]);
    setAvailableOnly(false);
    setSortBy("featured");
  };

  const filteredMachinery = useMemo(() => {
    let result = allMachinery;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(query) ||
          m.brand.toLowerCase().includes(query) ||
          m.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((m) => selectedCategories.includes(m.category));
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter((m) => selectedBrands.includes(m.brand));
    }

    // Location filter
    if (selectedLocations.length > 0) {
      result = result.filter((m) => selectedLocations.includes(m.location));
    }

    // Availability filter
    if (availableOnly) {
      result = result.filter((m) => m.available);
    }

    // Sorting
    switch (sortBy) {
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result = [...result].sort((a, b) => b.year - a.year);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [
    allMachinery,
    searchQuery,
    selectedCategories,
    selectedBrands,
    selectedLocations,
    availableOnly,
    sortBy,
  ]);

  const activeFiltersCount =
    selectedCategories.length +
    selectedBrands.length +
    selectedLocations.length +
    (availableOnly ? 1 : 0);

  return (
    <>
      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Top Bar - Search and Sort */}
          <div className="mb-8 flex flex-col gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 md:max-w-md">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <Input
                type="text"
                placeholder="Search machinery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-zinc-300 dark:border-zinc-700"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Results Count */}
              <span className="text-sm text-zinc-500">
                {filteredMachinery.length} machines found
              </span>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] border-zinc-300 dark:border-zinc-700">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="ml-1 rounded-full bg-amber-500 px-2 py-0.5 text-xs text-black">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[320px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar
                      activeFiltersCount={activeFiltersCount}
                      clearAllFilters={clearAllFilters}
                      selectedCategories={selectedCategories}
                      setSelectedCategories={setSelectedCategories}
                      selectedBrands={selectedBrands}
                      setSelectedBrands={setSelectedBrands}
                      selectedLocations={selectedLocations}
                      setSelectedLocations={setSelectedLocations}
                      availableOnly={availableOnly}
                      setAvailableOnly={setAvailableOnly}
                      toggleFilter={toggleFilter}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden w-72 shrink-0 lg:block">
              <div className="sticky top-24 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-6 text-lg font-bold text-zinc-900 dark:text-white">
                  Filters
                </h3>
                <FilterSidebar
                  activeFiltersCount={activeFiltersCount}
                  clearAllFilters={clearAllFilters}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                  selectedLocations={selectedLocations}
                  setSelectedLocations={setSelectedLocations}
                  availableOnly={availableOnly}
                  setAvailableOnly={setAvailableOnly}
                  toggleFilter={toggleFilter}
                />
              </div>
            </aside>

            {/* Machinery Grid */}
            <div className="flex-1">
              {filteredMachinery.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
                  <svg
                    className="mb-4 h-16 w-16 text-zinc-300 dark:text-zinc-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
                    No machines found
                  </h3>
                  <p className="mb-6 text-zinc-500">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={clearAllFilters} className="bg-amber-500 text-black hover:bg-amber-400">
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <div className="flex w-full flex-col gap-6">
                  {filteredMachinery.map((machine) => (
                    <Card key={machine.id} className="group h-full overflow-hidden border border-zinc-200 bg-white transition-colors hover:border-amber-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-500">
                        <div className="flex flex-col md:flex-row">
                          {/* Image */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 md:aspect-auto md:h-auto md:min-h-[280px] md:w-80 md:shrink-0 lg:w-96">
                            <Image
                              src={machine.image}
                              alt={machine.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 384px"
                              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Availability Badge */}
                            <Badge
                              className={`absolute left-3 top-3 ${
                                machine.available
                                  ? "bg-green-500 text-white"
                                  : "bg-zinc-500 text-white"
                              }`}
                            >
                              {machine.available ? "Available" : "Rented"}
                            </Badge>
                            {/* Location Badge */}
                            <Badge className="absolute right-3 top-3 bg-white/90 text-zinc-900 backdrop-blur-sm">
                              📍 {machine.location}
                            </Badge>
                          </div>

                          <CardContent className="flex flex-1 flex-col justify-between p-5 md:p-6">
                            <div>
                              {/* Category & Brand */}
                              <div className="mb-2 flex items-center gap-2">
                                <span className="text-xs font-medium text-amber-600 dark:text-amber-500">
                                  {machine.category}
                                </span>
                                <span className="text-zinc-300 dark:text-zinc-600">•</span>
                                <span className="text-xs text-zinc-500">{machine.brand}</span>
                              </div>

                              {/* Name */}
                              <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500 md:text-2xl">
                                {machine.name}
                              </h3>

                              {/* Specs */}
                              <div className="mb-4 flex flex-wrap gap-2">
                                {machine.specs.map((spec, index) => (
                                  <span
                                    key={index}
                                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>

                              {/* Rating */}
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  <svg
                                    className="h-4 w-4 text-amber-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span className="text-sm font-medium text-zinc-900 dark:text-white">
                                    {machine.rating}
                                  </span>
                                </div>
                                <span className="text-xs text-zinc-500">
                                  ({machine.reviews} reviews)
                                </span>
                              </div>
                            </div>

                            {/* Price */}
                            <div className="mt-4 flex flex-col gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Contact us for best rates</span>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  asChild
                                  size="default"
                                  variant="outline"
                                  className="border-zinc-300 dark:border-zinc-700"
                                >
                                  <Link href={`/machinery/${machine.slug}`}>View Details</Link>
                                </Button>
                                <Button
                                  asChild
                                  size="default"
                                  className="bg-amber-500 text-black hover:bg-amber-400"
                                >
                                  <Link href={`/get-quote?machine=${machine.slug}`}>Get Quote</Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-100 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="mb-8 text-zinc-600 dark:text-zinc-400">
              Our fleet is constantly expanding. Contact us to discuss your specific
              requirements or request equipment that&apos;s not listed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
                <Link href="/contact">Request Equipment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+971554555786">+971 55 455 5786</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function MachineryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section — rendered outside Suspense so SSR has the H1 + intro copy */}
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
              Generator & Construction Equipment Rental Dubai
            </Badge>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Rent <span className="text-amber-500">Construction Equipment</span> in Dubai
            </h1>
            <p className="mb-6 text-lg text-zinc-400">
              Browse AL-KABIR&apos;s extensive fleet of generators, compactors, air compressors, power tools
              and construction equipment available for immediate rental across Dubai and all UAE Emirates.
            </p>
            <h2 className="sr-only">Construction Machinery Rental Catalogue Dubai &amp; UAE</h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400">
                <Link href="/get-quote" className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Get a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 border-zinc-700 bg-zinc-900/50 px-8 text-base font-semibold text-white backdrop-blur hover:bg-zinc-800 hover:text-white">
                <Link href="tel:+971554555786" className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={
        <div className="flex min-h-[40vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent"></div>
        </div>
      }>
        <MachineryContent />
      </Suspense>

      {/* SEO Content — rendered outside Suspense so it appears in SSR HTML */}
      <SeoContentSection
        title="The complete AL-KABIR construction machinery rental catalogue for Dubai and the UAE"
        intro={
          <>
            This is the master catalogue of AL-KABIR&apos;s rental fleet &mdash; over 200 machines across
            generators, compactors, air compressors, concrete equipment, scaffolding, ladders, lighting,
            pumps, landscaping, cleaning equipment and a deep selection of branded power tools. Use the
            filters on this page to narrow by category, brand or service location, or browse the full
            list to see what we currently stock. Every machine is regularly serviced in our Al Quoz
            workshop, fully insured for UAE site use, and delivered ready-to-operate. Daily, weekly,
            monthly and long-term framework rates are all available.
          </>
        }
        blocks={[
          {
            heading: "How to choose the right machine",
            paragraphs: [
              <>
                Three questions usually drive the choice. First: what is the actual job &mdash; powering
                a site office, breaking out concrete, compacting backfill, cutting steel reinforcement,
                trowelling a concrete slab, or providing temporary lighting for a night shift? Second:
                what is the duty cycle &mdash; an hour a day, eight hours, twenty-four hours? Third:
                what are the site constraints &mdash; noise limits, fuel availability, access width,
                operator licensing? The technical-specs section on each machine page lists power
                ratings, fuel consumption, dimensions, weight and recommended use cases so you can match
                the machine to the brief before requesting a quote.
              </>,
              <>
                If the choice is not obvious, our sales engineers will help size the equipment for your
                project at no charge. Common sizing conversations include matching generator KVA to a
                site&apos;s combined motor and lighting load, choosing between forward-plate and
                reversible-plate compactors for backfill density, and selecting between cordless and
                corded power tools based on shift length.
              </>,
            ],
          },
          {
            heading: "Brands we stock",
            paragraphs: [
              <>
                Our fleet is built almost entirely from Tier-1 manufacturers because cheap equipment
                breaks down on UAE construction sites and turns rentals into liabilities. Generator
                brands include Cummins, Perkins, Caterpillar and Honda. Compactors and rollers are
                Wacker Neuson and Caterpillar. Power tools and demolition gear come from Hilti, Bosch
                and Makita. Scaffolding is supplied with full UAE Civil Defence-compliant components.
                Pumps, lighting towers and concrete equipment are sourced from established
                manufacturers with available local spare parts.
              </>,
            ],
          },
          {
            heading: "Most-rented machines on this catalogue",
            paragraphs: [
              <>
                The highest-volume rentals on this page include the{" "}
                <Link href="/machinery/perkins-500kva-diesel-generator" className="text-amber-600 hover:underline dark:text-amber-500">Perkins 500 KVA diesel generator</Link>,{" "}
                <Link href="/machinery/cummins-100kva-silent-generator" className="text-amber-600 hover:underline dark:text-amber-500">Cummins 100 KVA silent generator</Link>,{" "}
                <Link href="/machinery/honda-20kva-portable-generator" className="text-amber-600 hover:underline dark:text-amber-500">Honda 20 KVA portable generator</Link>,{" "}
                <Link href="/machinery/perkins-350kva-diesel-generator" className="text-amber-600 hover:underline dark:text-amber-500">Perkins 350 KVA diesel generator</Link>,{" "}
                <Link href="/machinery/cat-10-ton-roller-compactor" className="text-amber-600 hover:underline dark:text-amber-500">Caterpillar 10-ton roller compactor</Link>,{" "}
                <Link href="/machinery/wacker-neuson-power-trowel" className="text-amber-600 hover:underline dark:text-amber-500">Wacker Neuson power trowel</Link>,{" "}
                <Link href="/machinery/hilti-te-3000-jack-hammer" className="text-amber-600 hover:underline dark:text-amber-500">Hilti TE 3000 jack hammer</Link>,{" "}
                <Link href="/machinery/hilti-te-70-combihammer-drill" className="text-amber-600 hover:underline dark:text-amber-500">Hilti TE 70 combihammer drill</Link>,{" "}
                <Link href="/machinery/hilti-dd-150-core-cutting-machine" className="text-amber-600 hover:underline dark:text-amber-500">Hilti DD 150 core-cutting machine</Link>,{" "}
                <Link href="/machinery/bosch-gsh-11-vc-jack-hammer" className="text-amber-600 hover:underline dark:text-amber-500">Bosch GSH 11 VC jack hammer</Link>,{" "}
                <Link href="/machinery/makita-hm0870c-jack-hammer" className="text-amber-600 hover:underline dark:text-amber-500">Makita HM 0870 C jack hammer</Link>,{" "}
                <Link href="/machinery/aluminum-scaffolding-2m-set" className="text-amber-600 hover:underline dark:text-amber-500">aluminium scaffolding sets</Link>{" "}
                and a wide range of Bosch battery drills and cutters.
              </>,
            ],
          },
          {
            heading: "Delivery, operators and maintenance",
            paragraphs: [
              <>
                Every rental on this catalogue is eligible for same-day delivery to standard Dubai
                service areas and next-day delivery to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah,
                Fujairah and Umm Al Quwain. Certified operators can be added to any rental for
                projects that prefer a fully managed service. On-site preventive maintenance, fuel
                top-ups and emergency callouts are available 24/7. All rates include a replacement
                guarantee in writing.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/categories", label: "Browse by category" },
          { href: "/services", label: "Rental services" },
          { href: "/locations", label: "Service areas" },
          { href: "/about", label: "About AL-KABIR" },
          { href: "/get-quote", label: "Request a quote" },
          { href: "/contact", label: "Contact us" },
        ]}
      />
    </div>
  );
}
