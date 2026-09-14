# AL-KABIR Construction Machinery Rentals

Next.js 16 (App Router, React 19, TypeScript, Tailwind v4) marketing site for a
Dubai construction-equipment rental company, with a **database-free CMS** and a
**centralized, editable SEO system** managed through a secured admin dashboard.

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000. The admin dashboard is at http://localhost:3000/admin
(requires `ADMIN_PASSWORD` and `AUTH_SECRET` in `.env.local`).

Scripts:

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # start production server
npm run lint    # eslint
```

## Content & SEO management

Content lives in Git-tracked JSON under `content/`, loaded and validated
server-side, and edited via `/admin`. There is **no content database** — Git
history is the version history. In development, edits write to `content/*.json`
on disk; in production, edits are committed via the GitHub API and trigger a
redeploy.

Full documentation: **[docs/CMS.md](docs/CMS.md)** — covers the content model,
SEO layer, redirects, images, admin dashboard, GitHub integration, security,
extending content types/SEO fields, and deployment.

Key modules:

- `lib/content/schema.ts` — Zod schemas + `CONTENT_REGISTRY`
- `lib/content/index.ts` — server content loader (validated, cached, defaults fallback)
- `lib/content/defaults.ts` — code defaults (derived from `lib/data/*`)
- `lib/seo/metadata.ts` — `buildMetadata()` (global + per-route + page overrides)
- `lib/seo/schema.ts` — JSON-LD structured-data generators
- `lib/storage/index.ts` — persistence adapter (fs / GitHub)
- `lib/auth/session.ts` + `proxy.ts` — admin auth
- `app/(admin)/admin/**` — admin dashboard
- `app/api/admin/**` — admin API (login/logout, content read/write, seed)

## Environment variables

See `.env.example`. To enable admin + production persistence set at least
`ADMIN_PASSWORD`, `AUTH_SECRET` (≥16 chars), and for production the `GITHUB_*`
variables. Appwrite `NEXT_PUBLIC_*` vars remain for form submissions only.

## Deployment

Deploy on Vercel (or any Next.js host). Set env vars in the provider, use the
GitHub storage backend in production (serverless filesystems are read-only at
runtime). See [docs/CMS.md §11](docs/CMS.md#11-deployment).
