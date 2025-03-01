import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
}) 

const nextConfig: NextConfig = withPWA ({
  reactStrictMode: true
});

export default nextConfig;
