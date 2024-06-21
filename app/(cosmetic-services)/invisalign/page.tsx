import FAQ from '@/components/FAQ/FAQ';
import type { Metadata } from 'next';
import Image from 'next/image';
import { faqItems } from './utils/faqItems';

export const metadata: Metadata = {
  title: 'Supernova Dental | Invisalign',
  description:
    'Discover the benefits of Invisalign at Supernova Dental. Straighten your teeth with clear, comfortable aligners tailored to your smile.',
};

export default function Invisalign() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
      <div className='w-full max-w-5xl'>
        <h1 className='text-4xl font-semibold mb-6 text-left'>Invisalign at Supernova Dental</h1>
        <p className='text-lg mb-4 text-left'>
          At Supernova Dental, we offer Invisalign, the clear alternative to traditional braces. Invisalign aligners are
          custom-made for your teeth, providing a comfortable and nearly invisible way to straighten your smile.
        </p>
        <div className='flex flex-col items-start'>
          <h2 className='text-2xl font-semibold mt-8 mb-4 text-left'>Why Choose Invisalign?</h2>
          <ul className='list-disc list-inside text-lg mb-8 text-left'>
            <li>Clear and virtually invisible aligners</li>
            <li>Comfortable and removable for easy cleaning</li>
            <li>Customized treatment plans tailored to your needs</li>
            <li>No dietary restrictions, unlike traditional braces</li>
            <li>Minimal disruption to your daily life</li>
          </ul>

          <div className='flex flex-col space-y-8 py-6 mb-6'>
            <h2 className='text-2xl font-semibold mt-8 mb-4 text-left'>Our Process</h2>
            <div className='flex flex-col md:flex-row md:space-x-8'>
              <div className='md:w-1/2'>
                <p className='text-lg mb-4 text-left'>
                  Starting your Invisalign journey at Supernova Dental is simple:
                </p>
                <ol className='list-decimal list-inside text-lg mb-8 text-left'>
                  <li>Schedule a consultation with our Invisalign specialist.</li>
                  <li>Get a digital scan of your teeth to create your custom aligners.</li>
                  <li>Receive your aligners and begin your treatment plan.</li>
                  <li>Enjoy regular check-ins to monitor your progress.</li>
                  <li>Achieve your perfect smile!</li>
                </ol>
              </div>
              <div className='md:w-1/2'>
                <Image
                  src='/assets/images/invisalign-process.jpg'
                  alt='Invisalign Process'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-8'>
            <div className='flex flex-col md:flex-row items-center md:space-x-8'>
              <Image
                src='/assets/images/invisalign.jpg'
                alt='Invisalign Aligners'
                width={800}
                height={500}
                className='w-full md:w-1/2 rounded-md shadow-lg'
              />
              <p className='text-lg text-left w-full md:w-1/2 mt-4 md:mt-0'>
                Invisalign aligners are clear, making them a discreet option for teeth straightening.
              </p>
            </div>
            <div className='flex flex-col md:flex-row items-center md:space-x-8'>
              <p className='text-lg text-left w-full md:w-1/2'>
                Our digital scan ensures a perfect fit for your custom aligners.
              </p>
              <img
                src='/assets/images/invisalign-xray.jpg'
                alt='Digital Scan'
                className='w-full md:w-1/2 rounded-md shadow-lg'
              />
            </div>
            <div className='flex flex-col md:flex-row items-center md:space-x-8'>
              <img
                src='/assets/images/invisalign-ball.jpg'
                alt='Invisalign Lifestyle'
                className='w-full md:w-1/2 rounded-md shadow-lg'
              />
              <p className='text-lg text-left w-full md:w-1/2 mt-4 md:mt-0'>
                Experience minimal disruption to your daily life with Invisalign.
              </p>
            </div>
          </div>
          <p className='text-lg mt-12 text-left'>
            Ready to transform your smile? Contact us today to schedule your Invisalign consultation and take the first
            step towards a confident, beautiful smile.
          </p>
        </div>
      </div>
        <div className='min-h-60 min-w-full flex flex-col items-center justify-center bg-gray-100 py-10'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>Frequently Asked Questions</h1>
        <div className='w-full max-w-2xl bg-white shadow-lg rounded-lg p-6'>
          <FAQ faqItems={faqItems} />
        </div>
      </div>
    </div>
  );
}
