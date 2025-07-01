/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/invisalign-smile-view',
        destination: 'https://wwwinvisalign-ts-prd-eu.herokuapp.com/SV/1795073',
        permanent: false, // Set to `true` if it's a permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
