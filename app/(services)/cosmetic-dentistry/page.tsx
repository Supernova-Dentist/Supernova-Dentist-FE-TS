import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Cosmetic Dentistry',
  description: 'Learn more about our cosmetic dentistry services',
};

export default function CosmeticDentistry() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Cosmetic dentistry page</h1>;
}
