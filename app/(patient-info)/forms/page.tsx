import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Forms',
  description: 'Download and fill out our forms before your appointment',
};

export default function Forms() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Forms page</h1>;
}
