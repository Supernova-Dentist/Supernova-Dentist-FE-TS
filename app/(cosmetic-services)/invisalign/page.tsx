import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import FAQ from '@/components/FAQ/FAQ';
import {
  SliderWithImageComparison,
} from '@/components/SliderWithImageComparison/SliderWithImageComparison';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
    <>
      <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />
          <h1 className='text-5xl font-bold my-8 text-left text-gray-800'>Invisalign at Supernova Dental</h1>
          <p className='text-xl mb-6 text-left text-gray-700'>
            At Supernova Dental, we offer Invisalign, the clear alternative to traditional braces. Invisalign aligners
            are custom-made for your teeth, providing a comfortable and nearly invisible way to straighten your smile.
          </p>
          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Why Choose Invisalign?</h2>
            <ul className='list-disc list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
              <li>Clear and virtually invisible aligners</li>
              <li>Comfortable and removable for easy cleaning</li>
              <li>Customized treatment plans tailored to your needs</li>
              <li>No dietary restrictions, unlike traditional braces</li>
              <li>Minimal disruption to your daily life</li>
            </ul>
          </section>
          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Our Process</h2>
            <div className='flex flex-col md:flex-row md:space-x-8'>
              <div className='md:w-1/2 mb-6 md:mb-0'>
                <p className='text-xl mb-4 text-left text-gray-700'>
                  Starting your Invisalign journey at Supernova Dental is simple:
                </p>
                <ol className='list-decimal list-inside text-xl mb-8 text-left text-gray-700 space-y-2'>
                  <li>Schedule a consultation with our Invisalign specialist.</li>
                  <li>Get a digital scan of your teeth to create your custom aligners.</li>
                  <li>Receive your aligners and begin your treatment plan.</li>
                  <li>Enjoy regular check-ins to monitor your progress.</li>
                  <li>Achieve your perfect smile!</li>
                </ol>
                <Button className='mt-4'>Schedule a Consultation</Button>
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
          </section>
          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Invisalign Benefits</h2>
            <div className='flex flex-col space-y-8'>
              <Card className='flex flex-col md:flex-row items-center md:space-x-8 p-6'>
                <Image
                  src='/assets/images/invisalign.jpg'
                  alt='Invisalign Aligners'
                  width={800}
                  height={500}
                  className='w-full md:w-1/2 rounded-md shadow-lg'
                />
                <p className='text-xl text-left w-full md:w-1/2 mt-4 md:mt-0 text-gray-700'>
                  Invisalign aligners are clear, making them a discreet option for teeth straightening.
                </p>
              </Card>
              <Card className='flex flex-col md:flex-row items-center md:space-x-8 p-6'>
                <p className='text-xl text-left w-full md:w-1/2 text-gray-700'>
                  Our digital scan ensures a perfect fit for your custom aligners.
                </p>
                <img
                  src='/assets/images/invisalign-xray.jpg'
                  alt='Digital Scan'
                  className='w-full md:w-1/2 rounded-md shadow-lg'
                />
              </Card>
              <Card className='flex flex-col md:flex-row items-center md:space-x-8 p-6'>
                <img
                  src='/assets/images/invisalign-ball.jpg'
                  alt='Invisalign Lifestyle'
                  className='w-full md:w-1/2 rounded-md shadow-lg'
                />
                <p className='text-xl text-left w-full md:w-1/2 mt-4 md:mt-0 text-gray-700'>
                  Experience minimal disruption to your daily life with Invisalign.
                </p>
              </Card>
            </div>
          </section>
          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Patient Testimonials</h2>
            <div className='flex flex-col space-y-8'>
              <Card className='p-6'>
                <p className='text-xl text-gray-700'>
                  &ldquo;Supernova Dental made my Invisalign experience so easy and stress-free. Highly
                  recommend!&rdquo;
                </p>
                <p className='text-right text-gray-500 mt-4'>- John Doe</p>
              </Card>
              <Card className='p-6'>
                <p className='text-xl text-gray-700'>
                  &ldquo;I love my new smile! The team at Supernova Dental was fantastic.&rdquo;
                </p>
                <p className='text-right text-gray-500 mt-4'>- Jane Smith</p>
              </Card>
            </div>
          </section>
          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Before and After Gallery</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
                imageWidth={800}
                imageHeight={600}
              />
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
                imageWidth={800}
                imageHeight={600}
              />
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
                imageWidth={800}
                imageHeight={600}
              />
            </div>
          </section>
          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Meet Our Team</h2>
            <div className='flex flex-col md:flex-row md:space-x-8'>
              <Card className='flex flex-col md:flex-row items-center md:space-x-8 p-6'>
                <Image
                  src='/assets/images/service-icon-4.png'
                  alt='Dr. John Smith'
                  width={200}
                  height={200}
                  className='rounded-full shadow-lg'
                />
                <div className='mt-4 md:mt-0'>
                  <h3 className='text-2xl font-semibold text-gray-800'>Dr. John Smith</h3>
                  <p className='text-xl text-gray-700'>Orthodontist</p>
                  <p className='text-lg text-gray-600 mt-2'>
                    Dr. Smith has over 20 years of experience in orthodontics and has helped hundreds of patients
                    achieve their perfect smile with Invisalign.
                  </p>
                </div>
              </Card>
              <Card className='flex flex-col md:flex-row items-center md:space-x-8 p-6'>
                <Image
                  src='/assets/images/service-icon-4.png'
                  alt='Dr. Jane Doe'
                  width={200}
                  height={200}
                  className='rounded-full shadow-lg'
                />
                <div className='mt-4 md:mt-0'>
                  <h3 className='text-2xl font-semibold text-gray-800'>Dr. Jane Doe</h3>
                  <p className='text-xl text-gray-700'>Dental Specialist</p>
                  <p className='text-lg text-gray-600 mt-2'>
                    With a passion for patient care, Dr. Doe ensures every Invisalign treatment is tailored to meet
                    individual needs and deliver the best results.
                  </p>
                </div>
              </Card>
            </div>
          </section>
          <p className='text-xl my-12 text-left text-gray-700'>
            Ready to transform your smile? Contact us today to schedule your Invisalign consultation and take the first
            step towards a confident, beautiful smile.
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
