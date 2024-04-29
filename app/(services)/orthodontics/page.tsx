import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Orthodontics',
  description: 'Orthodontics services at Supernova Dental',
};

export default function Orthodontics() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Orthodontics page</h1>;
}
