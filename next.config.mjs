/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*.cdninstagram.com',
        protocol: 'https',
      },
      {
        hostname: 'api.microlink.io',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
