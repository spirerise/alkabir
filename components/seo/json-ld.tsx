import Script from "next/script";

interface JsonLdProps {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders JSON-LD structured data via next/script (afterInteractive by default).
 * For SEO/AEO this is fine — Googlebot reads <script type="application/ld+json"> regardless of strategy.
 * Pass a single schema object, or an array for multiple graphs.
 */
export function JsonLd({ id, data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((schema, idx) => (
        <script
          key={`${id ?? "ld"}-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// keep import to satisfy possible future Script-based variant
void Script;
