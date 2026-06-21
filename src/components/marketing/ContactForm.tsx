"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-plum placeholder:text-slate/60 transition-colors focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate";

const FRIENDLY_ERROR =
  "We could not send your request right now. Please try again or email contact@govdecision.com.";

const FALLBACK_SUCCESS =
  "Thanks — your request was received. We will follow up shortly.";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Context carried over from a Market Access destination page (or UTM tagging).
 * These travel as hidden fields so the server can classify and route the lead.
 */
export type ContactFormProps = {
  defaultMarkets?: string;
  path?: string;
  type?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export function ContactForm({
  defaultMarkets,
  path,
  type,
  utmSource,
  utmMedium,
  utmCampaign,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  // Anti-spam timing + lead-source context, captured on the client only.
  const mountedAt = useRef(0);
  const sourcePage = useRef("");

  useEffect(() => {
    mountedAt.current = Date.now();
    sourcePage.current = document.referrer || "";
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    // Read everything synchronously before any await (the event is reused).
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (key: string) => (fd.get(key) ?? "").toString();

    const payload = {
      name: get("name"),
      company: get("company"),
      workEmail: get("email"),
      country: get("country"),
      targetMarkets: get("markets"),
      message: get("message"),
      path: get("path") || undefined,
      type: get("type") || undefined,
      sourcePage: sourcePage.current || undefined,
      utmSource: get("utmSource") || undefined,
      utmMedium: get("utmMedium") || undefined,
      utmCampaign: get("utmCampaign") || undefined,
      honeypot: get("website"),
      elapsedMs: mountedAt.current ? Date.now() - mountedAt.current : undefined,
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: unknown = await res.json().catch(() => null);
      const result = data as { ok?: boolean; message?: string; error?: string } | null;

      if (res.ok && result?.ok) {
        setFeedback(
          typeof result.message === "string" && result.message
            ? result.message
            : FALLBACK_SUCCESS,
        );
        setStatus("success");
      } else {
        // The API only ever returns user-safe error copy.
        setFeedback(
          typeof result?.error === "string" && result.error
            ? result.error
            : FRIENDLY_ERROR,
        );
        setStatus("error");
      }
    } catch {
      setFeedback(FRIENDLY_ERROR);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl border border-line bg-white p-8 text-center shadow-soft"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral/10 text-coral">
          <Icon name="check" size={24} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-plum">Request received.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate">
          {feedback}
        </p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-plum px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-plum-700"
        >
          <Icon name="arrow-right" size={16} />
          {site.contactEmail}
        </a>
        <button
          type="button"
          onClick={() => {
            setFeedback("");
            setStatus("idle");
          }}
          className="mt-4 block w-full text-xs font-semibold text-slate underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8"
      noValidate
    >
      {/* Context carried from destination pages / campaigns. */}
      <input type="hidden" name="path" defaultValue={path ?? ""} />
      <input type="hidden" name="type" defaultValue={type ?? ""} />
      <input type="hidden" name="utmSource" defaultValue={utmSource ?? ""} />
      <input type="hidden" name="utmMedium" defaultValue={utmMedium ?? ""} />
      <input type="hidden" name="utmCampaign" defaultValue={utmCampaign ?? ""} />

      {/* Honeypot: hidden from real users, tempting for bots. Must stay empty. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={fieldClass}
            placeholder="Company name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            autoComplete="country-name"
            className={fieldClass}
            placeholder="Where you are based"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="markets" className={labelClass}>
          Target markets
        </label>
        <input
          id="markets"
          name="markets"
          type="text"
          required
          className={fieldClass}
          placeholder="e.g. United States, Brazil, UN & World Bank"
          defaultValue={defaultMarkets}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="What do you sell, and where do you want to compete?"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-coral/40 bg-coral/5 px-4 py-3 text-sm font-medium text-coral-600"
        >
          {feedback}
        </p>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          size="lg"
          withArrow
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? "Sending…" : "Request a GovDecision readiness conversation"}
        </Button>
        <p className="mt-3 text-xs text-slate">
          By reaching out you agree to be contacted about your readiness
          conversation. No spam.
        </p>
      </div>
    </form>
  );
}
