import "../globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { montserrat } from "../fonts";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { getDictionary } from "@/i18n/get-dictionary";
import { rootMetadata } from "@/i18n/metadata";

/**
 * EN-US root layout. Lives in a route group so the default English site keeps
 * its clean, unprefixed URLs (`/`, `/platform`, …) while the `[locale]` tree
 * serves PT-BR and ES. This is a separate root layout from `[locale]/layout`,
 * which lets each tree set its own `<html lang>`.
 */
export const metadata: Metadata = rootMetadata("en-US");

export default function SiteLayout({ children }: { children: ReactNode }) {
  const dict = getDictionary("en-US");
  return (
    <html lang="en-US" className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ivory">
        <SiteChrome locale="en-US" dict={dict}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
