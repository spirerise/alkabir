import Link from "next/link";
import type { ReactNode } from "react";

export interface SeoContentBlock {
  /** Optional H2/H3 sub-heading rendered above the paragraphs. */
  heading?: string;
  /** Heading level (default h3). */
  headingLevel?: "h2" | "h3";
  /** Paragraph(s) of body copy. Strings or rich JSX. */
  paragraphs: ReactNode[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: ReactNode[];
}

export interface SeoContentSectionProps {
  /** Top-level H2 for the whole section. */
  title: string;
  /** Optional intro paragraph rendered below the title. */
  intro?: ReactNode;
  /** Sub-blocks of content (each is heading + paragraphs + optional list). */
  blocks?: SeoContentBlock[];
  /** Optional related-link footer that helps internal linking & relevance. */
  relatedLinks?: { href: string; label: string }[];
  /** Override the surrounding background classes. */
  className?: string;
  /** Tailwind classes for the inner content max-width (default max-w-4xl). */
  maxWidth?: string;
}

/**
 * Re-usable, server-rendered SEO content section.
 *
 * Adds substantive, crawlable body copy to thin page templates so the
 * text-to-HTML ratio is high enough to satisfy SEO audits (Semrush flags
 * pages below ~10%). Render this once per page, ideally just before the
 * closing CTA.
 */
export function SeoContentSection({
  title,
  intro,
  blocks = [],
  relatedLinks,
  className = "bg-white py-12 dark:bg-zinc-950 md:py-16",
  maxWidth = "max-w-4xl",
}: SeoContentSectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4">
        <div className={`mx-auto ${maxWidth}`}>
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
            {title}
          </h2>
          {intro ? (
            <p className="mb-6 text-zinc-700 dark:text-zinc-300">{intro}</p>
          ) : null}

          {blocks.map((block, i) => {
            const HeadingTag = block.headingLevel ?? "h3";
            return (
              <div key={i} className="mb-6">
                {block.heading ? (
                  <HeadingTag className="mb-3 mt-6 text-xl font-bold text-zinc-900 dark:text-white">
                    {block.heading}
                  </HeadingTag>
                ) : null}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="mb-4 text-zinc-700 dark:text-zinc-300">
                    {p}
                  </p>
                ))}
                {block.list && block.list.length > 0 ? (
                  <ul className="mb-4 ml-6 list-disc space-y-2 text-zinc-700 dark:text-zinc-300">
                    {block.list.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}

          {relatedLinks && relatedLinks.length > 0 ? (
            <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-3 text-base font-bold text-zinc-900 dark:text-white">
                Explore related pages
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {relatedLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-amber-600 hover:underline dark:text-amber-500"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
