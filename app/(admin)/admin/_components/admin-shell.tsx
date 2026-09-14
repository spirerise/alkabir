"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ADMIN_SECTIONS } from "../_lib/sections";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function logout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <aside className="hidden w-64 shrink-0 border-r bg-white p-4 md:block dark:bg-zinc-900">
        <div className="mb-6 px-2">
          <p className="text-lg font-bold">AL-KABIR</p>
          <p className="text-xs text-muted-foreground">Content & SEO Admin</p>
        </div>
        <nav className="space-y-1">
          {ADMIN_SECTIONS.map((s) => {
            const href = s.segment ? `/admin/${s.segment}` : "/admin";
            const active =
              href === "/admin" ? pathname === "/admin" : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-amber-100 font-medium text-amber-900 dark:bg-amber-900/30 dark:text-amber-200"
                    : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
                )}
              >
                {s.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 border-t pt-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={logout}
            disabled={loggingOut}
          >
            {loggingOut ? "Signing out…" : "Sign out"}
          </Button>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden">
        <div className="border-b bg-white px-4 py-3 md:hidden dark:bg-zinc-900">
          <details>
            <summary className="cursor-pointer text-sm font-medium">Menu</summary>
            <nav className="mt-2 space-y-1">
              {ADMIN_SECTIONS.map((s) => {
                const href = s.segment ? `/admin/${s.segment}` : "/admin";
                return (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {s.label}
                  </Link>
                );
              })}
              <button
                onClick={logout}
                className="block w-full rounded-md px-3 py-2 text-left text-sm text-red-600"
              >
                Sign out
              </button>
            </nav>
          </details>
        </div>
        <div className="mx-auto max-w-5xl p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
