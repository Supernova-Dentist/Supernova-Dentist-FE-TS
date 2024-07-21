import { type Metadata } from 'next';
import GalleryGrid from './utils/GalleryGrid';

export const metadata: Metadata = {
  title: 'Smile Transformations | Supernova Dental',
  description: 'View our gallery of dental services and patient transformations at Supernova Dental.',
};

export default function Gallery() {
  return (
    <>
      <div className='flex justify-center items-center h-20 my-8'>
        <h1 className='text-4xl font-bold text-center text-gray-800 '>Supernova Gallery</h1>
      </div>
      <GalleryGrid />
    </>
  );
}
