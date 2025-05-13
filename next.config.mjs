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
      {
        hostname: 'www.instagram.com',
        protocol: 'https',
      },
      {
        hostname: 'scontent.cdninstagram.com',
        protocol: 'https',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
};

export default nextConfig;
