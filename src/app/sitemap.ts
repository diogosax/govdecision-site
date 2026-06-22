import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { destinationSlugs } from "@/data/destinations";
import { locales } from "@/i18n/config";
import { localePath, localizedPaths } from "@/i18n/routing";

const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Core routes — one entry per locale, cross-linked with hreflang alternates.
  for (const path of localizedPaths) {
    const languages: Record<string, string> = {};
    for (const l of locales) languages[l] = abs(localePath(l, path));
    languages["x-default"] = abs(localePath("en-US", path));

    for (const l of locales) {
      entries.push({
        url: abs(localePath(l, path)),
        lastModified: now,
        changeFrequency: "monthly",
        priority: path === "/" ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  // Market Access destination briefings — now localized (SITE-012). One entry
  // per locale, cross-linked with hreflang alternates, just like core routes.
  for (const slug of destinationSlugs) {
    const path = `/market-access/${slug}`;
    const languages: Record<string, string> = {};
    for (const l of locales) languages[l] = abs(localePath(l, path));
    languages["x-default"] = abs(localePath("en-US", path));

    for (const l of locales) {
      entries.push({
        url: abs(localePath(l, path)),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
