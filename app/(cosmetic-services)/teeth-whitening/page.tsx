import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Invisalign',
  description: 'Teeth Whitening page of Supernova Dental',
};

export default function TeethWhitening() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Teeth Whitening page</h1>;
}
