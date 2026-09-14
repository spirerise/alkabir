"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function SeedButton() {
  const [state, setState] = useState<
    | { s: "idle" }
    | { s: "loading" }
    | { s: "done"; msg: string }
    | { s: "error"; msg: string }
  >({ s: "idle" });

  async function seed(force: boolean) {
    setState({ s: "loading" });
    try {
      const res = await fetch("/api/admin/seed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ force }),
      });
      const json = await res.json();
      if (!res.ok) {
        setState({ s: "error", msg: json.error || "Seed failed" });
        return;
      }
      setState({
        s: "done",
        msg: `Written: ${json.written.length}, skipped: ${json.skipped.length}${
          json.errors?.length ? `, errors: ${json.errors.length}` : ""
        }`,
      });
    } catch {
      setState({ s: "error", msg: "Network error" });
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => seed(false)} disabled={state.s === "loading"}>
          {state.s === "loading" ? "Working…" : "Initialize content files"}
        </Button>
        <Button
          variant="outline"
          onClick={() => seed(true)}
          disabled={state.s === "loading"}
        >
          Reset all to defaults
        </Button>
      </div>
      {state.s === "done" ? (
        <Alert>
          <AlertTitle>Done</AlertTitle>
          <AlertDescription>{state.msg}</AlertDescription>
        </Alert>
      ) : null}
      {state.s === "error" ? (
        <Alert variant="destructive">
          <AlertDescription>{state.msg}</AlertDescription>
        </Alert>
      ) : null}
    </div>
  );
}
