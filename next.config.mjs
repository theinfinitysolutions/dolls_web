/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
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
        hostname: "d26cxpggxycgjx.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "mystorage1.blr1.cdn.digitaloceanspaces.com",
      },
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:all*(mp3)",
        headers: [
          {
            key: "Content-Type",
            value: "audio/mpeg", // Adjust as necessary
          },
        ],
      },
    ];
  },
  transpilePackages: ["three"],
};

export default nextConfig;
