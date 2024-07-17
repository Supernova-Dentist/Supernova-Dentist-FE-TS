/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.microlink.io'],
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
