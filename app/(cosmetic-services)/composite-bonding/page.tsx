import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import FAQ from '@/components/FAQ/FAQ';
import type { Metadata } from 'next';
import Image from 'next/image';
import { faqItems } from './utils/faqItems';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function CompositeBonding() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />
          <h1 className='text-5xl font-bold my-8 text-left text-gray-800'>Composite Bonding at Supernova Dental</h1>
          <p className='text-xl mb-6 text-left text-gray-700'>
            Composite bonding is a versatile cosmetic dental treatment offered at Supernova Dental. It uses a
            tooth-colored composite resin to enhance the appearance of your teeth, addressing issues such as chips,
            gaps, and discoloration.
          </p>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Why Choose Composite Bonding?</h2>
            <ul className='list-disc list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
              <li>Repair chipped or cracked teeth seamlessly</li>
              <li>Close gaps between teeth</li>
              <li>Reshape misaligned or irregular teeth</li>
              <li>Match the natural color of your teeth</li>
              <li>Quick and minimally invasive procedure</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Our Process</h2>
            <div className='flex flex-col md:flex-row md:space-x-8'>
              <div className='md:w-1/2 mb-6 md:mb-0'>
                <p className='text-xl mb-4 text-left text-gray-700'>
                  The composite bonding process at Supernova Dental involves:
                </p>
                <ol className='list-decimal list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
                  <li>Cleaning and preparing the tooth surface.</li>
                  <li>Applying the composite resin and shaping it to achieve the desired look.</li>
                  <li>Curing the resin with a special light for durability.</li>
                  <li>Polishing the bonding for a smooth finish.</li>
                </ol>
              </div>
              <div className='md:w-1/2'>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Composite Bonding Process'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
              </div>
            </div>
          </section>

          <p className='text-xl my-12 text-left text-gray-700'>
            Ready to enhance your smile with composite bonding? Contact us today to schedule a consultation and discover
            how this cosmetic treatment can transform your teeth.
          </p>
        </div>
      </div>

      <div className='min-h-full min-w-full flex flex-col items-center justify-center bg-gray-100 py-16'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>Frequently Asked Questions</h1>
        <div className='w-full max-w-2xl bg-white shadow-lg rounded-lg p-8'>
          <FAQ faqItems={faqItems} />
        </div>
      </div>
    </>
  );
}
