import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/UtkarshSrivastava1139.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/UtkarshSrivastava1139.github.io/' : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;
