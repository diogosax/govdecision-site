import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/i18n/metadata";
import { CorridorsView } from "@/views/CorridorsView";

const dict = getDictionary("en-US");

export const metadata: Metadata = pageMetadata(
  "en-US",
  "/corridors",
  dict.corridors.meta,
);

export default function CorridorsPage() {
  return <CorridorsView locale="en-US" dict={dict} />;
}
