/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2g3h1gpjmm5ra.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "d3rbf9e30ll7p5.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "mystorage1.blr1.cdn.digitaloceanspaces.com",
      },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
