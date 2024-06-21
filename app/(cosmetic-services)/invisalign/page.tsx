import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Invisalign',
  description: 'Invisalign page of Supernova Dental',
};

export default function Invisalign() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Invisalign page</h1>;
}
