import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/una-essence',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
