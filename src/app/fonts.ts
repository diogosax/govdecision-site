import { Montserrat } from "next/font/google";

/**
 * Shared font instance. Declared once and imported by both root layouts
 * (the EN root layout and the `[locale]` layout) so the `--font-montserrat`
 * variable is identical across locales.
 */
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
