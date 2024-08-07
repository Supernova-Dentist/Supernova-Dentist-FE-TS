import PageHero from '@/components/blocks/PageHero/PageHero';
import FetchGalleryWrapper from '@/components/FetchGallery/FetchGallery';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smile Transformations | Supernova Dental',
  description: 'View our gallery of dental services and patient transformations at Supernova Dental.',
};

export default function Gallery({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <>
      <PageHero bgImage='bg-blog' title='Gallery' showButtons={false} className='bg-center' />
      <FetchGalleryWrapper searchParams={searchParams} />
    </>
  );
}
