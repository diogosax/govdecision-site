"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { trackEvent, pageFromPathname } from "@/lib/analytics/events";
import { site } from "@/data/site";

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-plum placeholder:text-slate/60 transition-colors focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate";

type Status = "idle" | "submitting" | "success" | "error";

/** Localized, user-facing form copy. */
export type ContactFormCopy = {
  name: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  country: string;
  countryPlaceholder: string;
  markets: string;
  marketsPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  consent: string;
  successTitle: string;
  successBody: string;
  sendAnother: string;
  errorMessage: string;
};

/**
 * Context carried over from a Market Access destination page (or UTM tagging).
 * These travel as hidden fields so the server can classify and route the lead.
 * The API contract (`POST /api/contact`) is unchanged and never localized.
 */
export type ContactFormProps = {
  locale: Locale;
  t: ContactFormCopy;
  defaultMarkets?: string;
  path?: string;
  type?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export function ContactForm({
  locale,
  t,
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

  // Analytics funnel: fire `contact_form_started` once, on first interaction.
  const startedRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    mountedAt.current = Date.now();
    sourcePage.current = document.referrer || "";
  }, []);

  /**
   * Funnel context — only the contextual `path`/`type` and locale/page. Never
   * any field the user types (name, email, company, country, markets, message).
   */
  const funnelProps = () => ({
    locale,
    page: pageFromPathname(pathname),
    path,
    type,
  });

  function handleFirstInteraction() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("contact_form_started", funnelProps());
  }

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
    // Fire on submit attempt, before the API responds. No field content sent.
    trackEvent("contact_form_submitted", funnelProps());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: unknown = await res.json().catch(() => null);
      const result = data as {
        ok?: boolean;
        message?: string;
        error?: string;
        leadType?: string;
      } | null;

      if (res.ok && result?.ok) {
        // The API returns an EN success message. Keep it for EN; localized
        // surfaces use their own copy so nothing leaks English.
        const serverMessage =
          locale === "en-US" && typeof result.message === "string"
            ? result.message
            : "";
        setFeedback(serverMessage || t.successBody);
        setStatus("success");
        // `leadType` is an internal enum (e.g. LOCAL_READINESS) — not PII.
        trackEvent("contact_form_succeeded", {
          ...funnelProps(),
          leadType: result.leadType,
        });
      } else {
        const serverError =
          locale === "en-US" && typeof result?.error === "string"
            ? result.error
            : "";
        setFeedback(serverError || t.errorMessage);
        setStatus("error");
        // Map HTTP status to an allowlisted reason — never raw server text.
        const reason =
          res.status === 400
            ? "validation"
            : res.status === 502
              ? "delivery"
              : "unknown";
        trackEvent("contact_form_failed", { ...funnelProps(), reason });
      }
    } catch {
      setFeedback(t.errorMessage);
      setStatus("error");
      trackEvent("contact_form_failed", { ...funnelProps(), reason: "network" });
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
        <h3 className="mt-5 text-xl font-bold text-plum">{t.successTitle}</h3>
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
          {t.sendAnother}
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFirstInteraction}
      onChange={handleFirstInteraction}
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
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder={t.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {t.companyLabel}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={fieldClass}
            placeholder={t.companyPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder={t.emailPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            {t.country}
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            autoComplete="country-name"
            className={fieldClass}
            placeholder={t.countryPlaceholder}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="markets" className={labelClass}>
          {t.markets}
        </label>
        <input
          id="markets"
          name="markets"
          type="text"
          required
          className={fieldClass}
          placeholder={t.marketsPlaceholder}
          defaultValue={defaultMarkets}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder={t.messagePlaceholder}
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
          {submitting ? t.submitting : t.submit}
        </Button>
        <p className="mt-3 text-xs text-slate">{t.consent}</p>
      </div>
    </form>
  );
}
