import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationDetail } from "@/components/market-access/DestinationDetail";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { destinationSlugs } from "@/data/destinations";
import { isPrefixedLocale, prefixedLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getDestinationView } from "@/i18n/destinations";
import { destinationMetadata } from "@/i18n/metadata";
import { destinationCrumbName } from "@/i18n/destinations/crumbs";

type Params = { locale: string; slug: string };

/** Only the implemented locale × slug combinations are valid; everything else 404s. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return prefixedLocales.flatMap((locale) =>
    destinationSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) return {};
  const view = getDestinationView(locale, slug);
  if (!view) return {};
  return destinationMetadata(locale, `/market-access/${slug}`, {
    title: view.copy.metaTitle,
    description: view.copy.metaDescription,
  });
}

export default async function LocaleDestinationDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const view = getDestinationView(locale, slug);
  if (!view) notFound();

  const nav = getDictionary(locale).common.nav;

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        crumbs={[
          { name: "GovDecision", path: "/" },
          { name: nav.marketAccess, path: "/market-access" },
          { name: destinationCrumbName(view), path: `/market-access/${slug}` },
        ]}
      />
      <DestinationDetail view={view} />
    </>
  );
}
