import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['picsum.photos', 'i.pravatar.cc'],
  },
};

export default nextConfig;
