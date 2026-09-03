import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co", pathname: "/Z1vvQmQ0/2.webp" },
      { protocol: "https", hostname: "i.ibb.co", pathname: "/h1rDjJ2m/Untitled-1-01.webp" },
      { protocol: "https", hostname: "i.ibb.co", pathname: "/gZtm5pNV/Untitled-1-02.webp" },
      { protocol: "https", hostname: "i.ibb.co", pathname: "/hFq0ZY8w/Untitled-1-03.webp" },
    ],
  },
  typescript: {
    tsconfigPath:
      process.env.VERCEL === "1" ? "./tsconfig.vercel.json" : "./tsconfig.json",
  },
};

export default nextConfig;
