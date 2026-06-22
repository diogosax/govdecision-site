/**
 * Localization configuration for GovDecision.
 *
 * Strategy (SITE-008):
 *   - en-US is the default locale and lives at the site root (no prefix):  /
 *   - pt-BR and es are served under a locale segment:                      /pt-BR, /es
 *
 * This keeps the approved English site exactly where it is while layering
 * Portuguese (Brazil) and Spanish (neutral LATAM) on top — no automatic
 * browser-language redirects, no heavy i18n dependency.
 */

export const locales = ["en-US", "pt-BR", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en-US";

/** Locales that are addressed through the `[locale]` URL segment. */
export const prefixedLocales = locales.filter(
  (l): l is Exclude<Locale, "en-US"> => l !== defaultLocale,
);

/** Full display names shown inside the language selector. */
export const localeNames: Record<Locale, string> = {
  "en-US": "English",
  "pt-BR": "Português",
  es: "Español",
};

/** Short labels (the compact pill in the header). */
export const localeShort: Record<Locale, string> = {
  "en-US": "EN",
  "pt-BR": "PT",
  es: "ES",
};

/** Value used for the HTML `lang` attribute / `hreflang`. */
export const localeHtmlLang: Record<Locale, string> = {
  "en-US": "en-US",
  "pt-BR": "pt-BR",
  es: "es",
};

/**
 * Open Graph `og:locale` codes (underscore form). Spanish uses the LATAM
 * regional code `es_419` to match the neutral-LATAM copy the site ships.
 */
export const ogLocale: Record<Locale, string> = {
  "en-US": "en_US",
  "pt-BR": "pt_BR",
  es: "es_419",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Only the non-default locales are valid inside the `[locale]` segment. */
export function isPrefixedLocale(
  value: string,
): value is Exclude<Locale, "en-US"> {
  return value === "pt-BR" || value === "es";
}
