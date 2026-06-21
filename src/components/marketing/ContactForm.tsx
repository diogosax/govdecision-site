"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-plum placeholder:text-slate/60 transition-colors focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // No backend is configured yet — keep the form safe and non-submitting.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-line bg-white p-8 text-center shadow-soft">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral/10 text-coral">
          <Icon name="check" size={24} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-plum">
          Thanks — let&apos;s talk readiness.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate">
          This form isn&apos;t connected to a backend yet. To reach the team
          directly, email us and we&apos;ll set up your readiness conversation.
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
          onClick={() => setSubmitted(false)}
          className="mt-4 block w-full text-xs font-semibold text-slate underline-offset-4 hover:underline"
        >
          Edit your details
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8"
      noValidate
    >
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
          className={fieldClass}
          placeholder="e.g. United States, Brazil, UN & World Bank"
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

      <div className="mt-6">
        <Button type="submit" size="lg" withArrow className="w-full sm:w-auto">
          Request a GovDecision readiness conversation
        </Button>
        <p className="mt-3 text-xs text-slate">
          By reaching out you agree to be contacted about your readiness
          conversation. No spam.
        </p>
      </div>
    </form>
  );
}
