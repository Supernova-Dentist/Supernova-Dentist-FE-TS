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
    <main className='min-w-0 overflow-x-clip bg-[#f7f5f0] text-[#171923]'>
      <section className='relative overflow-hidden bg-[#171923] text-white'>
        <div className='absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#b9975b]/20 blur-3xl' aria-hidden='true' />
        <div className='relative mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24'>
          <div className='mb-16'><BreadCrumb tone='dark' /></div>
          <div className='grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-end'>
            <div className='max-w-3xl'>
              <p className='mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#d6b978]'>We&apos;re here to help</p>
              <h1 className='max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl'>How can we help?</h1>
              <p className='mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl'>Tell us a little about what you need and our friendly team will get back to you. Supernova Dental is easy to reach from Bridgwater, Taunton, Burnham-on-Sea, Highbridge and surrounding Somerset areas.</p>
            </div>
            <aside className='rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-6 backdrop-blur sm:p-8' aria-label='Alternative contact details'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-[#d6b978]'>Prefer to speak to us?</p>
              <div className='mt-6 space-y-4'>
                {contactLinks.map(({ label, value, href, Icon }) => (
                  <Link key={label} href={href} className='group flex min-w-0 items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b978]'>
                    <Icon className='h-5 w-5 shrink-0 text-[#d6b978]' aria-hidden='true' />
                    <span className='min-w-0'><span className='block text-xs uppercase tracking-[0.14em] text-white/55'>{label}</span><span className='block truncate text-base font-medium text-white'>{value}</span></span>
                  </Link>
                ))}
              </div>
              <Link href='/find-us' className='mt-6 inline-flex min-h-11 items-center rounded-full border border-[#d6b978] px-5 text-sm font-semibold text-[#f2d79e] transition-colors hover:bg-[#d6b978] hover:text-[#171923] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b978]'>Visit our Find Us page</Link>
            </aside>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24' aria-labelledby='enquiry-form-heading'>
        <div className='grid gap-12 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20'>
          <div className='lg:pt-8'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#98783e]'>Start a conversation</p>
            <h2 id='enquiry-form-heading' className='mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl'>Send us an enquiry</h2>
            <p className='mt-5 leading-7 text-[#68645f]'>Whether you are looking for advice, considering a treatment or would like to arrange a visit, send us your details and we&apos;ll be happy to help.</p>
            <div className='mt-10 space-y-6 border-t border-[#ded8cc] pt-7 text-sm text-[#68645f]'>
              <div className='flex gap-3'><FiMapPin className='mt-0.5 h-5 w-5 shrink-0 text-[#98783e]' aria-hidden='true' /><p>{practiceLocation.address}</p></div>
              <div className='flex gap-3'><FiClock className='mt-0.5 h-5 w-5 shrink-0 text-[#98783e]' aria-hidden='true' /><div><p className='font-semibold text-[#171923]'>Opening hours</p>{practiceLocation.openingHours.map((hours) => <p key={hours.day}>{hours.day}: {hours.hours}</p>)}</div></div>
            </div>
          </div>
          <div id='enquiry-form' className='min-w-0'><EnquiryFormContent /><p className='mt-5 text-center text-sm leading-6 text-[#68645f]'>Your enquiry will be sent to the Supernova Dental team. Please avoid including urgent or emergency information in this form.</p></div>
        </div>
      </section>
    </main>
  );
}
