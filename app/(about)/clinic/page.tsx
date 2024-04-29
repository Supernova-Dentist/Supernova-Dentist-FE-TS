import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Clinic',
  description: 'Book an appointment with our clinic',
};

export default function Clinic() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Clinic page</h1>;
}
