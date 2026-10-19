import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Footer copyright year: set when the site is built, so it needs no runtime clock.
  env: { NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()) },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
