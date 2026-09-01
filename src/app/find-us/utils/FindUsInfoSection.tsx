import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import { DentallyPortal } from '@/lib/constants';
import { practiceLocation } from '@/lib/practiceLocation';
import Link from 'next/link';

export default function FindUsInfoSection() {
  return (
    <section className='bg-ivory px-4 py-16 sm:px-6 md:py-24 lg:px-8' aria-labelledby='visit-information-heading'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 max-w-2xl'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Plan your visit</p>
          <h2 id='visit-information-heading' className='text-3xl leading-tight sm:text-4xl'>Everything you need before you arrive</h2>
        </div>

        <div className='grid gap-6 lg:grid-cols-[0.82fr_1.18fr]'>
          <div className='rounded-[1.25rem] border border-stone bg-porcelain p-6 sm:p-8'>
            <h3 className='text-2xl'>Opening hours</h3>
            <dl className='mt-5 divide-y divide-stone text-taupe'>
              {practiceLocation.openingHours.map((item) => (
                <div key={item.day} className='flex justify-between gap-4 py-3'>
                  <dt>{item.day}</dt>
                  <dd className='font-semibold text-obsidian'>{item.hours}</dd>
                </div>
              ))}
            </dl>

            <div className='mt-8 border-t border-stone pt-7'>
              <h3 className='text-2xl'>Ready to visit?</h3>
              <p className='mt-4 leading-7 text-taupe'>Book through the patient portal or send the practice an enquiry.</p>
              <div className='mt-6 flex flex-wrap gap-3'>
                <Link
                  href={DentallyPortal}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex min-h-11 items-center rounded-full border border-champagne bg-champagne px-5 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'
                >
                  Register or book online
                </Link>
                <Link
                  href='/enquiry?ref=find-us'
                  className='inline-flex min-h-11 items-center rounded-full border border-obsidian/20 px-5 py-3 text-sm font-semibold text-obsidian transition-colors hover:border-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'
                >
                  Make an enquiry
                </Link>
              </div>
            </div>

            <div className='mt-8 border-t border-stone pt-7'>
              <h3 className='text-2xl'>Plan your route</h3>
              <p className='mt-4 leading-7 text-taupe'>
                Enter your postcode to open directions to Supernova Dental in Google Maps.
              </p>
              <div className='mt-5 max-w-md'>
                <GetDirectionsForm />
              </div>
            </div>
          </div>

          <div className='rounded-[1.25rem] bg-obsidian p-6 text-ivory sm:p-8'>
            <h3 className='text-2xl'>Reserved patient parking</h3>
            <p className='mt-4 max-w-xl leading-7 text-ivory/75'>{practiceLocation.parking}</p>
            <div className='mt-7 overflow-hidden rounded-xl border border-champagne/30 bg-deep-navy'>
              <video
                className='aspect-video w-full object-cover'
                controls
                preload='metadata'
                playsInline
                aria-label='Supernova Dental reserved patient parking information video'
              >
                <source src='/assets/videos/supernova_parking.mp4' type='video/mp4' />
                Your browser does not support the parking information video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
