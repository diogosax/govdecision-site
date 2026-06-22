/**
 * Tiny client-side store for whether the visitor has already made a language
 * choice (accepted/dismissed the suggestion banner, or switched language
 * explicitly). Used to keep the browser-language suggestion banner
 * non-invasive: once any choice exists, the banner never shows again.
 *
 * All access is wrapped in try/catch so private-mode / disabled storage never
 * throws into the UI.
 */
export const LOCALE_PREF_KEY = "gd-locale-suggestion";

export type LocalePreference = "accepted" | "dismissed" | "selected";

export function hasLocalePreference(): boolean {
  try {
    return !!window.localStorage.getItem(LOCALE_PREF_KEY);
  } catch {
    return false;
  }
}

export function setLocalePreference(value: LocalePreference): void {
  try {
    window.localStorage.setItem(LOCALE_PREF_KEY, value);
  } catch {
    /* storage unavailable — silently ignore */
  }
}
