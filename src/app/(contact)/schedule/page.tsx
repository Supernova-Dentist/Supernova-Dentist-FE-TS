import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Schedule',
  description: 'Schedule an appointment at Supernova Dental',
};

export default function Schedule() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Schedule page</h1>;
}
