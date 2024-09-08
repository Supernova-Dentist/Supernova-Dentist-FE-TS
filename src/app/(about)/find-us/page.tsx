import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Find Us',
  description: 'Locate Supernova Dental Clinic on the map. Find our address, contact information, and directions.',
};

export default function Location() {
  return (
    <>
      <div className='flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />

          <section className='mb-12'>
            <h1 className='text-4xl sm:text-5xl font-bold my-8 text-center sm:text-left text-grey'>
              Find Supernova Dental Clinic
            </h1>
            <p className='text-lg sm:text-xl mb-6 text-center sm:text-left text-lightGrey'>
              Locate Supernova Dental Clinic on the map. Find our address, contact information, and directions.
            </p>

            <div className='my-6'>
              <DynamicGoogleMap />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='md:col-span-1 mt-12'>
                <h2 className='text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left text-gray'>
                  Our Address
                </h2>
                <ul className='text-center sm:text-left'>
                  <li className='mb-3'>Marsh Lane, Huntworth,</li>
                  <li className='mb-3'>Bridgwater, Alliance Building</li>
                  <li className='mb-3'>TA6 6LQ</li>
                  <li className='mb-3 sm:max-w-80'>
                    <GetDirectionsForm />
                  </li>
                </ul>
              </div>

              <div className='md:col-span-1 mt-12'>
                <h2 className='text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left text-gray'>
                  Contact Us
                </h2>
                <div className='flex flex-col items-center sm:items-start'>
                  <p className='text-base sm:text-lg mb-2 text-center sm:text-left text-lightGrey'>
                    Phone: (123) 456-7890
                  </p>
                  <p className='text-base sm:text-lg mb-2 text-center sm:text-left text-lightGrey'>
                    Email:{' '}
                    <a href='mailto:info@supernovadentalclinic.com' className='underline'>
                      info@supernovadentalclinic.com
                    </a>
                  </p>
                  <p className='text-base sm:text-lg mb-2 text-center sm:text-left text-lightGrey'>
                    Website:{' '}
                    <a
                      href='http://www.supernovadentalclinic.com'
                      className='underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      www.supernovadentalclinic.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
