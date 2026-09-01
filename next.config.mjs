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
        source: '/invisalign',
        destination: '/cosmetic-dentistry/invisalign',
        permanent: true,
      },
      // {
      //   source: '/cosmetic-dentistry/invisalign-open-day',
      //   destination: '/cosmetic-dentistry/invisalign',
      //   permanent: true,
      // },
      {
        source: '/cosmetic-dentistry/invisalign-flash-sale',
        destination: '/cosmetic-dentistry/invisalign',
        permanent: true,
      },
      {
        source: '/dental-implants',
        destination: '/cosmetic-dentistry/dental-implants',
        permanent: true,
      },
      {
        source: '/dental-finance',
        destination: '/general-dentistry/dental-finance',
        permanent: true,
      },
      {
        source: '/sports-mouthguards',
        destination: '/general-dentistry/sports-mouthguards',
        permanent: true,
      },
      {
        source: '/dental-hygiene',
        destination: '/general-dentistry/dental-hygiene',
        permanent: true,
      },
      {
        source: '/dental-therapist',
        destination: '/general-dentistry/dental-therapist',
        permanent: true,
      },
      {
        source: '/emergency-dentistry',
        destination: '/general-dentistry/emergency-dentistry',
        permanent: true,
      },
      {
        source: '/invisalign-smile-view',
        destination: 'https://wwwinvisalign-ts-prd-eu.herokuapp.com/SV/1795073',
        permanent: false,
      },
      {
        source: '/carees/dental-nurse',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/careers/dental-nurse',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/careers/associate-dentist-jobs/:location',
        destination: '/careers/associate-dentist-bridgwater-somerset',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
