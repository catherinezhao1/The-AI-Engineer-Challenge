import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Proxy API calls to FastAPI during local development only.
  // On Vercel, vercel.json routes /api/* to the Python backend directly.
  async rewrites() {
    if (process.env.VERCEL) {
      return [];
    }

    const backendUrl = process.env.BACKEND_URL ?? "http://localhost:8000";

    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
