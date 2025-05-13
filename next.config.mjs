/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdninstagram.com', 'scontent-man2-1.cdninstagram.com'],
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
