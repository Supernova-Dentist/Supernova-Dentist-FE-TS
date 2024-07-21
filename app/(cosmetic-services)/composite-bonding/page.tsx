import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import FAQ from '@/components/FAQ/FAQ';
import type { Metadata } from 'next';
import Image from 'next/image';
import { faqItems } from './utils/faqItems';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CheckIcon } from '@radix-ui/react-icons';

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
              Boost your confidence and achieve the smile you've always wanted with our composite bonding services. Book
              your appointment today!
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
                If you're self-conscious about the appearance of your teeth, composite bonding can help you achieve a
                more confident, beautiful smile.
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
                "I couldn't be happier with my composite bonding treatment! The team was professional, and the results
                were fantastic. My smile has never looked better!"
              </p>
              <p className='mt-4 font-medium text-gold'>Emily R.</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                "The procedure was quick and painless. I was impressed with how natural the composite bonding looks.
                Highly recommend it to anyone looking to enhance their smile."
              </p>
              <p className='mt-4 font-medium text-gold'>James T.</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                "I had gaps between my teeth that were bothering me for years. The composite bonding transformed my
                smile completely. Excellent service and results!"
              </p>
              <p className='mt-4 font-medium text-gold'>Sophia L.</p>
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

  function BrushIcon(props) {
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
        <path d='m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08' />
        <path d='M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z' />
      </svg>
    );
  }

  function CalendarIcon(props) {
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

  function CheckIcon(props) {
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

  function SmileIcon(props) {
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

  function SparkleIcon(props) {
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
        <path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' />
      </svg>
    );
  }

  function ThumbsUpIcon(props) {
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

  function WrenchIcon(props) {
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
        <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' />
      </svg>
    );
  }

  function XIcon(props) {
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
        <path d='M18 6 6 18' />
        <path d='m6 6 12 12' />
      </svg>
    );
  }
}
