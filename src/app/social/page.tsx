import { InstagramLogoIcon } from '@radix-ui/react-icons';
import fetchInstagramPosts from '@/actions/instagram';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InstagramPostGrid from './utils/InstagramPostGrid';
import PageHero from '@/components/blocks/PageHero/PageHero';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { Facebook } from 'react-feather';
import { type Metadata } from 'next';
import SocialGridHeader from './utils/SocialGridHeader';

export const metadata: Metadata = {
  title: 'Supernova Dental | Socials',
  description: 'Follow Supernova Dental on Instagram and Facebook for the latest updates, dental tips.',
};

export default async function SocialMedia() {
  const instagramPosts = await fetchInstagramPosts();
  const username = instagramPosts?.length > 0 ? instagramPosts?.[0].username : 'Our Instagram';
  const instagramProfileUrl = `https://www.instagram.com/${username}/`;

  return (
    <>
      <HighlightCard
        title='Supernova Dental - Social Media'
        description='Follow us on Instagram and Facebook for the latest updates and dental tips'
        logoSrc='/assets/images/logo.png'
        className='mt-16'
      />
      <div className='flex flex-col items-center justify-start py-12'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />

          <SocialGridHeader username={username} instaSrc={instagramProfileUrl} />

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
