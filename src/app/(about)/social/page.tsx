import type { Metadata } from 'next';
import Link from 'next/link';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InstagramPostGrid from './utils/InstagramPostGrid';
import { fetchInstagramPosts } from '@/services/metaAPI/fetchInstagramPosts';

export const metadata: Metadata = {
  title: 'Our Instagram | Your Dental Clinic',
  description:
    'Follow us on Instagram for the latest updates and dental tips. Stay connected with us through our social media!',
  openGraph: {
    title: 'Our Instagram | Your Dental Clinic',
    description:
      'Follow us on Instagram for the latest updates and dental tips. Stay connected with us through our social media!',
    url: 'https://www.yourwebsite.com/social-media',
    type: 'website',
    images: [
      {
        url: 'https://www.yourwebsite.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Instagram | Your Dental Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Instagram | Your Dental Clinic',
    description:
      'Follow us on Instagram for the latest updates and dental tips. Stay connected with us through our social media!',
    images: ['https://www.yourwebsite.com/images/twitter-image.jpg'],
  },
};

export default async function SocialMedia() {
  const instagramPosts = await fetchInstagramPosts();

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />

          <div className='flex items-center justify-between mb-8'>
            <div>
              <h1 className='text-3xl font-bold'>Our Instagram</h1>
              <p className='text-muted-foreground'>Follow us on Instagram for the latest updates and dental tips.</p>
            </div>
            <Link
              href='#'
              className='inline-flex items-center gap-2 bg-grey text-primary rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              prefetch={false}
            >
              <InstagramLogoIcon className='w-5 h-5 text-cream' />
              <span className='text-cream'>Follow</span>
            </Link>
          </div>

          <InstagramPostGrid posts={instagramPosts} />
        </div>
      </div>
    </>
  );
}
