import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import FAQ from '@/components/FAQ/FAQ';
import { SliderWithImageComparison } from '@/components/SliderWithImageComparison/SliderWithImageComparison';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { type JSX, type SVGProps } from 'react';
import { faqItems } from './utils/faqItems';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function CompositeBonding() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section className="relative w-full bg-[url('/assets/images/composite-bonding-process.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32 lg:py-40">
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl rounded-lg bg-white p-8 shadow-lg md:p-12'>
            <h1 className='text-3xl font-bold text-gold md:text-4xl'>Composite Bonding</h1>
            <p className='mt-2 text-lg font-medium text-grey'>Enhance your smile with our expert dental services</p>
            <p className='mt-4 text-lightGrey'>
              Composite bonding is a cosmetic dental procedure that can improve the appearance of your teeth. Our
              skilled dentists use a tooth-colored resin material to fill in gaps, chips, or discoloration, creating a
              natural-looking and seamless smile.
            </p>
            <div className='mt-6 flex flex-col gap-4 sm:flex-row'>
              <div className='flex flex-col gap-1'>
                <span className='text-lg font-bold text-gold'>$299</span>
                <span className='text-sm text-lightGrey'>per treatment</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-lg font-bold text-gold'>1 hour</span>
                <span className='text-sm text-lightGrey'>treatment duration</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-lg font-bold text-gold'>2-3</span>
                <span className='text-sm text-lightGrey'>treatments required</span>
              </div>
            </div>

            <p className='mt-6 text-lightGrey'>
              Boost your confidence and achieve the smile you&apos;ve always wanted with our composite bonding services.
              Book your appointment today!
            </p>
            <div className='mt-6 flex flex-col gap-4 sm:flex-row'>
              <Link
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md bg-gold px-6 text-sm font-medium text-white shadow transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                prefetch={false}
              >
                Book Now
              </Link>
              <Link
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-cream hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='mx-auto px-4 md:px-6 container py-4 md:py-12'>
        <BreadCrumb />
      </div>
      <section className='py-12 md:py-18 lg:pb-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>What is Composite Bonding?</h2>
          <p className='mt-4 text-lightGrey'>
            Composite bonding is a cosmetic dental procedure that uses a tooth-colored resin material to improve the
            appearance of your teeth. This versatile treatment can be used to:
          </p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Fill in Gaps</h3>
                <p className='text-lightGrey'>Close gaps and spaces between teeth for a more uniform smile.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Repair Chips</h3>
                <p className='text-lightGrey'>Restore the shape and appearance of chipped or cracked teeth.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Whiten Discolored Teeth</h3>
                <p className='text-lightGrey'>Improve the color and brightness of stained or discolored teeth.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Reshape Teeth</h3>
                <p className='text-lightGrey'>
                  Alter the shape and size of teeth for a more balanced, symmetrical smile.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='py-12 md:py-20 lg:py-28 bg-grey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Who Can Benefit from Composite Bonding?</h2>
          <p className='mt-4 text-cream'>
            Composite bonding is a versatile treatment that can benefit a wide range of patients:
          </p>
          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <SmileIcon className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Cosmetic Concerns</h3>
              <p className='mt-2 text-lightGrey'>
                If you&apos;re self-conscious about the appearance of your teeth, composite bonding can help you achieve
                a more confident, beautiful smile.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <SmileIcon className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Dental Imperfections</h3>
              <p className='mt-2 text-lightGrey'>
                Composite bonding can address a variety of dental issues, such as gaps, chips, cracks, and
                discoloration, for a more uniform and healthy-looking smile.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <ThumbsUpIcon className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Confidence Boost</h3>
              <p className='mt-2 text-lightGrey'>
                By improving the appearance of your teeth, composite bonding can help you feel more confident and
                comfortable in social and professional settings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 md:py-20 lg:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>The Composite Bonding Process</h2>
          <p className='mt-4 text-lightGrey'>
            Our experienced dentists follow a simple and straightforward process to ensure your composite bonding
            treatment is comfortable and effective:
          </p>
          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Consultation'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Consultation</h3>
                <p className='mt-2 text-lightGrey'>
                  During your initial consultation, we’ll discuss your goals and evaluate your dental health to
                  determine if composite bonding is the right solution for you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Preparation'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Preparation</h3>
                <p className='mt-2 text-lightGrey'>
                  We prepare your teeth by cleaning and etching the surface to ensure the bonding material adheres
                  properly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Application'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Application</h3>
                <p className='mt-2 text-lightGrey'>
                  The composite resin is applied and shaped to match the natural contours of your teeth. It is then
                  cured using a special light.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className='py-12 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6 text-center'>Client Testimonials</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;I couldn&apos;t be happier with my composite bonding treatment! The team was professional, and the
                results were fantastic. My smile has never looked better!&quot;
              </p>
              <p className='my-4 font-medium text-gold'>Emily R.</p>
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
                imageWidth={400}
                imageHeight={300}
              />
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;The procedure was quick and painless. I was impressed with how natural the composite bonding
                looks. Highly recommend it to anyone looking to enhance their smile.&quot;
              </p>
              <p className='my-4 font-medium text-gold'>James T.</p>

              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
                imageWidth={400}
                imageHeight={300}
              />
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;The procedure was quick and painless. I was impressed with how natural the composite bonding
                looks. Highly recommend it to anyone looking to enhance their smile.&quot;
              </p>
              <p className='mt-4 font-medium text-gold'>James T.</p>

              <div>
                
              </div>
                <SliderWithImageComparison
                  beforeImageSrc='/assets/images/teeth-before.jpg'
                  beforeImageAlt='Before Invisalign'
                  afterImageSrc='/assets/images/teeth-after.png'
                  afterImageAlt='After Invisalign'
                  imageWidth={200}
                  imageHeight={300}
                  
                />
            
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-12 md:py-20 lg:py-28 flex justify-center'>
        <div className='w-full max-w-4xl px-4 md:px-6 text-center'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6'>Frequently Asked Questions</h2>
          <div className='bg-cream p-6 rounded-lg shadow-lg'>
            <FAQ faqItems={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );

  function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M8 2v4' />
        <path d='M16 2v4' />
        <rect width='18' height='18' x='3' y='4' rx='2' />
        <path d='M3 10h18' />
      </svg>
    );
  }

  function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M20 6 9 17l-5-5' />
      </svg>
    );
  }

  function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='10' />
        <path d='M8 14s1.5 2 4 2 4-2 4-2' />
        <line x1='9' x2='9.01' y1='9' y2='9' />
        <line x1='15' x2='15.01' y1='9' y2='9' />
      </svg>
    );
  }

  function ThumbsUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M7 10v12' />
        <path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z' />
      </svg>
    );
  }
}
