import type { Metadata } from 'next';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import GoogleMap from '@/components/blocks/GoogleMap/GoogleMap';

export const metadata: Metadata = {
  title: 'Supernova Dental | Find Us',
  description: 'Locate Supernova Dental Clinic on the map. Find our address, contact information, and directions.',
};

export default function Location() {
  return (
    <>
      <div className=' flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />

          <section className='mb-12'>
            <h1 className='text-5xl font-bold my-8 text-left text-grey'>Find Supernova Dental Clinic</h1>
            <p className='text-xl mb-6 text-left text-lightGrey'>
              Locate Supernova Dental Clinic on the map. Find our address, contact information, and directions.
            </p>

            <div className='my-6'>
              <GoogleMap />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h2 className='text-3xl font-semibold mb-4 text-left text-gray'>Our Address</h2>
                <p className='text-lg mb-2 text-left text-lightGrey'>Supernova Dental Clinic</p>
                <p className='text-lg mb-2 text-left text-lightGrey'>123 Dental Street</p>
                <p className='text-lg mb-2 text-left text-lightGrey'>City, State, Zip Code</p>
                <p className='text-lg mb-2 text-left text-lightGrey'>Country</p>
              </div>
              <div>
                <h2 className='text-3xl font-semibold mb-4 text-left text-gray'>Contact Information</h2>
                <p className='text-lg mb-2 text-left text-lightGrey'>Phone: (123) 456-7890</p>
                <p className='text-lg mb-2 text-left text-lightGrey'>Email: info@supernovadentalclinic.com</p>
                <p className='text-lg mb-2 text-left text-lightGrey'>Website: www.supernovadentalclinic.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
