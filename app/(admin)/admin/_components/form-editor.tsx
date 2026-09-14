"use client";

import { useCallback, useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FieldGrid, emptyObject } from "./form-fields";
import type { FormDef } from "../_lib/form-schema";

interface FormEditorProps {
  contentKey: string;
  title: string;
  description?: string;
  form: FormDef;
}

type SaveState =
  | { status: "idle" }
  | { status: "saving" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; issues?: unknown };

type Obj = Record<string, unknown>;

function isObj(v: unknown): v is Obj {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/**
 * Schema-driven interactive content editor.
 *
 * Renders proper inputs (text, number, toggle, dropdown, tag lists, repeatable
 * item cards) derived from a FormDef, so non-technical users never touch raw
 * JSON. An "Advanced (JSON)" tab remains available as a fallback. All saves go
 * through PUT /api/admin/content/[key], where server-side Zod validation is
 * authoritative.
 */
export function FormEditor({
  contentKey,
  title,
  description,
  form,
}: FormEditorProps) {
  const [data, setData] = useState<unknown>(null);
  const [original, setOriginal] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [save, setSave] = useState<SaveState>({ status: "idle" });
  const [backend, setBackend] = useState<string>("");
  const [persistOk, setPersistOk] = useState<boolean>(true);
  const [tab, setTab] = useState<string>("form");
  const [jsonText, setJsonText] = useState<string>("");

  const current = JSON.stringify(data, null, 2);
  const dirty = current !== original;

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch(`/api/admin/content/${contentKey}`, {
        cache: "no-store",
      });
      const json = await res.json();
      if (!res.ok) {
        setLoadError(json.error || "Failed to load content");
        return;
      }
      setData(json.data);
      setOriginal(JSON.stringify(json.data, null, 2));
      setJsonText(JSON.stringify(json.data, null, 2));
      setBackend(json.backend);
      setPersistOk(Boolean(json.persistenceConfigured));
    } catch {
      setLoadError("Network error loading content");
    } finally {
      setLoading(false);
    }
  }, [contentKey]);

  useEffect(() => {
    load();
  }, [load]);

  // Keep the JSON tab in sync when switching to it from the form.
  function switchTab(next: string) {
    if (next === "json") setJsonText(JSON.stringify(data, null, 2));
    if (next === "form") {
      // Try to adopt any manual JSON edits back into the form state.
      try {
        setData(JSON.parse(jsonText));
      } catch {
        /* keep form state if JSON is currently invalid */
      }
    }
    setTab(next);
  }

  async function persist(payload: unknown) {
    setSave({ status: "saving" });
    try {
      const res = await fetch(`/api/admin/content/${contentKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setSave({
          status: "error",
          message: json.error || "Save failed",
          issues: json.issues,
        });
        return;
      }
      setOriginal(JSON.stringify(payload, null, 2));
      setSave({
        status: "success",
        message:
          json.backend === "github"
            ? `Committed to GitHub${json.commit ? ` (${String(json.commit).slice(0, 7)})` : ""}. A deploy will follow.`
            : "Saved to content file.",
      });
    } catch {
      setSave({ status: "error", message: "Network error while saving" });
    }
  }

  function onSaveForm() {
    persist(data);
  }

  function onSaveJson() {
    let parsed: unknown;
    try {
      parsed = JSON.parse(jsonText);
    } catch (e) {
      setSave({
        status: "error",
        message: `Invalid JSON: ${e instanceof Error ? e.message : "parse error"}`,
      });
      return;
    }
    setData(parsed);
    persist(parsed);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {description ? (
            <p className="text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {backend ? (
            <Badge variant="secondary">backend: {backend}</Badge>
          ) : null}
          {dirty ? <Badge variant="outline">unsaved changes</Badge> : null}
        </div>
      </div>

      {!persistOk ? (
        <Alert variant="destructive">
          <AlertTitle>Persistence not configured</AlertTitle>
          <AlertDescription>
            Saving is disabled. For production set GITHUB_TOKEN, GITHUB_OWNER and
            GITHUB_REPO. In local dev the filesystem backend is used
            automatically.
          </AlertDescription>
        </Alert>
      ) : null}

      {loadError ? (
        <Alert variant="destructive">
          <AlertDescription>{loadError}</AlertDescription>
        </Alert>
      ) : null}

      {save.status === "success" ? (
        <Alert>
          <AlertTitle>Saved</AlertTitle>
          <AlertDescription>{save.message}</AlertDescription>
        </Alert>
      ) : null}

      {save.status === "error" ? (
        <Alert variant="destructive">
          <AlertTitle>Could not save</AlertTitle>
          <AlertDescription>
            <p>{save.message}</p>
            {save.issues ? (
              <pre className="mt-2 max-h-48 overflow-auto rounded bg-black/10 p-2 text-xs">
                {JSON.stringify(save.issues, null, 2)}
              </pre>
            ) : null}
          </AlertDescription>
        </Alert>
      ) : null}

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : (
        <Tabs value={tab} onValueChange={switchTab}>
          <TabsList>
            <TabsTrigger value="form">Form</TabsTrigger>
            <TabsTrigger value="json">Advanced (JSON)</TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="space-y-4">
            <ShapeEditor form={form} data={data} onChange={setData} />

            <div className="flex gap-2">
              <Button
                onClick={onSaveForm}
                disabled={!dirty || save.status === "saving" || !persistOk}
              >
                {save.status === "saving" ? "Saving…" : "Save changes"}
              </Button>
              <Button variant="outline" onClick={load} disabled={save.status === "saving"}>
                Reload
              </Button>
              {dirty ? (
                <Button
                  variant="ghost"
                  onClick={() => {
                    try {
                      setData(JSON.parse(original));
                    } catch {
                      /* noop */
                    }
                  }}
                  disabled={save.status === "saving"}
                >
                  Discard
                </Button>
              ) : null}
            </div>
          </TabsContent>

          <TabsContent value="json" className="space-y-4">
            <Textarea
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              spellCheck={false}
              className="min-h-[50vh] font-mono text-xs"
            />
            <div className="flex gap-2">
              <Button
                onClick={onSaveJson}
                disabled={save.status === "saving" || !persistOk}
              >
                {save.status === "saving" ? "Saving…" : "Save JSON"}
              </Button>
              <Button variant="outline" onClick={load} disabled={save.status === "saving"}>
                Reload
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shape-specific editors                                                    */
/* -------------------------------------------------------------------------- */

function ShapeEditor({
  form,
  data,
  onChange,
}: {
  form: FormDef;
  data: unknown;
  onChange: (next: unknown) => void;
}) {
  switch (form.shape) {
    case "object":
      return (
        <FieldGrid
          fields={form.fields}
          value={isObj(data) ? data : {}}
          onChange={(next) => onChange(next)}
        />
      );
    case "list":
      return <ListShape form={form} data={data} onChange={onChange} />;
    case "redirects":
      return <ListShape form={form} data={data} onChange={onChange} />;
    case "faqs":
      return <FaqsShape form={form} data={data} onChange={onChange} />;
    default:
      return null;
  }
}

/** Array-of-objects editor (list + redirects) using an accordion. */
function ListShape({
  form,
  data,
  onChange,
}: {
  form: FormDef;
  data: unknown;
  onChange: (next: unknown) => void;
}) {
  const items = Array.isArray(data) ? data : [];
  const noun = form.itemNoun ?? "item";

  function titleFor(item: unknown, index: number): string {
    if (form.itemTitleKey && isObj(item)) {
      const raw = item[form.itemTitleKey];
      if (typeof raw === "string" && raw.trim()) return raw;
    }
    return `${noun.charAt(0).toUpperCase()}${noun.slice(1)} ${index + 1}`;
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        {items.length} {noun}
        {items.length === 1 ? "" : "s"}
      </p>
      <Accordion type="multiple" className="rounded-lg border">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="px-3">
            <div className="flex items-center gap-2">
              <AccordionTrigger className="flex-1">
                {titleFor(item, index)}
              </AccordionTrigger>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(items.filter((_, i) => i !== index));
                }}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
            <AccordionContent>
              <FieldGrid
                fields={form.fields}
                value={isObj(item) ? item : {}}
                onChange={(next) => {
                  const copy = items.slice();
                  copy[index] = next;
                  onChange(copy);
                }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onChange([...items, emptyObject(form.fields)])}
      >
        <Plus className="mr-1 size-4" /> Add {noun}
      </Button>
    </div>
  );
}

/** FAQs: a record of collection-name -> array of {question, answer}. */
function FaqsShape({
  form,
  data,
  onChange,
}: {
  form: FormDef;
  data: unknown;
  onChange: (next: unknown) => void;
}) {
  const record = isObj(data) ? data : {};
  const collections = Object.keys(record);
  const [newCollection, setNewCollection] = useState("");

  function setCollection(name: string, items: unknown[]) {
    onChange({ ...record, [name]: items });
  }

  function renameCollection(oldName: string, nextName: string) {
    if (!nextName.trim() || nextName === oldName || record[nextName]) return;
    const next: Obj = {};
    for (const [k, v] of Object.entries(record)) {
      next[k === oldName ? nextName : k] = v;
    }
    onChange(next);
  }

  function removeCollection(name: string) {
    const next = { ...record };
    delete next[name];
    onChange(next);
  }

  return (
    <div className="space-y-4">
      <Accordion type="multiple" className="rounded-lg border">
        {collections.map((name) => {
          const items = Array.isArray(record[name])
            ? (record[name] as unknown[])
            : [];
          return (
            <AccordionItem key={name} value={name} className="px-3">
              <div className="flex items-center gap-2">
                <AccordionTrigger className="flex-1">
                  {name} ({items.length})
                </AccordionTrigger>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCollection(name);
                  }}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
              <AccordionContent className="space-y-3">
                <div className="space-y-1.5">
                  <Label>Collection name</Label>
                  <Input
                    defaultValue={name}
                    onBlur={(e) => renameCollection(name, e.target.value.trim())}
                  />
                </div>
                {items.map((item, index) => (
                  <div key={index} className="rounded-lg border bg-muted/30 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium">Q{index + 1}</p>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() =>
                          setCollection(
                            name,
                            items.filter((_, i) => i !== index),
                          )
                        }
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                    <FieldGrid
                      fields={form.fields}
                      value={isObj(item) ? item : {}}
                      onChange={(next) => {
                        const copy = items.slice();
                        copy[index] = next;
                        setCollection(name, copy);
                      }}
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCollection(name, [...items, emptyObject(form.fields)])
                  }
                >
                  <Plus className="mr-1 size-4" /> Add {form.itemNoun ?? "item"}
                </Button>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className="flex items-end gap-2">
        <div className="flex-1 space-y-1.5">
          <Label>New collection name</Label>
          <Input
            value={newCollection}
            placeholder="e.g. general, generator"
            onChange={(e) => setNewCollection(e.target.value)}
          />
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            const name = newCollection.trim();
            if (!name || record[name]) return;
            setCollection(name, []);
            setNewCollection("");
          }}
        >
          <Plus className="mr-1 size-4" /> Add collection
        </Button>
      </div>
    </div>
  );
}
