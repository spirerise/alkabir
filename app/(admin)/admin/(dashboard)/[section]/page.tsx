import { notFound } from "next/navigation";
import { ContentEditor } from "../../_components/content-editor";
import { ADMIN_SECTIONS } from "../../_lib/sections";

export function generateStaticParams() {
  return ADMIN_SECTIONS.filter((s) => s.segment).map((s) => ({
    section: s.segment,
  }));
}

export default async function AdminSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const meta = ADMIN_SECTIONS.find((s) => s.segment === section);

  if (!meta || !meta.contentKey) {
    notFound();
  }

  return (
    <ContentEditor
      contentKey={meta.contentKey}
      title={meta.label}
      description={meta.description}
    />
  );
}
