/**
 * Locale-aware routing helpers.
 *
 * Public URL shape:
 *   en-US:  /            /platform   /contact?path=brazil&type=local
 *   pt-BR:  /pt-BR       /pt-BR/platform
 *   es:     /es          /es/platform
 *
 * The core marketing routes and the six Market Access destination briefings
 * (`/market-access/[slug]`) exist in every locale (SITE-012), so they are all
 * localized. Any other deep route has no localized page and stays unprefixed,
 * with the language switcher falling back to the nearest localized route.
 */
import { defaultLocale, isPrefixedLocale, locales, type Locale } from "./config";
import { destinationSlugs } from "@/data/destinations";
import { briefSlugs } from "@/data/opportunity-briefs";

/** Core routes that exist in every locale. Keep in sync with `app/[locale]/*`. */
export const localizedPaths = [
  "/",
  "/platform",
  "/market-access",
  "/opportunity-briefs",
  "/partners",
  "/capital",
  "/pricing",
  "/company",
  "/contact",
  "/corridors",
] as const;

/**
 * Localized Market Access destination detail routes, one per known slug. These
 * have a page in every locale (`app/[locale]/market-access/[slug]`), so they
 * are localized exactly like the core routes.
 */
export const localizedDestinationPaths: readonly string[] =
  destinationSlugs.map((slug) => `/market-access/${slug}`);

/**
 * Localized Opportunity Brief detail routes, one per known slug (SITE-013).
 * These have a page in every locale (`app/[locale]/opportunity-briefs/[slug]`).
 */
export const localizedBriefPaths: readonly string[] = briefSlugs.map(
  (slug) => `/opportunity-briefs/${slug}`,
);

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
  return (
    (localizedPaths as readonly string[]).includes(path) ||
    localizedDestinationPaths.includes(path) ||
    localizedBriefPaths.includes(path)
  );
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
  if (path.startsWith("/opportunity-briefs")) {
    return localePath(target, "/opportunity-briefs");
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
