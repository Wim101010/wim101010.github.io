import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Static export only for GitHub Pages; Vercel handles Next.js natively.
  ...(isGitHubPages && { output: "export" }),
  images: {
    // Required for static export; harmless on Vercel.
    unoptimized: true,
  },
};

export default nextConfig;
