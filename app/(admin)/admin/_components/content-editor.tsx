"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface ContentEditorProps {
  contentKey: string;
  title: string;
  description?: string;
}

type SaveState =
  | { status: "idle" }
  | { status: "saving" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; issues?: unknown };

/**
 * Generic JSON content editor. Loads current content for a key, allows editing
 * as formatted JSON, validates locally (parse) then saves via the admin API
 * (server-side Zod validation is authoritative). Shows clear success/error and
 * prevents accidental navigation loss via a dirty flag.
 */
export function ContentEditor({
  contentKey,
  title,
  description,
}: ContentEditorProps) {
  const [text, setText] = useState<string>("");
  const [original, setOriginal] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [save, setSave] = useState<SaveState>({ status: "idle" });
  const [backend, setBackend] = useState<string>("");
  const [persistOk, setPersistOk] = useState<boolean>(true);

  const dirty = text !== original;

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
      const pretty = JSON.stringify(json.data, null, 2);
      setText(pretty);
      setOriginal(pretty);
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

  async function onSave() {
    setSave({ status: "saving" });
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      setSave({
        status: "error",
        message: `Invalid JSON: ${e instanceof Error ? e.message : "parse error"}`,
      });
      return;
    }

    try {
      const res = await fetch(`/api/admin/content/${contentKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
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
      setOriginal(text);
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

      <Textarea
        value={loading ? "Loading…" : text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
        spellCheck={false}
        className="min-h-[60vh] font-mono text-xs"
      />

      <div className="flex gap-2">
        <Button onClick={onSave} disabled={loading || !dirty || save.status === "saving" || !persistOk}>
          {save.status === "saving" ? "Saving…" : "Save changes"}
        </Button>
        <Button
          variant="outline"
          onClick={load}
          disabled={loading || save.status === "saving"}
        >
          Reload
        </Button>
        {dirty ? (
          <Button
            variant="ghost"
            onClick={() => setText(original)}
            disabled={save.status === "saving"}
          >
            Discard
          </Button>
        ) : null}
      </div>
    </div>
  );
}
