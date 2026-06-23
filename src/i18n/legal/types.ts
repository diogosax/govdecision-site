/**
 * Localization contract for the public legal / compliance pages (SITE-018):
 * Terms of Use, Privacy Notice, and Compliance. Kept in a dedicated module —
 * like `i18n/partner-capital` and `i18n/briefs` — so the long-form copy stays
 * isolated from the core dictionaries. Every locale file satisfies
 * `LegalChrome`, so a missing or misspelled key is a compile-time error.
 *
 * Content-safety: this copy is a foundational public website baseline, NOT a
 * final attorney-reviewed agreement. It must never claim government affiliation,
 * guarantee outcomes (eligibility, qualification, registration, awards,
 * financing, partner placement, market access, contracts), or claim full
 * compliance with a specific law/regime (GDPR/CCPA/LGPD). Use cautious framing
 * ("we aim to", "we may", "where applicable", "depending on the context").
 * Structural tokens (icons, anchors) live in the view, not here.
 */

export type TitleDesc = { title: string; description: string };

/** One readable section of a legal/compliance page. */
export interface LegalSection {
  /** Section heading (rendered as an h2). */
  heading: string;
  /** One or more short paragraphs. */
  body: string[];
  /** Optional bullet list rendered under the paragraphs. */
  bullets?: string[];
}

/** A single legal/compliance document (Terms, Privacy, or Compliance). */
export interface LegalDoc {
  meta: TitleDesc;
  /** Short label used in the breadcrumb + JSON-LD. */
  breadcrumbName: string;
  /** Small uppercase eyebrow above the title. */
  eyebrow: string;
  /** Page H1, e.g. "Terms of Use". */
  title: string;
  /** Intro paragraph under the title. */
  lead: string;
  /** The numbered, readable sections. */
  sections: LegalSection[];
  /** Closing contact / reporting block. */
  contact: { heading: string; body: string };
}

export interface LegalChrome {
  /** "Last updated: …" label shown near each page title. */
  updated: string;
  /** Shared general-information note shown near the top of every page. */
  note: string;
  /** Contact-block field labels (shared across all three documents). */
  contactEmailLabel: string;
  contactWhatsappLabel: string;
  terms: LegalDoc;
  privacy: LegalDoc;
  compliance: LegalDoc;
}

/** The three documents this module covers. */
export type LegalKind = "terms" | "privacy" | "compliance";
