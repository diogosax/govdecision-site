import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { getPartnerCapital } from "@/i18n/partner-capital";
import { PartnersView } from "@/views/PartnersView";

export const metadata: Metadata = pageMetadata("en-US", "/partners", {
  ...getPartnerCapital("en-US").partners.meta,
  absoluteTitle: true,
});

export default function PartnersPage() {
  return <PartnersView locale="en-US" />;
}
