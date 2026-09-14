import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getServices,
  getLocations,
  getMachinery,
  getBlogPosts,
  getTestimonials,
  getPages,
} from "@/lib/content";
import { getBackend, isPersistenceConfigured } from "@/lib/storage";
import { SeedButton } from "./_seed-button";

export default async function AdminOverview() {
  const [services, locations, machinery, blog, testimonials, pages] =
    await Promise.all([
      getServices(),
      getLocations(),
      getMachinery(),
      getBlogPosts(),
      getTestimonials(),
      getPages(),
    ]);

  const backend = getBackend();
  const persistOk = isPersistenceConfigured();

  const stats = [
    { label: "Rental Inventory", count: machinery.length, href: "/admin/machinery" },
    { label: "Locations", count: locations.length, href: "/admin/locations" },
    { label: "Services", count: services.length, href: "/admin/services" },
    { label: "Blog Posts", count: blog.length, href: "/admin/blog" },
    { label: "Testimonials", count: testimonials.length, href: "/admin/testimonials" },
    { label: "Custom Pages", count: pages.length, href: "/admin/pages" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Manage content & SEO. Changes persist without a database.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">storage: {backend}</Badge>
          <Badge variant={persistOk ? "default" : "destructive"}>
            {persistOk ? "persistence ready" : "persistence not configured"}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <Link key={s.label} href={s.href}>
            <Card className="transition-colors hover:border-amber-400">
              <CardHeader className="pb-2">
                <CardDescription>{s.label}</CardDescription>
                <CardTitle className="text-3xl">{s.count}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Content files</CardTitle>
          <CardDescription>
            Initialize <code>content/*.json</code> from the current code
            defaults. This is non-destructive by default (only writes files that
            don&apos;t exist). &quot;Reset&quot; overwrites all files with
            defaults.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SeedButton />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How persistence works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <strong>Local development</strong> uses the filesystem backend —
            edits write directly to <code>content/*.json</code>.
          </p>
          <p>
            <strong>Production</strong> uses the GitHub backend — edits are
            committed to the repository via the GitHub API, which triggers your
            normal deployment. Git history is your content version history.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
