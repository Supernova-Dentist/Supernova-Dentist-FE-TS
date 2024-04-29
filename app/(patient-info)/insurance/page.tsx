import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Insurance',
  description: 'Information on insurance providers accepted at Supernova Dental',
};

export default function Insurance() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Insurance page</h1>;
}
