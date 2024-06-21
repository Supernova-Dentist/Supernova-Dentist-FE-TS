import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Social',
  description: 'Social information',
};

export default function Location() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Social page</h1>;
}
