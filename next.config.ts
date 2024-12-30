import type { NextConfig } from "next";





const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.fptshop.com.vn",
        port: "",
        pathname: "/*/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;