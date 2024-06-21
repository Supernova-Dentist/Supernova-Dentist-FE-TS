import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Implants',
  description: 'Implants page of Supernova Dental',
};

export default function Implants() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Implants page</h1>;
}
