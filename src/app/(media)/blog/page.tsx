import { type Metadata } from 'next';
import { Suspense } from 'react';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import PageHero from '@/components/blocks/PageHero/PageHero';
import BlogLoadingSkeleton from '@/components/BlogLoadingSkeleton/BlogLoadingSkeleton';
import FetchBlogsWrapper from '@/components/FetchBlogs/FetchBlogs';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';

export const metadata: Metadata = {
  title: 'Supernova Dental | Blog',
  description:
    "Welcome to the Supernova Dental blog! Discover expert dental tips, the latest in oral health care, cosmetic dentistry insights, and more. Our blog is dedicated to helping you maintain a healthy and beautiful smile with advice from Dr. Young and our team of dental professionals. Stay informed about new treatments, dental technologies, and patient care practices. Whether you're looking for preventive care tips or the latest trends in cosmetic dentistry, our blog has you covered.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <PageHero bgImage='bg-blog' title='Blog' showButtons={false} className='bg-center' />
      <Suspense fallback={<BlogLoadingSkeleton />}>
        <FetchBlogsWrapper searchParams={searchParams} />
      </Suspense>
      {/* <Steps /> */}
      {/* <GalleryCarousel /> */}
      {/* <DynamicGoogleMap /> */}
    </>
  );
}
