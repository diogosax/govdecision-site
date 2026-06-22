import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { BriefDetail } from "@/components/briefs/BriefDetail";
import { briefSlugs } from "@/data/opportunity-briefs";
import { isPrefixedLocale, prefixedLocales } from "@/i18n/config";
import { getBriefView } from "@/i18n/briefs";
import { briefMetadata } from "@/i18n/metadata";

type Params = { locale: string; slug: string };

/** Only the implemented locale × slug combinations are valid; everything else 404s. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return prefixedLocales.flatMap((locale) =>
    briefSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) return {};
  const view = getBriefView(locale, slug);
  if (!view) return {};
  return briefMetadata(locale, `/opportunity-briefs/${slug}`, {
    title: view.copy.metaTitle,
    description: view.copy.metaDescription,
  });
}

export default async function LocaleBriefDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const view = getBriefView(locale, slug);
  if (!view) notFound();

  return (
    <>
      <WebPageJsonLd
        locale={locale}
        path={`/opportunity-briefs/${slug}`}
        name={view.copy.metaTitle}
        description={view.copy.metaDescription}
        about={`${view.copy.marketLabel} — ${view.copy.opportunityType}`}
      />
      <BreadcrumbJsonLd
        locale={locale}
        crumbs={[
          { name: "GovDecision", path: "/" },
          { name: view.chrome.briefsCrumb, path: "/opportunity-briefs" },
          { name: view.copy.shortTitle, path: `/opportunity-briefs/${slug}` },
        ]}
      />
      <BriefDetail view={view} />
    </>
  );
}
