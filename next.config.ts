import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co", pathname: "/Z1vvQmQ0/2.webp" },
    ],
  },
  typescript: {
    tsconfigPath:
      process.env.VERCEL === "1" ? "./tsconfig.vercel.json" : "./tsconfig.json",
  },
};

export default nextConfig;
