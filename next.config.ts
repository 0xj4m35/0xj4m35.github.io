import type { NextConfig } from "next";

const cfg: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default cfg;
