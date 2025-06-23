import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useLightningcss: false, // Disable Lightning CSS
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [ {
      protocol: 'https',
      hostname: 'picsum.photos',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'i.pravatar.cc',
      pathname: '/**',
    }
    ],
  },
};

export default nextConfig;
