'use client';

import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import PromotionFooter from '@/components/PromotionFooter/PromotionFooter';
import { locationInfo, practiceInfo, socialIcons } from '@/lib/constants';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FooterLink from '../FooterLink/FooterLink';

const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export default function Footer() {
  const pathname = usePathname();

  const isConsultationPage =
    pathname === '/smile-makeover-consultation' ||
    pathname === '/book-appointment' ||
    pathname === '/implant-consultation';

  return (
    <footer className='bg-grey'>
      {isConsultationPage ? (
        <PromotionFooter />
      ) : (
        <>
          <div className='w-full px-4 py-12 sm:px-10 flex flex-col items-center justify-center'>
            <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-gray-300 max-w-screen-lg gap-6'>
              {/* Practice Info */}
              <ul className='flex flex-col items-center sm:items-start gap-1'>
                <li className='text-gold text-lg uppercase'>Practice Info</li>
                {practiceInfo.map((info, index) => (
                  <FooterLink key={info.name} link={info.link} name={info.name} index={index} />
                ))}
              </ul>

              {/* Hours */}
              <ul className='flex flex-col items-center sm:items-start gap-1'>
                <li className='text-gold text-lg uppercase'>Opening Hours</li>
                <li>Monday: 08:15–18:15</li>
                <li>Tuesday: 08:15–18:15</li>
                <li>Wednesday: 08:15–18:15</li>
                <li>Thursday: 08:15–18:15</li>
                <li>Friday: 08:15–18:15</li>
                <li>Saturday: 09:00–13:00</li>
                <li>Sunday: Closed</li>
              </ul>

              {/* Social */}
              <ul className='flex flex-col items-center sm:items-start gap-1'>
                <li className='text-gold text-lg uppercase'>Follow/Review Us</li>
                <li className='flex gap-4'>
                  {socialIcons.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`Visit Supernova Dental on ${social.name}`}
                      className='bg-gold p-1 rounded-sm flex justify-center items-center'
                    >
                      <div className='bg-gold p-1 rounded-sm flex justify-center items-center'>{social.icon}</div>
                    </Link>
                  ))}
                </li>
              </ul>

              {/* Contact */}
              <ul className='flex flex-col items-center sm:items-start gap-1'>
                <li className='text-gold text-lg uppercase'>Contact Us</li>
                <li>enquiries@supernovadental.co.uk</li>
                <li>Phone: 01278 228665</li>
                <li>WhatsApp: 07863 338815</li>
                <li className='flex gap-2'>
                  <a href='mailto:enquiries@supernovadental.co.uk' className='bg-gold py-1 px-2 rounded-sm text-white'>
                    Email Us
                  </a>
                  <a href='tel:+441278228665' className='bg-gold py-1 px-2 rounded-sm text-white'>
                    Call Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div className='flex flex-col items-center sm:items-start gap-1 text-white mx-auto justify-center mt-6'>
              <ul className='w-full'>
                <li className='text-gold text-lg uppercase text-center sm:text-left'>Location</li>
                <li className='text-center sm:text-left max-w-[10rem] mx-auto md:mx-0'>{locationInfo.address}</li>
              </ul>

              <div className='mb-2'>
                <GoogleMap />
              </div>

              <GetDirectionsForm />
            </div>
          </div>

          {/* Default footer CTA */}
          <PromotionFooter />
        </>
      )}
    </footer>
  );
}
