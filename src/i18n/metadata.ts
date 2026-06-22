import type { Metadata } from "next";
import { site } from "@/data/site";
import {
  defaultLocale,
  locales,
  ogLocale,
  type Locale,
} from "./config";
import { buildAlternates } from "./routing";

/** OG locale for `locale`, plus the other locales as `alternateLocale`. */
function ogLocaleFields(locale: Locale): {
  locale: string;
  alternateLocale: string[];
} {
  return {
    locale: ogLocale[locale],
    alternateLocale: locales
      .filter((l) => l !== locale)
      .map((l) => ogLocale[l]),
  };
}

/**
 * Base metadata shared by both root layouts (EN root + `[locale]`). Per-page
 * title/description/alternates are layered on top by each page.
 */
export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.metaTitle,
      template: `%s · ${site.name}`,
    },
    description: site.metaDescription,
    applicationName: site.name,
    keywords: [
      "government business platform",
      "public sector sales",
      "supplier readiness",
      "opportunity qualification",
      "government procurement",
      "market access",
      "route to market",
      "GovDecision",
    ],
    authors: [{ name: site.parent }],
    creator: site.parent,
    icons: { apple: "/brand/govdecision-app-logo.png" },
    openGraph: {
      type: "website",
      siteName: site.name,
      ...ogLocaleFields(locale),
      title: site.ogTitle,
      description: site.ogDescription,
      url: locale === defaultLocale ? "/" : `/${locale}`,
      images: [
        {
          url: site.ogImage,
          width: 1362,
          height: 288,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.ogTitle,
      description: site.ogDescription,
      images: [site.ogImage],
    },
    alternates: buildAlternates(locale, "/"),
  };
}

/**
 * Per-page metadata for a core (localized) route. `path` is the bare,
 * locale-less route, e.g. "/platform". Sets title, description, canonical, and
 * hreflang alternates for every locale.
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  copy: { title: string; description: string; absoluteTitle?: boolean },
): Metadata {
  const alternates = buildAlternates(locale, path);
  return {
    title: copy.absoluteTitle ? { absolute: copy.title } : copy.title,
    description: copy.description,
    alternates,
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: alternates.canonical,
      ...ogLocaleFields(locale),
    },
    twitter: {
      title: copy.title,
      description: copy.description,
    },
  };
}

/**
 * Per-page metadata for a Market Access destination briefing. `path` is the
 * bare, locale-less detail route (e.g. "/market-access/brazil"). Emits a fully
 * absolute title (the SEO string verbatim), canonical, hreflang alternates for
 * every locale, and OG locale fields. Used by both the EN-US (`(site)`) and the
 * localized (`[locale]`) destination routes.
 */
export function destinationMetadata(
  locale: Locale,
  path: string,
  copy: { title: string; description: string },
): Metadata {
  const alternates = buildAlternates(locale, path);
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates,
    openGraph: {
      type: "website",
      title: copy.title,
      description: copy.description,
      url: alternates.canonical,
      ...ogLocaleFields(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
    },
  };
}

/**
 * Per-page metadata for a Government Opportunity Brief detail page (SITE-013).
 * `path` is the bare, locale-less detail route (e.g.
 * "/opportunity-briefs/brazil-facilities-maintenance"). Emits the brief's
 * absolute title, canonical, hreflang alternates for every locale, and OG
 * locale fields. Used by both the EN-US and localized brief routes.
 */
export function briefMetadata(
  locale: Locale,
  path: string,
  copy: { title: string; description: string },
): Metadata {
  const alternates = buildAlternates(locale, path);
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates,
    openGraph: {
      type: "article",
      title: copy.title,
      description: copy.description,
      url: alternates.canonical,
      ...ogLocaleFields(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
    },
  };
}
