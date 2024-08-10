import { Card } from '@/components/ui/card';
import { type JSX, type SVGProps } from 'react';

export default function Component() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-lightGrey'>
        <div className='container mx-auto grid gap-8 px-4 md:px-6 md:grid-cols-2 md:items-center'>
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold tracking-tight text-gold sm:text-5xl md:text-6xl'>
              Scott, Dental Practitioner
            </h1>
            <div className='text-lg text-cream'>GPhC Registration Number: 12345678</div>
            <p className='max-w-[600px] text-cream md:text-xl'>
              Scott is a highly skilled and experienced Dental Practitioner, dedicated to helping clients achieve their
              desired aesthetic goals.
            </p>
          </div>
          <div className='flex justify-center'>
            <img
              src='/placeholder.svg'
              width='400'
              height='400'
              alt='Scott'
              className='rounded-full w-[300px] h-[300px] object-cover'
              style={{ aspectRatio: '400/400', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
        <div className='container mx-auto grid gap-8 px-4 md:px-6 md:grid-cols-2'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-gold'>What Scott Can Help You With</h2>
            <p className='max-w-[600px] text-cream md:text-xl'>
              Scott specializes in a wide range of aesthetic treatments, including:
            </p>
            <ul className='grid gap-4 text-lg text-cream'>
              <li className='flex items-center gap-2'>
                <CheckIcon className='h-6 w-6 text-cream' />
                Botox and Dermal Fillers
              </li>
              <li className='flex items-center gap-2'>
                <CheckIcon className='h-6 w-6 text-cream' />
                Skin Rejuvenation Treatments
              </li>
              <li className='flex items-center gap-2'>
                <CheckIcon className='h-6 w-6 text-cream' />
                Advanced Facial Treatments
              </li>
              <li className='flex items-center gap-2'>
                <CheckIcon className='h-6 w-6 text-cream' />
                Laser Hair Removal
              </li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <div className='w-full max-w-md rounded-lg overflow-hidden'>
              <img src='/services-placeholder.svg' alt='Services' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
        <div className='container mx-auto grid gap-8 px-4 md:px-6'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Certifications</h2>
            <p className='max-w-[600px] text-muted-foreground md:text-xl'>
              Scott is highly qualified and accredited, with the following certifications:
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            <Card className='flex flex-col items-center justify-center gap-4 p-6 text-center'>
              <BadgeIcon className='h-12 w-12 text-gold' />
              <div className='text-lg text-cream'>Advanced Botox and Dermal Fillers</div>
              <div className='text-sm text-cream'>Certified by the Aesthetic Complications Expert Group</div>
            </Card>
            <Card className='flex flex-col items-center justify-center gap-4 p-6 text-center'>
              <BadgeIcon className='h-12 w-12 text-gold' />
              <div className='text-lg text-cream'>Laser Hair Removal Specialist</div>
              <div className='text-sm text-cream'>Certified by the British Medical Laser Association</div>
            </Card>
            <Card className='flex flex-col items-center justify-center gap-4 p-6 text-center'>
              <BadgeIcon className='h-12 w-12 text-gold' />
              <div className='text-lg text-cream'>Advanced Skin Rejuvenation Treatments</div>
              <div className='text-sm text-cream'>
                Certified by the International Association of Aesthetic Practitioners
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container mx-auto grid gap-8 px-4 md:px-6'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Client Testimonials</h2>
            <p className='max-w-[600px] text-muted-foreground md:text-xl'>
              Hear what our clients have to say about Scott&apos;s services:
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            <Card className='flex flex-col items-center justify-center gap-4 p-6 text-center'>
              <div className='text-lg text-cream'>&quot;Scott is amazing! My skin has never looked better.&quot;</div>
              <div className='text-sm text-muted-foreground'>- Jane Doe</div>
            </Card>
            <Card className='flex flex-col items-center justify-center gap-4 p-6 text-center'>
              <div className='text-lg text-cream'>&quot;Highly recommend Scott for any aesthetic treatments.&quot;</div>
              <div className='text-sm text-muted-foreground'>- John Smith</div>
            </Card>
            <Card className='flex flex-col items-center justify-center gap-4 p-6 text-center'>
              <div className='text-lg text-cream'>&quot;Professional and knowledgeable. Great results!&quot;</div>
              <div className='text-sm text-muted-foreground'>- Sarah Johnson</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function BadgeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z' />
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
