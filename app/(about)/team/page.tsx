import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Team',
  description: 'Meet the team behind Supernova Dental',
};

export default function Team() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Team page</h1>;
}
