# Content & SEO Management (Database-Free CMS)

This project uses a **database-free CMS**: structured content lives in Git-tracked
JSON files under `content/`, is loaded and validated server-side, and is edited
through a secured admin dashboard at `/admin`. Changes are persisted back to the
repository (via the GitHub API in production, or the local filesystem in dev),
so **Git history is the content version history**.

No PostgreSQL / MySQL / MongoDB / Supabase / Firebase / Prisma / Drizzle is used
for content. (Appwrite remains, but only for **form submissions** — quotes,
contacts, subscribers, bookings — not content.)

---

## 1. Architecture at a glance

```
Admin dashboard (/admin)               Public pages (app/(main))
        │                                       │
   fetch/PUT JSON                         server components
        │                                       │
        ▼                                       ▼
/api/admin/content/[key]  ──validate(Zod)──►  lib/content (loader)
        │                                       │  getContent(key)
   validate + sanitize                          │  React cache()
        │                                       ▼
        ▼                                 content/*.json  ──(missing/invalid)──► defaults
   lib/storage (adapter)                        ▲                                (lib/content/defaults.ts)
        │                                       │
   ┌────┴─────┐                                 │
   fs backend  github backend  ────commit───────┘
  (dev disk)  (GitHub Contents API → deploy)
```

Key properties:

- **Additive & regression-free.** The loader falls back to code-defined defaults
  (`lib/content/defaults.ts`) whenever a `content/*.json` file is missing or
  invalid. Those defaults are derived from the original `lib/data/*` modules, so
  the site renders identically until an admin edits something.
- **Strongly typed & validated.** Every content type has a Zod schema
  (`lib/content/schema.ts`). Reads validate; invalid files fall back safely.
  Writes are validated server-side and rejected (HTTP 422) with precise issues
  if they don't match.
- **Server-side loading.** Public pages read content in server components — no
  client-side content fetching, so pages stay fast and SEO-friendly.
- **Secrets stay server-side.** Auth secret, admin password and GitHub token are
  never referenced from client bundles.

---

## 2. Content model

Source of truth for keys, schemas and file paths: the `CONTENT_REGISTRY` in
`lib/content/schema.ts`.

| Key            | File                       | Shape        | Notes |
|----------------|----------------------------|--------------|-------|
| `settings`     | `content/settings.json`    | object       | Global business info (NAP), contact, address, geo, social, hours |
| `navigation`   | `content/navigation.json`  | object       | Primary menu links + header CTA |
| `footer`       | `content/footer.json`      | object       | Footer columns/links, copyright |
| `seo`          | `content/seo.json`         | object       | Global SEO defaults + per-route overrides + robots/sitemap config |
| `redirects`    | `content/redirects.json`   | array        | 301/302 redirect rules |
| `faqs`         | `content/faqs.json`        | record       | FAQ collections keyed by name (general, generator, …) |
| `services`     | `content/services.json`    | array        | Service offerings + pricing |
| `locations`    | `content/locations.json`   | array        | Service-area location pages |
| `machinery`    | `content/machinery.json`   | array        | Rental inventory + specs |
| `testimonials` | `content/testimonials.json`| array        | Customer testimonials |
| `blog`         | `content/blog.json`        | array        | Blog posts/articles |
| `pages`        | `content/pages.json`       | array        | Custom slug-addressable static pages |

Content-addressable types use **slugs** (`locations.slug`, `machinery.slug`,
`blog.slug`, `pages.slug`) or ids (`services.id`). Most types support a
`status: "draft" | "published"` field (defaults to `published`); draft entries
are excluded from the sitemap.

### Reading content in a page

```ts
import { getFaqs, getServices, getMachineryBySlug } from "@/lib/content";

export default async function Page() {
  const services = await getServices();      // validated + cached
  // ...
}
```

Available getters: `getSiteSettings`, `getNavigation`, `getFooter`,
`getSeoSettings`, `getRedirects`, `getFaqs`, `getServices`, `getLocations`,
`getMachinery`, `getTestimonials`, `getBlogPosts`, `getPages`, plus lookups
`getServiceById`, `getLocationBySlug`, `getMachineryBySlug`,
`getBlogPostBySlug`, `getPageBySlug`.

---

## 3. SEO system

Centralized in `content/seo.json` (schema `seoSettingsSchema`) + the builder
`lib/seo/metadata.ts`.

`buildMetadata()` merges, in priority order (later wins):

1. Global defaults (`seo.defaultTitle`, `defaultDescription`, `defaultKeywords`, `defaultOgImage`, `titleTemplate`, `twitterHandle`)
2. Per-route override — `seo.routes["/about"]`
3. Explicit page-level override passed by the caller

Usage in a page:

```ts
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return buildMetadata({
    pathname: "/about",
    fallbackTitle: "About Us",
    fallbackDescription: "…",
  });
}
```

Produces title (with template), description, canonical, robots
(index/follow, honoring `noindex`/`nofollow`), Open Graph and Twitter cards.

**Structured data (JSON-LD)** generators live in `lib/seo/schema.ts`
(Organization, LocalBusiness, WebSite, Breadcrumb, FAQPage, Service, Product,
Article, ContactPage, AboutPage, ItemList) and render via
`components/seo/json-ld.tsx`. These are generated from typed inputs (never raw
strings), so the JSON-LD is always valid.

**Sitemap** (`app/sitemap.ts`) and **robots** (`app/robots.ts`) are generated
from the content loader: only published entries are included, `seo.sitemap.exclude`
drops pathnames, and `seo.robots.disallow` / `allowAiCrawlers` drive robots.txt.

---

## 4. Redirects

Managed in `content/redirects.json` (array of `{ source, destination, permanent }`).
`next.config.ts` reads this file at config time and returns it from `redirects()`,
so redirects are applied at the edge with no per-request cost. Editing redirects
in the admin and deploying applies them on the next build.

```json
[{ "source": "/old-url", "destination": "/new-url", "permanent": true }]
```

---

## 5. Images

Images are **URLs + structured metadata**, never binaries in JSON. The
`imageSchema` stores `url`, `alt`, optional `width`/`height` and focal point.
Existing content stores plain URL strings (external CDNs / `next/image` with
open `remotePatterns`), which continue to work. Add new images by hosting the
binary externally (or in `public/`) and referencing its URL in content — do not
paste base64 into content files.

---

## 6. Admin dashboard

Located at `/admin` (route group `app/(admin)`), protected by `proxy.ts`.

- `/admin/login` — credential login (sets an httpOnly signed session cookie)
- `/admin` — overview: content counts, storage/persistence status, and an
  **Initialize content files** action (materializes `content/*.json` from
  defaults; non-destructive) plus **Reset all to defaults**.
- `/admin/<section>` — edit a content type via a validated editor. Every editor
  shows the active backend, an unsaved-changes indicator, clear success/error
  states (including server-side Zod issues), and Reload/Discard to prevent
  accidental data loss.

The dashboard reuses the existing shadcn/ui component library and design tokens.

---

## 7. Persistence & GitHub integration

Adapter: `lib/storage/index.ts`. Backend is chosen by `CONTENT_STORAGE`
(`fs` | `github`), or auto-detected (`github` if `GITHUB_TOKEN` is set, else `fs`).

- **fs backend** (dev): writes `content/*.json` to disk.
- **github backend** (prod): commits `content/*.json` through the GitHub
  Contents API (`PUT /repos/{owner}/{repo}/contents/{path}`), fetching the
  current SHA first to update in place. The commit triggers your normal
  deployment pipeline (e.g. Vercel), which redeploys with the new content.

Security in the adapter:

- Writable paths are **allow-listed** — callers pass a `ContentKey`, never a raw
  path, and the path is resolved from `CONTENT_REGISTRY`. Path traversal is
  impossible.
- GitHub credentials are read from server env only and never returned to clients.
- Content is validated + HTML-sanitized before it ever reaches the adapter.

### Configuring GitHub

1. Create a fine-grained Personal Access Token with **Contents: Read and write**
   on the target repository.
2. Set `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` (and optionally
   `GITHUB_BRANCH`, `GITHUB_AUTHOR_NAME`, `GITHUB_AUTHOR_EMAIL`) in your host.
3. Deploy. Admin saves now commit to the repo and trigger a redeploy.

---

## 8. Security summary

- All `/admin/**` (except login) and `/api/admin/**` (except login) require a
  valid signed session cookie, enforced in `proxy.ts`.
- Session token is a stateless HMAC-SHA256 over an expiry, verified at the edge.
  No secret is embedded in the token.
- Login uses constant-time credential comparison; secrets come from env only.
- Every write is Zod-validated (422 on failure) and rich-text fields are
  HTML-sanitized (`lib/content/sanitize.ts`, strict allow-list) to prevent
  stored XSS.
- Admin pages are `noindex` and disallowed in robots.txt.

---

## 9. Extending the system

### Add a new content type

1. Define a Zod schema in `lib/content/schema.ts` and add it to `CONTENT_REGISTRY`
   with a `file` name.
2. Add a default value in `lib/content/defaults.ts`.
3. (Optional) add a typed getter in `lib/content/index.ts`.
4. Add a section entry in `app/(admin)/admin/_lib/sections.ts` so it appears in
   the dashboard.
5. Consume it in a page via `getContent("yourKey")`.

The API route (`/api/admin/content/[key]`) and storage allow-list pick up the
new key automatically from the registry.

### Add an SEO field

1. Add the field to `seoOverrideSchema` (per-page) and/or `seoSettingsSchema`
   (global) in `lib/content/schema.ts`.
2. Map it into the returned `Metadata` in `lib/seo/metadata.ts`.

### Add a rich-text field to sanitize

Extend `sanitizeByKey()` in `lib/content/validate.ts` to sanitize the new field
on write.

---

## 10. Environment variables

See `.env.example`. Required to enable admin + production persistence:

| Variable | Purpose |
|----------|---------|
| `ADMIN_PASSWORD` | Login password (required to enable admin) |
| `AUTH_SECRET` | HMAC session-signing secret (≥16 chars, required) |
| `ADMIN_USERNAME` | Login username (optional, default `admin`) |
| `AUTH_TTL_HOURS` | Session lifetime (optional, default 12) |
| `CONTENT_STORAGE` | `fs` or `github` (optional; auto-detected) |
| `GITHUB_TOKEN` | PAT with Contents R/W (required for github backend) |
| `GITHUB_OWNER` / `GITHUB_REPO` | Target repo (required for github backend) |
| `GITHUB_BRANCH` | Commit branch (optional, default `main`) |
| `GITHUB_AUTHOR_NAME` / `GITHUB_AUTHOR_EMAIL` | Commit author (optional) |

---

## 11. Deployment

1. Set the env vars above in your hosting provider (e.g. Vercel project settings).
2. Ensure `CONTENT_STORAGE=github` (or leave unset with `GITHUB_TOKEN` present) —
   serverless filesystems are read-only at runtime, so the fs backend cannot
   persist there.
3. Deploy as usual (`next build`). Admin edits commit to Git and trigger the
   next deploy automatically; the content ships with that build.
