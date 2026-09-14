import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Team Member ${id}`,
    description: `Meet our team member at AL-KABIR Construction Machinery Rentals.`,
    robots: { index: false, follow: true },
    alternates: { canonical: `/team/${id}` },
  };
}

export default async function TeamMemberDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Team Member Details
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Viewing details for team member ID: {id}
        </p>
      </main>
    </div>
  );
}
