import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "portfolio-resume";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubActions ? `/${repoName}` : undefined);

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || "",
  },
};

export default nextConfig;
