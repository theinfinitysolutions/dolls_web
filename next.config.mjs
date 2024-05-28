/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mystorage1.blr1.cdn.digitaloceanspaces.com",
      },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
