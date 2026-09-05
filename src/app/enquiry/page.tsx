import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { practiceLocation } from '@/lib/practiceLocation';
import { type Metadata } from 'next';
import Link from 'next/link';
import { FiClock, FiMail, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { EnquiryFormContent } from './utils/enquiry-form-content';

export const metadata: Metadata = {
  title: 'Private Dentist in Bridgwater | Contact Us | Supernova Dental',
  description:
    'Contact Supernova Dental in Bridgwater, Somerset to book an appointment, arrange a consultation or get professional advice from our friendly dental team.',
  alternates: { canonical: '/enquiry' },
  keywords:
    'contact Supernova Dental, dental enquiries Bridgwater, dentist contact Bridgwater, dental practice Bridgwater, dental consultation Somerset, get in touch with dentist, contact a dentist Bridgwater, dental services Somerset, dentist appointment Bridgwater, trusted dentist Bridgwater, Supernova Dental contact, dental assistance Bridgwater',
};

const contactLinks = [
  { label: 'Call the practice', value: practiceLocation.phone, href: practiceLocation.phoneHref, Icon: FiPhone },
  { label: 'Email the team', value: practiceLocation.email, href: `mailto:${practiceLocation.email}`, Icon: FiMail },
  { label: 'WhatsApp us', value: practiceLocation.whatsapp, href: practiceLocation.whatsappHref, Icon: FiMessageCircle },
];

export default function EnquiryForm() {
  return (
    <main className='mt-12 min-w-0 overflow-x-clip bg-porcelain text-obsidian'>
      <section className='relative overflow-hidden bg-obsidian text-ivory'>
        <div className='absolute inset-0 luxury-hero-glow' aria-hidden='true' />
        <div className='relative mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24'>
          <BreadCrumb tone='dark' />
          <div className='mt-12 grid gap-10 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-x-16'>
            <div className='max-w-xl lg:pt-6'>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-gold-text-dark'>Supernova Dental</p>
              <h1 className='mt-4 text-balance text-5xl font-normal leading-tight tracking-[-0.035em] sm:text-6xl'>How can we help?</h1>
              <p className='mt-6 text-lg leading-8 text-ivory/75'>Tell us a little about what you need and our friendly team will get back to you.</p>
            </div>

            <div id='enquiry-form' className='min-w-0 lg:row-span-2'>
              <EnquiryFormContent />
              <p className='mt-1 text-center text-sm leading-6 text-ivory/65'>Your enquiry will be sent to the Supernova Dental team. Please avoid including urgent or emergency information in this form.</p>
            </div>

            <aside className='border-t border-ivory/15 pt-7' aria-label='Alternative contact details'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-gold-text-dark'>Prefer to contact us directly?</p>
              <div className='mt-4 space-y-2'>
                {contactLinks.map(({ label, value, href, Icon }) => (
                  <Link key={label} href={href} className='group flex min-w-0 items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'>
                    <Icon className='h-5 w-5 shrink-0 text-gold-text-dark' aria-hidden='true' />
                    <span className='min-w-0'><span className='block text-xs uppercase tracking-[0.14em] text-ivory/55'>{label}</span><span className='block truncate text-base font-medium text-ivory'>{value}</span></span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20' aria-labelledby='visit-heading'>
        <div className='grid gap-8 rounded-[1.5rem] border border-stone bg-white p-6 sm:p-8 md:grid-cols-2'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-text-light'>Visit the practice</p>
            <h2 id='visit-heading' className='mt-3 text-3xl font-normal'>Supernova Dental in Bridgwater</h2>
            <div className='mt-6 flex gap-3 text-sm leading-7 text-taupe'><FiMapPin className='mt-1 h-5 w-5 shrink-0 text-gold-text-light' aria-hidden='true' /><p>{practiceLocation.address}</p></div>
            <Link href='/find-us' className='mt-5 inline-flex min-h-11 items-center rounded-full border border-obsidian/20 px-5 text-sm font-semibold text-obsidian transition-colors hover:border-gold-text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'>Visit our Find Us page</Link>
          </div>
          <div className='border-t border-stone pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0'>
            <div className='flex gap-3 text-sm leading-7 text-taupe'><FiClock className='mt-1 h-5 w-5 shrink-0 text-gold-text-light' aria-hidden='true' /><div><p className='font-semibold text-obsidian'>Opening hours</p>{practiceLocation.openingHours.map((hours) => <p key={hours.day}>{hours.day}: {hours.hours}</p>)}</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
