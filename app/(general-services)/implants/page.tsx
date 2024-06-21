import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import FAQ from '@/components/FAQ/FAQ';
import type { Metadata } from 'next';
import Image from 'next/image';
import { faqItems } from './utils/faqItems';

export const metadata: Metadata = {
  title: 'Supernova Dental | Dental Implants',
  description:
    'Learn about dental implants at Supernova Dental. Restore your smile with our advanced dental implant services.',
};

export default function DentalImplants() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />
          <h1 className='text-5xl font-bold my-8 text-left text-gray-800'>Dental Implants at Supernova Dental</h1>
          <p className='text-xl mb-6 text-left text-gray-700'>
            Dental implants are a revolutionary solution for replacing missing teeth. At Supernova Dental, we offer
            advanced implant services to restore your smile and improve your oral health.
          </p>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Why Choose Dental Implants?</h2>
            <ul className='list-disc list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
              <li>Natural-looking and functioning replacement for missing teeth</li>
              <li>Prevents bone loss and preserves facial structure</li>
              <li>Durable and long-lasting solution</li>
              <li>Restores chewing ability and speech</li>
              <li>Enhances confidence and smile aesthetics</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Our Dental Implant Process</h2>
            <div className='flex flex-col md:flex-row md:space-x-8'>
              <div className='md:w-1/2 mb-6 md:mb-0'>
                <p className='text-xl mb-4 text-left text-gray-700'>
                  The dental implant procedure at Supernova Dental involves:
                </p>
                <ol className='list-decimal list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
                  <li>Consultation and treatment planning</li>
                  <li>Implant placement surgery</li>
                  <li>Osseointegration (fusion of implant with jawbone)</li>
                  <li>Placement of abutment and crown</li>
                  <li>Follow-up care and maintenance</li>
                </ol>
              </div>
              <div className='md:w-1/2'>
                <Image
                  src='/assets/images/implants-process.jpg'
                  alt='Dental Implant Process'
                  width={350}
                  height={200}
                  className='rounded-md shadow-lg'
                />
              </div>
            </div>
          </section>

          <p className='text-xl my-12 text-left text-gray-700'>
            Ready to restore your smile with dental implants? Contact us today to schedule a consultation and discover
            how dental implants can transform your oral health and confidence.
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
