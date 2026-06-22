import type { Metadata } from "next";
import { site } from "@/data/site";
import { defaultLocale, localeHtmlLang, type Locale } from "./config";
import { buildAlternates } from "./routing";

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
      locale: localeHtmlLang[locale],
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
      locale: localeHtmlLang[locale],
    },
    twitter: {
      title: copy.title,
      description: copy.description,
    },
  };
}
