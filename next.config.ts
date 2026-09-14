import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // The site never renders a photo wider than half of a 2560px viewport.
    deviceSizes: [360, 420, 640, 828, 1080, 1280, 1600],
    imageSizes: [88, 128, 200, 256, 384],
  },
};

export default nextConfig;
