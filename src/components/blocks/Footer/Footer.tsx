'use client';

import PromotionFooter from '@/components/PromotionFooter/PromotionFooter';
import { practiceLocation } from '@/lib/practiceLocation';
import { socialIcons } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FooterLink from '../FooterLink/FooterLink';

const patientCareLinks = [
  { name: 'Cosmetic Dentistry', link: '/cosmetic-dentistry' },
  { name: 'General Dentistry', link: '/general-dentistry' },
  { name: 'Invisalign', link: '/cosmetic-dentistry/invisalign' },
  { name: 'Dental Implants', link: '/cosmetic-dentistry/dental-implants' },
  { name: 'Emergency Dentistry', link: '/general-dentistry/emergency-dentistry' },
  { name: 'New Patient Examination', link: '/general-dentistry/new-patient-examination' },
  { name: 'Refer a Friend', link: '/refer-a-friend' },
];

const practiceLinks = [
  { name: 'Our Practice', link: '/practice' },
  { name: 'Meet the Team', link: '/team' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Find Us', link: '/find-us' },
  { name: 'Make an Enquiry', link: '/enquiry' },
  { name: 'Patient Portal', link: 'https://supernova.portal.dental' },
];

const professionalLinks = [
  { name: 'Professional Referrals', link: '/professional-referrals' },
  { name: 'Careers', link: '/careers' },
];

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
          <div className='w-full px-4 py-14 sm:px-10 md:py-16'>
            <div className='mx-auto grid max-w-screen-xl gap-10 text-gray-300 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
              <FooterColumn title='Patient care' links={patientCareLinks} />
              <FooterColumn title='Practice' links={practiceLinks} />
              <FooterColumn title='For professionals' links={professionalLinks} />

              <section aria-labelledby='footer-contact-heading' className='flex flex-col gap-2 sm:items-start'>
                <h2 id='footer-contact-heading' className='text-gold text-lg uppercase'>
                  Contact &amp; visit
                </h2>
                <address className='not-italic leading-6 text-gray-300'>{practiceLocation.address}</address>
                <a href={`mailto:${practiceLocation.email}`} className='inline-flex min-h-11 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'>
                  {practiceLocation.email}
                </a>
                <a href={practiceLocation.phoneHref} className='inline-flex min-h-11 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'>
                  {practiceLocation.phone}
                </a>
                <a href={practiceLocation.whatsappHref} target='_blank' rel='noopener noreferrer' className='inline-flex min-h-11 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'>
                  WhatsApp {practiceLocation.whatsapp}
                </a>
                <p className='pt-2 leading-6 text-gray-300'>
                  Monday-Friday: 08:15-18:15
                  <br />
                  Saturday: 09:00-13:00
                  <br />
                  Sunday: Closed
                </p>
                <div className='mt-2 flex flex-wrap gap-2'>
                  <Link href='/find-us' className='inline-flex min-h-11 items-center rounded-sm bg-gold px-3 py-2 font-semibold text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'>
                    Find us
                  </Link>
                  <a href={practiceLocation.directionsUrl} target='_blank' rel='noopener noreferrer' className='inline-flex min-h-11 items-center rounded-sm border border-gold px-3 py-2 font-semibold text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'>
                    Get directions
                  </a>
                </div>
                <div className='mt-3 flex gap-3'>
                  {socialIcons.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`Visit Supernova Dental on ${social.name}`}
                      className='flex min-h-11 min-w-11 items-center justify-center rounded-sm bg-gold p-1 text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <PromotionFooter />
        </>
      )}
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ name: string; link: string }> }) {
  return (
    <nav aria-label={title}>
      <h2 className='text-gold text-lg uppercase'>{title}</h2>
      <ul className='mt-2 flex flex-col items-start gap-1'>
        {links.map((link, index) => (
          <FooterLink key={link.name} link={link.link} name={link.name} index={index} />
        ))}
      </ul>
    </nav>
  );
}
