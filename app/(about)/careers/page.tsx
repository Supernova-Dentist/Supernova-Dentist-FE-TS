import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Careers',
  description: 'Join our team and help us build the future of the web',
};

export default function Careers() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Careers page</h1>;
}
