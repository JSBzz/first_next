/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nexttoy.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/upload/**",
      },
    ],
  },
};

export default nextConfig;
