import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Pediatric Dentistry',
  description: 'Pediatric dentistry services at Supernova Dental',
};

export default function PediatricDentistry() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Pediatric dentistry page</h1>;
}
