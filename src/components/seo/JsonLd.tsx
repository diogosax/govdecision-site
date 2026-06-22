import { site } from "@/data/site";
import { localeHtmlLang, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/routing";

/**
 * Structured data (JSON-LD) helpers. Server components that emit a single
 * `<script type="application/ld+json">`. Everything here is intentionally
 * conservative and accurate — no ratings, awards, customers, pricing, or claims
 * of government affiliation.
 */

const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // The payload is a static, server-built object (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization + WebSite graph for the site root (per locale). Describes the
 * Sax Group organization and the GovDecision brand/site. Emitted once from the
 * site chrome so it appears on every page.
 */
export function SiteJsonLd({ locale }: { locale: Locale }) {
  const inLanguage = localeHtmlLang[locale];
  const homeUrl = abs(localePath(locale, "/"));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.parent,
        url: site.url,
        brand: { "@type": "Brand", name: site.name },
        slogan: site.tagline,
        description: site.metaDescription,
        logo: abs(site.ogImage),
        email: site.contactEmail,
        foundingLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Orlando",
            addressRegion: "FL",
            addressCountry: "US",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: homeUrl,
        inLanguage,
        publisher: { "@id": `${site.url}/#organization` },
        description: site.metaDescription,
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList for a destination briefing: Home → Market Access → Destination,
 * with localized labels and locale-prefixed URLs.
 */
export function BreadcrumbJsonLd({
  locale,
  crumbs,
}: {
  locale: Locale;
  crumbs: Crumb[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(localePath(locale, c.path)),
    })),
  };

  return <JsonLdScript data={data} />;
}
