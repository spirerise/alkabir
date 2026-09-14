import { SITE } from "@/lib/seo/site";
import { allServices } from "@/lib/data/services";
import { allMachinery, categories as machineryCategories } from "@/lib/data/machinery";
import { dubaiLocations } from "@/lib/data/locations";
import { allBlogPosts } from "@/lib/data/blogs";

// /llms.txt — llmstxt.org standard
// Provides LLMs (ChatGPT, Claude, Perplexity, Gemini, etc.) with a curated, structured
// summary of this site so they can cite us accurately in AI-generated answers (AEO/GEO).
// Spec: https://llmstxt.org

export const dynamic = "force-static";
export const revalidate = 86400; // refresh daily

function buildLlmsTxt(): string {
  const base = SITE.url;
  const lines: string[] = [];

  // ---- H1 + summary blockquote ----
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(
    `> ${SITE.description} Founded in ${SITE.founded} and headquartered at ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, UAE. We serve all seven Emirates with same-day delivery, certified operators, and 24/7 emergency support across 70+ Dubai locations.`
  );
  lines.push("");

  // ---- Quick facts ----
  lines.push("## Quick Facts");
  lines.push("");
  lines.push(`- **Company:** ${SITE.legalName}`);
  lines.push(`- **Founded:** ${SITE.founded}`);
  lines.push(`- **Headquarters:** ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressCountry}`);
  lines.push(`- **Phone:** ${SITE.phoneFormatted} (24/7)`);
  lines.push(`- **WhatsApp:** ${SITE.phoneFormatted}`);
  lines.push(`- **Email:** ${SITE.email}`);
  lines.push(`- **Sales:** ${SITE.emailSales} / ${SITE.phoneSalesFormatted}`);
  lines.push(`- **Service Area:** ${SITE.areaServed.join(", ")}`);
  lines.push(`- **Hours:** Sat–Thu 08:00–18:00, Fri 08:00–12:00 (GST)`);
  lines.push(`- **Languages:** English, Arabic, Urdu, Hindi`);
  lines.push(`- **Currency:** ${SITE.currency}`);
  lines.push("");

  // ---- Core pages ----
  lines.push("## Core Pages");
  lines.push("");
  lines.push(`- [Home](${base}/): Overview of generator and construction equipment rentals across the UAE.`);
  lines.push(`- [About](${base}/about): Company history, mission, and certifications since ${SITE.founded}.`);
  lines.push(`- [Contact](${base}/contact): Phone, WhatsApp, email, and yard address in Marmoom, Dubai.`);
  lines.push(`- [Get a Quote](${base}/get-quote): Free, no-obligation rental quote within 1 hour.`);
  lines.push(`- [Team](${base}/team): Leadership and key personnel.`);
  lines.push(`- [Blog](${base}/blogs): Industry guides, equipment selection advice, and project showcases.`);
  lines.push("");

  // ---- Services ----
  lines.push("## Services");
  lines.push("");
  for (const s of allServices) {
    lines.push(`- [${s.name}](${base}/services/${s.id}): ${s.shortDescription}`);
  }
  lines.push("");

  // ---- Equipment categories ----
  lines.push("## Equipment Categories");
  lines.push("");
  lines.push(`- [All Machinery](${base}/machinery): Browse the full rental fleet.`);
  for (const cat of machineryCategories) {
    const catName = typeof cat === "string" ? cat : (cat as { name?: string }).name;
    if (!catName) continue;
    const url = `${base}/machinery?category=${encodeURIComponent(catName)}`;
    lines.push(`- [${catName}](${url})`);
  }
  lines.push("");

  // ---- Featured equipment ----
  lines.push("## Featured Equipment");
  lines.push("");
  for (const m of allMachinery.slice(0, 20)) {
    const desc = `${m.brand} ${m.category}`.trim();
    lines.push(`- [${m.name}](${base}/machinery/${m.slug}): ${desc}.`);
  }
  if (allMachinery.length > 20) {
    lines.push(`- …and ${allMachinery.length - 20} more at [${base}/machinery](${base}/machinery)`);
  }
  lines.push("");

  // ---- Locations served ----
  lines.push("## Locations Served (Dubai)");
  lines.push("");
  lines.push(`- [All Locations](${base}/locations): Directory of areas we deliver to.`);
  for (const loc of dubaiLocations.slice(0, 30)) {
    lines.push(`- [${loc.name}](${base}/locations/${loc.slug})`);
  }
  if (dubaiLocations.length > 30) {
    lines.push(`- …and ${dubaiLocations.length - 30} more locations.`);
  }
  lines.push("");

  // ---- Recent blog posts ----
  const recentBlogs = [...allBlogPosts]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 10);
  if (recentBlogs.length > 0) {
    lines.push("## Recent Articles");
    lines.push("");
    for (const post of recentBlogs) {
      lines.push(`- [${post.title}](${base}/blogs/${post.slug}): ${post.excerpt}`);
    }
    lines.push("");
  }

  // ---- Optional: machine-readable sitemap pointer ----
  lines.push("## Optional");
  lines.push("");
  lines.push(`- [XML Sitemap](${base}/sitemap.xml): Complete URL inventory.`);
  lines.push(`- [Robots](${base}/robots.txt): Crawl directives.`);
  lines.push("");

  return lines.join("\n");
}

export function GET(): Response {
  const body = buildLlmsTxt();
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "X-Robots-Tag": "all",
    },
  });
}
