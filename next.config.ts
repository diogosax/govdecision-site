import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The AWS SES SDK uses Node.js APIs and is only loaded (via dynamic import)
  // when CONTACT_DELIVERY_PROVIDER=ses. Keep it out of the server bundle.
  serverExternalPackages: ["@aws-sdk/client-sesv2"],
  experimental: {
    // This app has multiple root layouts ((site) + [locale]), so there is no
    // single layout to compose a global 404 from. `global-not-found` provides a
    // branded fallback for URLs that match no route (e.g. an unknown top-level
    // path / invalid locale prefix). Localized in-tree 404s use the per-segment
    // `not-found.tsx` boundaries, which keep full chrome and the right locale.
    globalNotFound: true,
  },
};

export default nextConfig;
