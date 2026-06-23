import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { getLegal } from "@/i18n/legal";
import { LegalView } from "@/views/LegalView";

export const metadata: Metadata = pageMetadata("en-US", "/compliance", {
  ...getLegal("en-US").compliance.meta,
  absoluteTitle: true,
});

export default function CompliancePage() {
  return <LegalView locale="en-US" kind="compliance" />;
}
