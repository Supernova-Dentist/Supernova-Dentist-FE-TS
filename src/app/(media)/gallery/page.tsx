import { type Metadata } from 'next';
import GalleryGrid from './utils/GalleryGrid';
import PageHero from '@/components/blocks/PageHero/PageHero';

export const metadata: Metadata = {
  title: 'Smile Transformations | Supernova Dental',
  description: 'View our gallery of dental services and patient transformations at Supernova Dental.',
};

export default function Gallery() {
  return (
    <>
      <PageHero bgImage='bg-blog' title='Gallery' showButtons={false} className='bg-center' />
      <GalleryGrid />
    </>
  );
}
