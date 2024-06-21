import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Emergency Dentist',
  description: 'Emergency Dentist page of Supernova Dental',
};

export default function EmergencyDentist() {
  return <h1 className='h-screen flex justify-center text-3xl mt-12'>Emergency Dentist page</h1>;
}
