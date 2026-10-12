
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [],
  },

  serverExternalPackages: [
    "@prisma/client",
    ".prisma/client",
  ],
};

initOpenNextCloudflareForDev();

export default nextConfig;

