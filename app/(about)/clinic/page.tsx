import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Supernova Dental | Our Clinic',
  description:
    'Explore Supernova Dental Clinic, our state-of-the-art facility designed for patient comfort and convenience.',
};

export default function Clinic() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />

          <section className='mb-12'>
            <h1 className='text-5xl font-bold my-8 text-left text-gray-800'>Welcome to Supernova Dental Clinic</h1>
            <p className='text-xl mb-6 text-left text-gray-700'>
              Supernova Dental Clinic is dedicated to providing high-quality dental care in a comfortable and welcoming
              environment. Our clinic is equipped with state-of-the-art technology and designed with patient comfort in
              mind.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='mb-6'>
                <Image
                  src='/assets/images/dental-exterior.jpg'
                  alt='Clinic Exterior'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
                <p className='text-lg mt-4 text-gray-700'>
                  Our modern clinic exterior welcomes patients with a professional and inviting atmosphere.
                </p>
              </div>
              <div className='mb-6'>
                <Image
                  src='/assets/images/dental-interior.jpg'
                  alt='Clinic Interior'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
                <p className='text-lg mt-4 text-gray-700'>
                  Inside, our clinic features a spacious and comfortable waiting area designed for relaxation and
                  convenience.
                </p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Facility Highlights</h2>
            <ul className='list-disc list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
              <li>Advanced dental equipment for precise diagnostics and treatment</li>
              <li>Comfortable treatment rooms with modern amenities</li>
              <li>Accessible location with ample parking space</li>
              <li>Wheelchair accessible facilities for all patients</li>
              <li>Relaxing environment to minimize patient stress and anxiety</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Parking and Accessibility</h2>
            <p className='text-xl mb-6 text-left text-gray-700'>
              Supernova Dental Clinic provides convenient parking facilities for our patients. We are committed to
              ensuring accessibility for all individuals, including those with mobility challenges.
            </p>
            <Image
              src='/assets/images/parking.jpg'
              alt='Parking Area'
              width={1200}
              height={600}
              className='rounded-md shadow-lg'
            />
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Visit Us</h2>
            <p className='text-xl mb-6 text-left text-gray-700'>
              We invite you to visit Supernova Dental Clinic and experience our commitment to exceptional dental care in
              a comfortable setting. Contact us today to schedule your appointment.
            </p>
            <div className='flex items-center space-x-4'>
              <button className='bg-gold hover:bg-amber-600 text-cream px-6 py-3 rounded-md shadow-md transition duration-300'>
                Book Appointment
              </button>
              <span className='text-gray'>or</span>
              <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-md shadow-md transition duration-300'>
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
