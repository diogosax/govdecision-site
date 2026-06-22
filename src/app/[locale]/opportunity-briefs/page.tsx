import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { isPrefixedLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { briefChrome } from "@/i18n/briefs";
import { OpportunityBriefsView } from "@/views/OpportunityBriefsView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  const chrome = briefChrome[locale];
  return pageMetadata(locale, "/opportunity-briefs", {
    title: chrome.indexMetaTitle,
    description: chrome.indexMetaDescription,
  });
}

export default async function LocaleOpportunityBriefsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const chrome = briefChrome[locale];

  return (
    <>
      <WebPageJsonLd
        locale={locale}
        path="/opportunity-briefs"
        name={chrome.indexMetaTitle}
        description={chrome.indexMetaDescription}
        about="Public-sector procurement opportunities"
      />
      <BreadcrumbJsonLd
        locale={locale}
        crumbs={[
          { name: "GovDecision", path: "/" },
          { name: chrome.briefsCrumb, path: "/opportunity-briefs" },
        ]}
      />
      <OpportunityBriefsView locale={locale} />
    </>
  );
}
