/**
 * Locale-aware routing helpers.
 *
 * Public URL shape:
 *   en-US:  /            /platform   /contact?path=brazil&type=local
 *   pt-BR:  /pt-BR       /pt-BR/platform
 *   es:     /es          /es/platform
 *
 * Only the core marketing routes have localized equivalents in this PR. Deep
 * pages (e.g. Market Access destination briefings) stay in EN-US as a clean
 * fallback, so `localePath` deliberately leaves them unprefixed and the
 * language switcher falls back to the nearest localized route.
 */
import { defaultLocale, isPrefixedLocale, locales, type Locale } from "./config";

/** Core routes that exist in every locale. Keep in sync with `app/[locale]/*`. */
export const localizedPaths = [
  "/",
  "/platform",
  "/market-access",
  "/pricing",
  "/company",
  "/contact",
  "/corridors",
] as const;

function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href) || href.startsWith("#");
}

function splitHref(href: string): { path: string; rest: string } {
  const i = href.search(/[?#]/);
  return i === -1
    ? { path: href, rest: "" }
    : { path: href.slice(0, i), rest: href.slice(i) };
}

function hasLocalizedVersion(path: string): boolean {
  return (localizedPaths as readonly string[]).includes(path);
}

/**
 * Prefix an internal core href with the active locale segment.
 *
 * Leaves untouched: external links, mailto/tel, in-page anchors, the default
 * locale, and deep routes that have no localized page yet (they fall back to
 * the EN-US content rather than 404).
 */
export function localePath(locale: Locale, href: string): string {
  if (isExternal(href)) return href;
  if (locale === defaultLocale) return href;
  const { path, rest } = splitHref(href);
  if (!hasLocalizedVersion(path)) return href;
  const base = path === "/" ? "" : path;
  return `/${locale}${base}${rest}`;
}

/** Split a pathname into its locale and the bare (locale-less) path. */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const segments = pathname.split("/");
  const first = segments[1];
  if (first && isPrefixedLocale(first)) {
    const rest = "/" + segments.slice(2).join("/");
    return { locale: first, path: rest === "/" ? "/" : rest.replace(/\/+$/, "") };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

export function getLocaleFromPathname(pathname: string): Locale {
  return stripLocale(pathname).locale;
}

/**
 * Where to send the user when they switch the current page to `target`.
 * Preserves query/hash for core pages; for deep pages without a localized
 * equivalent it routes to the nearest localized route (or the localized home).
 */
export function switchLocalePath(
  pathname: string,
  search: string,
  target: Locale,
): string {
  const { path } = stripLocale(pathname);
  if (hasLocalizedVersion(path)) {
    return localePath(target, path) + (search ?? "");
  }
  if (path.startsWith("/market-access")) {
    return localePath(target, "/market-access");
  }
  return localePath(target, "/");
}

/**
 * Canonical + hreflang alternates for a core path, used in page metadata.
 * Relative URLs are resolved against `metadataBase` set in the root layout.
 */
export function buildAlternates(
  locale: Locale,
  path: string,
): { canonical: string; languages: Record<string, string> } {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = localePath(l, path);
  }
  languages["x-default"] = localePath(defaultLocale, path);
  return { canonical: localePath(locale, path), languages };
}
