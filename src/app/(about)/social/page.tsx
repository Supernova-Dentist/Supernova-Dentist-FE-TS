import type { Metadata } from 'next';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InstagramPostGrid from './utils/InstagramPostGrid';
import fetchInstagramPosts from '@/services/metaAPI/fetchInstagramPosts';

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
  const username = instagramPosts?.length > 0 ? instagramPosts?.[0].username : 'Our Instagram';
  const instagramProfileUrl = `https://www.instagram.com/${username}/`;

  return (
    <>
      <div className='min-h-screen-minus-nav flex flex-col items-center justify-start py-12 mt-20 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />
          <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold break-words text-grey'>{username}</h1>
              <p className='text-muted-foreground text-lightGrey'>
                Follow us on Instagram for the latest updates and dental tips.
              </p>
            </div>
            <a
              href={instagramProfileUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex w-fit items-center gap-2 bg-grey text-primary rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring mt-2 sm:mt-0'
            >
              <InstagramLogoIcon className='w-5 h-5 text-cream' />
              <span className='text-cream'>Follow</span>
            </a>
          </div>

          {instagramPosts !== undefined || instagramPosts?.length > 0 ? (
            <InstagramPostGrid posts={instagramPosts} />
          ) : (
            <span className='flex justify-center mt-20'>No Instagram posts yet. Check back later.</span>
          )}
        </div>
      </div>
    </>
  );
}
