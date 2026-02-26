import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "journal-labreche.fr",
      },
    ],
  },
};

export default nextConfig;
