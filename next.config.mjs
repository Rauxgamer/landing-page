// next.config.mjs
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // IMPORTANTE: Para Cloudflare Pages, activa el modo experimental para edge-runtime si lo necesitas
  experimental: {
    runtime: 'edge',
  },
};

// SOLO ejecuta esto en modo desarrollo
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
