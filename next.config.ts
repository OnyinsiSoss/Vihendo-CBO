import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/xKhRkrFz/slide2.jpg',
      },
    ],
  },
};

export default nextConfig;
