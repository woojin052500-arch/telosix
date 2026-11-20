import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  // telosix.co.kr/covelo → COVELO 소개 페이지(public/covelo/index.html, 정적 HTML)
  async rewrites() {
    return [
      { source: "/covelo", destination: "/covelo/index.html" },
      { source: "/covelo/", destination: "/covelo/index.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
