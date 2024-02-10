/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "idx.dev", protocol: "https" }],
  },
};

export default nextConfig;
