import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Home, Search, Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="relative w-full max-w-2xl text-center">
          {/* Background Decorative Element */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
          
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-500">
                <Construction className="h-12 w-12" />
              </div>
              <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white shadow-lg dark:bg-white dark:text-black">
                <span className="text-lg font-bold">404</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Page Under <span className="text-amber-500">Maintenance</span> or Not Found
          </h1>
          <p className="mb-10 text-lg text-zinc-600 dark:text-zinc-400">
            The page you are looking for might have been moved, deleted, or is temporarily unavailable. 
            Don&apos;t worry, our machinery is still ready for your project!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 border-zinc-200 px-8 text-base font-semibold dark:border-zinc-800">
              <Link href="/machinery" className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Browse Machinery
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-10 dark:border-zinc-800 sm:grid-cols-4">
            <Link href="/services" className="text-sm font-medium text-zinc-500 transition-colors hover:text-amber-500">
              Our Services
            </Link>
            <Link href="/locations" className="text-sm font-medium text-zinc-500 transition-colors hover:text-amber-500">
              Locations
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-500 transition-colors hover:text-amber-500">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-500 transition-colors hover:text-amber-500">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
