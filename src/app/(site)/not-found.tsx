import { NotFoundView } from "@/components/layout/NotFoundView";

/**
 * Branded EN-US 404. Rendered inside the `(site)` root layout, so it keeps the
 * GovDecision header/footer chrome. Catches `notFound()` in the EN tree (e.g. an
 * unknown `/market-access/[slug]`) and unmatched EN routes.
 */
export default function NotFound() {
  return <NotFoundView locale="en-US" />;
}
