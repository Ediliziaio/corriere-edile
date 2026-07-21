import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static Site Generation: export di file statici in out/ (hosting ovunque, indicizzazione piena)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
