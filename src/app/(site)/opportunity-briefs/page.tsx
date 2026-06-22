import type { Metadata } from "next";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/i18n/metadata";
import { briefChrome } from "@/i18n/briefs";
import { OpportunityBriefsView } from "@/views/OpportunityBriefsView";

const chrome = briefChrome["en-US"];

export const metadata: Metadata = pageMetadata("en-US", "/opportunity-briefs", {
  title: chrome.indexMetaTitle,
  description: chrome.indexMetaDescription,
});

export default function OpportunityBriefsPage() {
  return (
    <>
      <WebPageJsonLd
        locale="en-US"
        path="/opportunity-briefs"
        name={chrome.indexMetaTitle}
        description={chrome.indexMetaDescription}
        about="Public-sector procurement opportunities"
      />
      <BreadcrumbJsonLd
        locale="en-US"
        crumbs={[
          { name: "GovDecision", path: "/" },
          { name: chrome.briefsCrumb, path: "/opportunity-briefs" },
        ]}
      />
      <OpportunityBriefsView locale="en-US" />
    </>
  );
}
