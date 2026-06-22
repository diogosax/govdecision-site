import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { getPartnerCapital } from "@/i18n/partner-capital";
import { CapitalView } from "@/views/CapitalView";

export const metadata: Metadata = pageMetadata("en-US", "/capital", {
  ...getPartnerCapital("en-US").capital.meta,
  absoluteTitle: true,
});

export default function CapitalPage() {
  return <CapitalView locale="en-US" />;
}
