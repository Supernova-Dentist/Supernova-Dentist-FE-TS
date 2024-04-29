import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Faq',
  description: 'Frequently asked questions about Supernova Dental',
};

export default function Faq() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Faq page</h1>;
}
