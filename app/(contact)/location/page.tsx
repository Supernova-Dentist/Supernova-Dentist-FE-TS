import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Location',
  description: 'Find our location and contact information',
};

export default function Location() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Location page</h1>;
}
