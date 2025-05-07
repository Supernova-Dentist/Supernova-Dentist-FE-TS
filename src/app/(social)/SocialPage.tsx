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
  title: 'Supernova Dental | Social Media',
  description:
    'Stay connected with Supernova Dental on Instagram and Facebook for the latest updates, patient success stories, dental tips, and Supernova Dental events in Bridgwater.',
  keywords:
    'Supernova Dental, dental practice Bridgwater, dental care, Instagram dental updates, Facebook dental tips, patient success stories, dental tips Bridgwater, dental community Bridgwater, Supernova Dental social media, Instagram posts, dental practice Instagram, dental news Bridgwater, patient stories, dentist Bridgwater',
};

export default async function SocialMedia() {
  const instagramPosts = await fetchInstagramPosts('social');
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
