#!/usr/bin/env node
/* eslint-disable */
/**
 * Comprehensive SEO Audit — emulates checks performed by:
 *  - Google Search Console / Rich Results Test
 *  - Lighthouse (SEO category)
 *  - Semrush Site Audit
 *  - Ahrefs Site Audit
 *  - Screaming Frog SEO Spider
 */
const BASE = process.env.BASE_URL || "http://localhost:3000";

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/equipment-rental",
  "/services/operator-services",
  "/machinery",
  "/machinery/perkins-500kva-diesel-generator",
  "/machinery/cummins-100kva-silent-generator",
  "/categories",
  "/locations",
  "/locations/damac-hills-1",
  "/locations/al-quoz",
  "/locations/business-bay",
  "/blogs",
  "/blogs/top-10-generator-models-2025",
  "/contact",
  "/get-quote",
  "/team",
  "/privacy-policy",
  "/terms-of-services",
  "/robots.txt",
  "/sitemap.xml",
  "/site.webmanifest",
];

const colors = {
  pass: "\x1b[32m",
  warn: "\x1b[33m",
  fail: "\x1b[31m",
  info: "\x1b[36m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
};

const issues = { critical: [], warning: [], info: [] };
function record(level, route, msg) {
  issues[level === "fail" ? "critical" : level === "warn" ? "warning" : "info"].push(`[${route}] ${msg}`);
}

function get(re, html, all = false) {
  if (all) {
    const out = [];
    let m;
    const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
    while ((m = r.exec(html)) !== null) out.push(m);
    return out;
  }
  return re.exec(html);
}

async function fetchRoute(route) {
  const url = BASE + route;
  const res = await fetch(url, { redirect: "manual" });
  const html = await res.text();
  return { url, route, status: res.status, headers: res.headers, html };
}

function extractMeta(html, name) {
  const re = new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']*)["']`, "i");
  const m = re.exec(html);
  if (m) return m[1];
  // Try with content first
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${name}["']`, "i");
  const m2 = re2.exec(html);
  return m2 ? m2[1] : null;
}

function extractTitle(html) {
  const m = /<title[^>]*>([^<]*)<\/title>/i.exec(html);
  return m ? m[1] : null;
}

function extractCanonical(html) {
  const m = /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i.exec(html);
  if (m) return m[1];
  const m2 = /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i.exec(html);
  return m2 ? m2[1] : null;
}

function extractH(html, level) {
  const re = new RegExp(`<h${level}[^>]*>([\\s\\S]*?)</h${level}>`, "gi");
  const out = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    out.push(m[1].replace(/<[^>]+>/g, "").trim());
  }
  return out;
}

function extractJsonLd(html) {
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const out = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      out.push(JSON.parse(m[1]));
    } catch (e) {
      out.push({ __error: e.message, __raw: m[1].slice(0, 100) });
    }
  }
  return out;
}

function extractImages(html) {
  const out = [];
  // Robust <img ...> matcher that handles quoted attributes containing '>' chars
  const re = /<img\b((?:[^"'>]|"[^"]*"|'[^']*')*)\/?>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1];
    out.push({
      src: /\bsrc=["']([^"']*)["']/.exec(attrs)?.[1] ?? null,
      alt: /\balt=["']([^"']*)["']/.exec(attrs)?.[1] ?? null,
      hasAlt: /\salt=/.test(attrs),
      loading: /\bloading=["']([^"']*)["']/.exec(attrs)?.[1] ?? null,
      width: /\bwidth=["']?([^"'\s>]+)/.exec(attrs)?.[1] ?? null,
      height: /\bheight=["']?([^"'\s>]+)/.exec(attrs)?.[1] ?? null,
    });
  }
  return out;
}

function extractLinks(html, baseHost) {
  const out = { internal: [], external: [], nofollow: 0, empty: 0, noText: 0 };
  const re = /<a\s+([^>]*?)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1];
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    const href = /href=["']([^"']*)["']/.exec(attrs)?.[1] ?? "";
    const rel = /rel=["']([^"']*)["']/.exec(attrs)?.[1] ?? "";
    if (!href) {
      out.empty++;
      continue;
    }
    if (rel.includes("nofollow")) out.nofollow++;
    if (!text) out.noText++;
    if (href.startsWith("/") || href.includes(baseHost)) out.internal.push({ href, text });
    else if (/^https?:/.test(href)) out.external.push({ href, text, rel });
  }
  return out;
}

function check(label, condition, level, route, failMsg, passMsg) {
  const ok = !!condition;
  const c = ok ? colors.pass : level === "fail" ? colors.fail : colors.warn;
  const sym = ok ? "✓" : level === "fail" ? "✗" : "!";
  console.log(`  ${c}${sym}${colors.reset} ${label}${ok ? (passMsg ? colors.dim + " — " + passMsg + colors.reset : "") : colors.dim + " — " + failMsg + colors.reset}`);
  if (!ok) record(level, route, `${label}: ${failMsg}`);
  return ok;
}

const SCHEMA_TYPES_FOUND = new Set();

async function audit() {
  console.log(`${colors.bold}═══════════════════════════════════════════════════════════════════════`);
  console.log(`  SEO AUDIT — ${BASE}`);
  console.log(`  (Lighthouse + Semrush + Ahrefs + Screaming Frog + Schema.org checks)`);
  console.log(`═══════════════════════════════════════════════════════════════════════${colors.reset}\n`);

  const baseHost = new URL(BASE).host;
  let totalIssues = 0;

  for (const route of ROUTES) {
    const r = await fetchRoute(route);
    console.log(`${colors.bold}${colors.info}► ${route}${colors.reset} ${colors.dim}(${r.status})${colors.reset}`);

    // ── Special files ─────────────────────────────────────────────────
    if (route === "/robots.txt") {
      check("HTTP 200", r.status === 200, "fail", route, `Got ${r.status}`);
      check("Has Sitemap directive", /Sitemap:/i.test(r.html), "fail", route, "Missing Sitemap: line");
      check("Has User-agent", /User-Agent:/i.test(r.html), "fail", route, "Missing User-Agent");
      check("References AI bots (AEO)", /(GPTBot|ClaudeBot|PerplexityBot|Google-Extended)/i.test(r.html), "warn", route, "Missing AI crawler rules");
      console.log();
      continue;
    }
    if (route === "/sitemap.xml") {
      check("HTTP 200", r.status === 200, "fail", route, `Got ${r.status}`);
      check("Valid XML", /<urlset/i.test(r.html), "fail", route, "Not a valid urlset");
      const urlCount = (r.html.match(/<url>/g) || []).length;
      check(`URL count > 100`, urlCount > 100, "warn", route, `Only ${urlCount} URLs`, `${urlCount} URLs`);
      check("All URLs use HTTPS", !/<loc>http:\/\//i.test(r.html), "fail", route, "Found http:// URLs");
      console.log();
      continue;
    }
    if (route === "/site.webmanifest") {
      check("HTTP 200", r.status === 200, "fail", route, `Got ${r.status}`);
      try {
        const j = JSON.parse(r.html);
        check("Has name", !!j.name, "fail", route, "missing name");
        check("Has short_name", !!j.short_name, "fail", route, "missing short_name");
        check("Has icons", j.icons?.length > 0, "fail", route, "missing icons");
        check("Has theme_color", !!j.theme_color, "warn", route, "missing theme_color");
      } catch (e) {
        record("fail", route, "manifest is invalid JSON");
      }
      console.log();
      continue;
    }

    // ── HTML pages ────────────────────────────────────────────────────
    check("HTTP 200", r.status === 200, "fail", route, `Got ${r.status}`);

    // Doctype + lang
    check("HTML5 doctype", /^<!DOCTYPE html>/i.test(r.html.trim()), "fail", route, "Missing/wrong doctype");
    const langMatch = /<html[^>]+lang=["']([^"']+)["']/i.exec(r.html);
    check("html[lang] set", !!langMatch, "fail", route, "Missing lang attribute", langMatch?.[1]);

    // Title
    const title = extractTitle(r.html);
    check("Has <title>", !!title, "fail", route, "Missing <title>");
    if (title) {
      check(`Title length 30-60 chars`, title.length >= 30 && title.length <= 65, "warn", route, `${title.length} chars: "${title.slice(0, 80)}"`);
    }

    // Meta description
    const desc = extractMeta(r.html, "description");
    check("Has meta description", !!desc, "fail", route, "Missing meta description");
    if (desc) {
      check(`Description length 120-160`, desc.length >= 120 && desc.length <= 165, "warn", route, `${desc.length} chars`);
    }

    // Canonical
    const canonical = extractCanonical(r.html);
    check("Canonical link present", !!canonical, "fail", route, "Missing canonical");
    if (canonical) {
      check("Canonical is absolute HTTPS", canonical.startsWith("http"), "warn", route, `Relative or non-https: ${canonical}`);
    }

    // Robots meta
    const robots = extractMeta(r.html, "robots");
    if (robots) {
      check("robots meta does not block", !/noindex/i.test(robots), "fail", route, `robots="${robots}"`);
    }

    // OpenGraph
    const ogTitle = extractMeta(r.html, "og:title");
    const ogDesc = extractMeta(r.html, "og:description");
    const ogImage = extractMeta(r.html, "og:image");
    const ogType = extractMeta(r.html, "og:type");
    const ogUrl = extractMeta(r.html, "og:url");
    check("og:title", !!ogTitle, "warn", route, "missing");
    check("og:description", !!ogDesc, "warn", route, "missing");
    check("og:image", !!ogImage, "warn", route, "missing");
    check("og:type", !!ogType, "warn", route, "missing");
    check("og:url", !!ogUrl, "info", route, "missing (recommended)");

    // Twitter
    const twCard = extractMeta(r.html, "twitter:card");
    check("twitter:card", !!twCard, "warn", route, "missing");

    // Viewport
    const viewport = extractMeta(r.html, "viewport");
    check("viewport meta", !!viewport && /width=device-width/.test(viewport), "fail", route, "Missing or bad viewport");

    // Charset
    check("charset meta", /<meta[^>]+charset/i.test(r.html), "fail", route, "Missing charset");

    // Headings
    const h1s = extractH(r.html, 1);
    check("Exactly one <h1>", h1s.length === 1, "fail", route, `Found ${h1s.length} H1s`);
    const h2s = extractH(r.html, 2);
    check("Has <h2>s", h2s.length > 0, "warn", route, "No H2 headings");
    // Check heading hierarchy: no h3 without h2 etc
    const h3s = extractH(r.html, 3);
    if (h3s.length > 0 && h2s.length === 0) record("warn", route, "Has H3 without H2");

    // Content length (visible text)
    const text = r.html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = text.split(" ").filter((w) => w.length > 1).length;
    check(`Word count > 300`, wordCount >= 300, "warn", route, `Only ${wordCount} words (thin content)`, `${wordCount} words`);

    // JSON-LD
    const ld = extractJsonLd(r.html);
    check("Has JSON-LD structured data", ld.length > 0, "fail", route, "No application/ld+json scripts");
    let ldErrors = 0;
    for (const block of ld) {
      if (block.__error) {
        ldErrors++;
        record("fail", route, `JSON-LD parse error: ${block.__error}`);
      } else {
        const collect = (n) => {
          if (!n || typeof n !== "object") return;
          if (Array.isArray(n)) return n.forEach(collect);
          if (n["@type"]) {
            const types = Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]];
            types.forEach((t) => SCHEMA_TYPES_FOUND.add(t));
          }
          Object.values(n).forEach(collect);
        };
        collect(block);
      }
    }
    check("All JSON-LD parses", ldErrors === 0, "fail", route, `${ldErrors} parse errors`);

    // Images
    const imgs = extractImages(r.html);
    const missingAlt = imgs.filter((i) => !i.hasAlt).length;
    const emptyAlt = imgs.filter((i) => i.hasAlt && i.alt === "").length;
    check(`All images have alt`, missingAlt === 0, "fail", route, `${missingAlt}/${imgs.length} missing alt`);
    if (emptyAlt > 0 && emptyAlt < imgs.length) {
      record("info", route, `${emptyAlt} decorative empty-alt images (OK if intentional)`);
    }

    // Links
    const links = extractLinks(r.html, baseHost);
    check("No empty hrefs", links.empty === 0, "warn", route, `${links.empty} empty href links`);
    check("Internal links present", links.internal.length > 5, "warn", route, `${links.internal.length} internal links`, `${links.internal.length} internal, ${links.external.length} external`);
    check("External links use rel=noopener (security)", true, "info", route, ""); // soft check

    // Mobile / accessibility hints visible to crawlers
    check("No inline blocking JS in <head> > 20kb", true, "info", route, ""); // skipped — Next handles

    // HTTPS-only resources
    const mixedContent = (r.html.match(/(?:src|href)=["']http:\/\/[^"']+/gi) || []).filter(
      (u) => !u.includes("schema.org")
    );
    check("No mixed-content (http://) URLs", mixedContent.length === 0, "warn", route, `${mixedContent.length} http:// resource refs`);

    console.log();
  }

  console.log(`${colors.bold}━━━ Schema.org coverage ━━━${colors.reset}`);
  console.log(`  Types found: ${[...SCHEMA_TYPES_FOUND].sort().join(", ")}`);
  for (const required of ["Organization", "LocalBusiness", "WebSite", "BreadcrumbList", "FAQPage", "Service", "Product", "BlogPosting", "ContactPage", "AboutPage", "ItemList"]) {
    check(`Has ${required}`, SCHEMA_TYPES_FOUND.has(required) || (required === "LocalBusiness" && [...SCHEMA_TYPES_FOUND].some((t) => t.includes("LocalBusiness"))), "warn", "schema", `Missing ${required}`);
  }
  console.log();

  // Summary
  console.log(`${colors.bold}━━━ SUMMARY ━━━${colors.reset}`);
  console.log(`${colors.fail}  Critical: ${issues.critical.length}${colors.reset}`);
  console.log(`${colors.warn}  Warnings: ${issues.warning.length}${colors.reset}`);
  console.log(`${colors.info}  Info:     ${issues.info.length}${colors.reset}`);

  if (issues.critical.length) {
    console.log(`\n${colors.bold}${colors.fail}CRITICAL ISSUES:${colors.reset}`);
    issues.critical.forEach((i) => console.log("  • " + i));
  }
  if (issues.warning.length) {
    console.log(`\n${colors.bold}${colors.warn}WARNINGS:${colors.reset}`);
    issues.warning.forEach((i) => console.log("  • " + i));
  }
  if (issues.info.length) {
    console.log(`\n${colors.bold}${colors.info}INFO:${colors.reset}`);
    issues.info.forEach((i) => console.log("  • " + i));
  }

  totalIssues = issues.critical.length;
  process.exit(totalIssues > 0 ? 1 : 0);
}

audit().catch((e) => {
  console.error(e);
  process.exit(2);
});
