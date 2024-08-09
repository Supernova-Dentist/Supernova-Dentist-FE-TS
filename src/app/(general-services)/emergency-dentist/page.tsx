import type { Metadata } from 'next';
import Image from 'next/image';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import FAQ from '@/components/FAQ/FAQ';
import { faqItems } from './utils/faqItems';

export const metadata: Metadata = {
  title: 'Supernova Dental | Emergency Dentist',
  description:
    'Find emergency dental care at Supernova Dental. Our emergency dentists are here to help with urgent dental issues.',
};

export default function EmergencyDentist() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />
          <h1 className='text-5xl font-bold my-8 text-left text-gray-800'>Emergency Dentist at Supernova Dental</h1>
          <p className='text-xl mb-6 text-left text-gray-700'>
            At Supernova Dental, we provide prompt and compassionate emergency dental care to address urgent issues and
            alleviate pain. Our experienced team is here to help you during dental emergencies.
          </p>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>
              What Qualifies as a Dental Emergency?
            </h2>
            <ul className='list-disc list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
              <li>Severe toothache</li>
              <li>Broken or knocked-out teeth</li>
              <li>Abscesses or infections</li>
              <li>Excessive bleeding from the mouth</li>
              <li>Injuries to the mouth, gums, or jaw</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Our Emergency Dental Services</h2>
            <div className='flex flex-col md:flex-row md:space-x-8'>
              <div className='md:w-1/2 mb-6 md:mb-0'>
                <p className='text-xl mb-4 text-left text-gray-700'>Our emergency dental services include:</p>
                <ol className='list-decimal list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
                  <li>Prompt evaluation and treatment</li>
                  <li>Management of dental pain and discomfort</li>
                  <li>Restoration of broken or damaged teeth</li>
                  <li>Emergency root canal therapy</li>
                  <li>Extraction of severely damaged or infected teeth</li>
                </ol>
              </div>
              <div className='md:w-1/2'>
                <Image
                  src='/assets/images/emergency-dentist.png'
                  alt='Emergency Dental Services'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
              </div>
            </div>
          </section>

          <p className='text-xl my-12 text-left text-gray-700'>
            If you are experiencing a dental emergency, contact us immediately. Our emergency hotline is available 24/7
            to provide you with the care and support you need.
          </p>
        </div>
      </div>

      <div className='min-h-full min-w-full flex flex-col items-center justify-center bg-gray-100 py-16'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>Frequently Asked Questions</h1>
        <div className='w-full max-w-2xl bg-cream shadow-lg rounded-lg p-8'>
          <FAQ faqItems={faqItems} />
        </div>
      </div>
    </>
  );
}
