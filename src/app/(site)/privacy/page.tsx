import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { getLegal } from "@/i18n/legal";
import { LegalView } from "@/views/LegalView";

export const metadata: Metadata = pageMetadata("en-US", "/privacy", {
  ...getLegal("en-US").privacy.meta,
  absoluteTitle: true,
});

export default function PrivacyPage() {
  return <LegalView locale="en-US" kind="privacy" />;
}
