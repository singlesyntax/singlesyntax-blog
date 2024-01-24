/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data.singlesyntax.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
