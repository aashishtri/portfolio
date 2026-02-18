import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Replace 'portfolio' with your actual repository name if different
  basePath: '/portfolio', 
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
