import { type Metadata } from 'next';
import { Suspense } from 'react';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import PageHero from '@/components/blocks/PageHero/PageHero';
import BlogLoadingSkeleton from '@/components/BlogLoadingSkeleton/BlogLoadingSkeleton';
import FetchBlogsWrapper from '@/components/FetchBlogs/FetchBlogs';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';

export const metadata: Metadata = {
  title: 'Supernova Dental | Blog',
  description:
    'Get the latest updates from Supernova Dental, including expert tips, new treatments and news about our services and offerings.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <HighlightCard
        title='Supernova Dental Blog'
        description='Stay informed with the latest updates from Supernova Dental, including expert tips and new treatments.'
        logoSrc='/assets/images/logo.png'
        className='mt-16'
      />
      <Suspense fallback={<BlogLoadingSkeleton />}>
        <FetchBlogsWrapper searchParams={searchParams} />
      </Suspense>
      {/* <Steps /> */}
      {/* <GalleryCarousel /> */}
      {/* <DynamicGoogleMap /> */}
    </>
  );
}
