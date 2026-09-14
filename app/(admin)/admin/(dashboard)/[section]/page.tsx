import { notFound } from "next/navigation";
import { ContentEditor } from "../../_components/content-editor";
import { FormEditor } from "../../_components/form-editor";
import { getFormDef } from "../../_lib/form-schema";
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

  // Interactive schema-driven form when a form definition exists for this
  // content key; otherwise fall back to the raw JSON editor.
  const form = getFormDef(meta.contentKey);
  if (form) {
    return (
      <FormEditor
        contentKey={meta.contentKey}
        title={meta.label}
        description={meta.description}
        form={form}
      />
    );
  }

  return (
    <ContentEditor
      contentKey={meta.contentKey}
      title={meta.label}
      description={meta.description}
    />
  );
}
