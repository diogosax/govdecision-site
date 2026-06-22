import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The AWS SES SDK uses Node.js APIs and is only loaded (via dynamic import)
  // when CONTACT_DELIVERY_PROVIDER=ses. Keep it out of the server bundle.
  serverExternalPackages: ["@aws-sdk/client-sesv2"],
};

export default nextConfig;
