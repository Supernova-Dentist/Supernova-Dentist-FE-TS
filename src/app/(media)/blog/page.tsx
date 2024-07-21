import { type Metadata } from 'next';
import dynamic from 'next/dynamic';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import PageHero from '@/components/blocks/PageHero/PageHero';
import Blogs from '@/components/blocks/Blogs/Blogs';
const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Supernova Dental | Blog',
  description:
    "Welcome to the Supernova Dental blog! Discover expert dental tips, the latest in oral health care, cosmetic dentistry insights, and more. Our blog is dedicated to helping you maintain a healthy and beautiful smile with advice from Dr. Young and our team of dental professionals. Stay informed about new treatments, dental technologies, and patient care practices. Whether you're looking for preventive care tips or the latest trends in cosmetic dentistry, our blog has you covered.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero bgImage='bg-blog' title='Blog' showButtons={false} className='bg-center' />
      <Blogs />
      <Steps />
      <GalleryCarousel />
      <GoogleMap />
    </>
  );
}