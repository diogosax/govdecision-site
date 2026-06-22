import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { BriefDetail } from "@/components/briefs/BriefDetail";
import { briefSlugs } from "@/data/opportunity-briefs";
import { getBriefView } from "@/i18n/briefs";
import { briefMetadata } from "@/i18n/metadata";

type Params = { slug: string };

/** Only the implemented brief slugs are valid; everything else 404s. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return briefSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const view = getBriefView("en-US", slug);
  if (!view) return {};
  return briefMetadata("en-US", `/opportunity-briefs/${slug}`, {
    title: view.copy.metaTitle,
    description: view.copy.metaDescription,
  });
}

export default async function BriefDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const view = getBriefView("en-US", slug);
  if (!view) notFound();

  return (
    <>
      <WebPageJsonLd
        locale="en-US"
        path={`/opportunity-briefs/${slug}`}
        name={view.copy.metaTitle}
        description={view.copy.metaDescription}
        about={`${view.copy.marketLabel} — ${view.copy.opportunityType}`}
      />
      <BreadcrumbJsonLd
        locale="en-US"
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
