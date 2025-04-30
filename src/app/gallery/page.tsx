import PageHero from '@/components/blocks/PageHero/PageHero';
import FetchGalleryWrapper from '@/components/FetchGallery/FetchGallery';
import { type Metadata } from 'next';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';

export const metadata: Metadata = {
  title: 'Supernova Dental | Gallery',
  description:
    'Explore our gallery of dental services, patient transformations, clinic events and more at Supernova Dental.',
};

export default function Gallery({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <>
      <HighlightCard
        title='Supernova Dental Gallery'
        description='Browse through photos showcasing our dental services, patient transformations and clinic events at Supernova Dental.'
        logoSrc='/assets/images/logo.png'
        className='mt-16'
      />
      <FetchGalleryWrapper searchParams={searchParams} />
    </>
  );
}
