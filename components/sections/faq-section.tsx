import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqPageSchema, type FAQItem } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";

interface FaqSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  /** Set false on pages that already render FAQPage schema elsewhere */
  withSchema?: boolean;
}

/**
 * Renders an accessible FAQ accordion + injects schema.org FAQPage JSON-LD.
 * Drop-in safe — pre-renders ALL answers in the DOM (visible-by-default) so
 * Google can crawl text without JS, while UI uses Radix accordion for UX.
 */
export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about renting construction machinery from AL-KABIR.",
  className,
  withSchema = true,
}: FaqSectionProps) {
  if (!faqs?.length) return null;

  return (
    <section
      className={cn(
        "border-t border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950 md:py-24",
        className
      )}
      aria-labelledby="faq-heading"
    >
      {withSchema && <JsonLd id="faq" data={faqPageSchema(faqs)} />}
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center md:mb-14">
          <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-900 dark:bg-amber-500/15 dark:text-amber-400">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              {subtitle}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-zinc-200 dark:border-zinc-800">
              <AccordionTrigger className="text-left text-base font-semibold text-zinc-900 hover:no-underline dark:text-zinc-100 md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
