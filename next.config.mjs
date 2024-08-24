/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.microlink.io', 'scontent-man2-1.cdninstagram.com'],
    remotePatterns: [
      {
        hostname: 'via.placeholder.com',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
