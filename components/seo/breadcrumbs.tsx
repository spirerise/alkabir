import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  /** Include schema.org BreadcrumbList JSON-LD (default true) */
  withSchema?: boolean;
}

/**
 * Accessible breadcrumb trail with auto-injected schema.org BreadcrumbList JSON-LD.
 * Pass items WITHOUT the home page — it's prepended automatically.
 */
export function Breadcrumbs({ items, className, withSchema = true }: BreadcrumbsProps) {
  const fullTrail: BreadcrumbItem[] = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      {withSchema && <JsonLd id="breadcrumb" data={breadcrumbSchema(fullTrail)} />}
      <nav
        aria-label="Breadcrumb"
        className={cn("flex w-full overflow-x-auto py-3 text-sm", className)}
      >
        <ol className="flex items-center gap-1.5 whitespace-nowrap text-zinc-500 dark:text-zinc-400">
          {fullTrail.map((item, idx) => {
            const isLast = idx === fullTrail.length - 1;
            return (
              <li key={`${item.url}-${idx}`} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight className="size-3.5 text-zinc-400 dark:text-zinc-600" aria-hidden />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium text-zinc-900 dark:text-zinc-100"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center gap-1 transition-colors hover:text-amber-600 dark:hover:text-amber-500"
                  >
                    {idx === 0 && <Home className="size-3.5" aria-hidden />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
