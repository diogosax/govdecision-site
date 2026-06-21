import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.metaTitle,
    template: `%s · ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: site.name,
  keywords: [
    "government business platform",
    "public sector sales",
    "supplier readiness",
    "opportunity qualification",
    "government procurement",
    "market access",
    "route to market",
    "GovDecision",
  ],
  authors: [{ name: site.parent }],
  creator: site.parent,
  // The favicon is provided by the App Router `app/favicon.ico` convention
  // (the real GovDecision brand icon). Only the apple-touch icon is declared here.
  icons: {
    apple: "/brand/govdecision-app-logo.png",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.ogTitle,
    description: site.ogDescription,
    url: site.url,
    images: [
      {
        url: site.ogImage,
        width: 1362,
        height: 288,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.ogTitle,
    description: site.ogDescription,
    images: [site.ogImage],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ivory">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-plum focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
