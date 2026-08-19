/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static, pre-rendered HTML for every route — best for SEO/AEO/GEO + page speed.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Static export cannot use the Next image optimizer.
    unoptimized: true,
  },
  compiler: {
    // Strip console.* in production bundles to trim JS payload.
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
