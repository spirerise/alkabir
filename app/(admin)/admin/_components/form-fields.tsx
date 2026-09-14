"use client";

import { useId, useState } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FieldDef } from "../_lib/form-schema";

/* -------------------------------------------------------------------------- */
/*  Small helpers                                                             */
/* -------------------------------------------------------------------------- */

type Obj = Record<string, unknown>;

function isObj(v: unknown): v is Obj {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Build an empty value for a field, used when adding list items. */
export function emptyValueFor(field: FieldDef): unknown {
  switch (field.kind) {
    case "number":
      return 0;
    case "boolean":
      return false;
    case "tags":
      return [];
    case "list":
      return [];
    case "select":
      return field.options?.[0]?.value ?? "";
    case "group":
      return emptyObject(field.fields ?? []);
    default:
      return "";
  }
}

export function emptyObject(fields: FieldDef[]): Obj {
  const obj: Obj = {};
  for (const f of fields) obj[f.name] = emptyValueFor(f);
  return obj;
}

/* -------------------------------------------------------------------------- */
/*  Tags (string[]) editor                                                    */
/* -------------------------------------------------------------------------- */

function TagsInput({
  value,
  onChange,
  placeholder,
}: {
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  const [draft, setDraft] = useState("");

  function add() {
    const v = draft.trim();
    if (!v) return;
    if (!value.includes(v)) onChange([...value, v]);
    setDraft("");
  }

  return (
    <div className="space-y-2">
      {value.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {value.map((tag, i) => (
            <Badge key={`${tag}-${i}`} variant="secondary" className="gap-1">
              {tag}
              <button
                type="button"
                aria-label={`Remove ${tag}`}
                onClick={() => onChange(value.filter((_, idx) => idx !== i))}
                className="ml-0.5 rounded-full hover:text-destructive"
              >
                <X className="size-3" />
              </button>
            </Badge>
          ))}
        </div>
      ) : null}
      <div className="flex gap-2">
        <Input
          value={draft}
          placeholder={placeholder ?? "Type and press Enter"}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              add();
            }
          }}
        />
        <Button type="button" variant="outline" size="sm" onClick={add}>
          Add
        </Button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Repeatable list of objects                                                */
/* -------------------------------------------------------------------------- */

function ListInput({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown[];
  onChange: (next: unknown[]) => void;
}) {
  const items = Array.isArray(value) ? value : [];
  const subFields = field.fields ?? [];
  const noun = field.itemNoun ?? "item";

  function updateItem(index: number, next: unknown) {
    const copy = items.slice();
    copy[index] = next;
    onChange(copy);
  }

  function titleFor(item: unknown, index: number): string {
    if (field.itemTitleKey && isObj(item)) {
      const raw = item[field.itemTitleKey];
      if (typeof raw === "string" && raw.trim()) return raw;
    }
    return `${noun.charAt(0).toUpperCase()}${noun.slice(1)} ${index + 1}`;
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border bg-muted/30 p-3"
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-sm font-medium">{titleFor(item, index)}</p>
            <div className="flex gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={index === 0}
                onClick={() => {
                  const copy = items.slice();
                  [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
                  onChange(copy);
                }}
              >
                ↑
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={index === items.length - 1}
                onClick={() => {
                  const copy = items.slice();
                  [copy[index + 1], copy[index]] = [copy[index], copy[index + 1]];
                  onChange(copy);
                }}
              >
                ↓
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={() => onChange(items.filter((_, i) => i !== index))}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          </div>
          <FieldGrid
            fields={subFields}
            value={isObj(item) ? item : {}}
            onChange={(next) => updateItem(index, next)}
          />
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onChange([...items, emptyObject(subFields)])}
      >
        <Plus className="mr-1 size-4" /> Add {noun}
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Single field                                                              */
/* -------------------------------------------------------------------------- */

export function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (next: unknown) => void;
}) {
  const id = useId();

  switch (field.kind) {
    case "boolean":
      return (
        <div className="flex items-center justify-between rounded-md border px-3 py-2">
          <div>
            <Label htmlFor={id}>{field.label}</Label>
            {field.help ? (
              <p className="text-xs text-muted-foreground">{field.help}</p>
            ) : null}
          </div>
          <Switch
            id={id}
            checked={Boolean(value)}
            onCheckedChange={(c) => onChange(c)}
          />
        </div>
      );

    case "select":
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{field.label}</Label>
          <Select
            value={typeof value === "string" ? value : ""}
            onValueChange={(v) => onChange(v)}
          >
            <SelectTrigger id={id} className="w-full">
              <SelectValue placeholder="Select…" />
            </SelectTrigger>
            <SelectContent>
              {(field.options ?? []).map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {field.help ? (
            <p className="text-xs text-muted-foreground">{field.help}</p>
          ) : null}
        </div>
      );

    case "number":
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{field.label}</Label>
          <Input
            id={id}
            type="number"
            value={
              typeof value === "number"
                ? value
                : typeof value === "string"
                  ? value
                  : ""
            }
            placeholder={field.placeholder}
            onChange={(e) => {
              const raw = e.target.value;
              onChange(raw === "" ? 0 : Number(raw));
            }}
          />
          {field.help ? (
            <p className="text-xs text-muted-foreground">{field.help}</p>
          ) : null}
        </div>
      );

    case "textarea":
    case "richtext":
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{field.label}</Label>
          <Textarea
            id={id}
            value={typeof value === "string" ? value : ""}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={field.kind === "richtext" ? "min-h-40 font-mono text-xs" : "min-h-24"}
          />
          {field.help ? (
            <p className="text-xs text-muted-foreground">{field.help}</p>
          ) : field.kind === "richtext" ? (
            <p className="text-xs text-muted-foreground">
              HTML is allowed and sanitized automatically on save.
            </p>
          ) : null}
        </div>
      );

    case "image":
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{field.label}</Label>
          <Input
            id={id}
            value={typeof value === "string" ? value : ""}
            placeholder={field.placeholder ?? "https://… or /images/…"}
            onChange={(e) => onChange(e.target.value)}
          />
          {typeof value === "string" && value.trim() ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value}
              alt=""
              className="mt-1 h-20 w-auto rounded border object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          ) : null}
          {field.help ? (
            <p className="text-xs text-muted-foreground">{field.help}</p>
          ) : null}
        </div>
      );

    case "tags":
      return (
        <div className="space-y-1.5">
          <Label>{field.label}</Label>
          <TagsInput
            value={Array.isArray(value) ? (value as string[]) : []}
            onChange={(next) => onChange(next)}
            placeholder={field.placeholder}
          />
          {field.help ? (
            <p className="text-xs text-muted-foreground">{field.help}</p>
          ) : null}
        </div>
      );

    case "group":
      return (
        <fieldset className="space-y-3 rounded-lg border p-3">
          <legend className="px-1 text-sm font-medium">{field.label}</legend>
          {field.help ? (
            <p className="text-xs text-muted-foreground">{field.help}</p>
          ) : null}
          <FieldGrid
            fields={field.fields ?? []}
            value={isObj(value) ? value : {}}
            onChange={(next) => onChange(next)}
          />
        </fieldset>
      );

    case "list":
      return (
        <div className="space-y-2">
          <Label>{field.label}</Label>
          {field.help ? (
            <p className="text-xs text-muted-foreground">{field.help}</p>
          ) : null}
          <ListInput
            field={field}
            value={Array.isArray(value) ? value : []}
            onChange={(next) => onChange(next)}
          />
        </div>
      );

    case "text":
    default:
      return (
        <div className="space-y-1.5">
          <Label htmlFor={id}>{field.label}</Label>
          <Input
            id={id}
            value={typeof value === "string" ? value : ""}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
          {field.help ? (
            <p className="text-xs text-muted-foreground">{field.help}</p>
          ) : null}
        </div>
      );
  }
}

/* -------------------------------------------------------------------------- */
/*  Grid of fields for an object                                              */
/* -------------------------------------------------------------------------- */

export function FieldGrid({
  fields,
  value,
  onChange,
}: {
  fields: FieldDef[];
  value: Record<string, unknown>;
  onChange: (next: Record<string, unknown>) => void;
}) {
  function setField(name: string, next: unknown) {
    onChange({ ...value, [name]: next });
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {fields.map((field) => {
        const spanFull =
          field.wide ||
          field.kind === "list" ||
          field.kind === "group" ||
          field.kind === "tags";
        return (
          <div
            key={field.name}
            className={spanFull ? "sm:col-span-2" : undefined}
          >
            <FieldRenderer
              field={field}
              value={value[field.name]}
              onChange={(next) => setField(field.name, next)}
            />
          </div>
        );
      })}
    </div>
  );
}
