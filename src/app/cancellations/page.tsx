import { practiceLocation } from '@/lib/practiceLocation';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cancellation Policy | Supernova Dental, Bridgwater',
  description:
    'Read our policy on cancellations, lateness and missed appointments. Please give at least two working days’ notice to cancel or rearrange your appointment.',
  alternates: { canonical: '/cancellations' },
};

export default function CancellationsPage() {
  return (
    <main className='mt-20 bg-porcelain text-obsidian'>
      <header className='bg-obsidian text-ivory'>
        <div className='mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20'>
          <Link href='/practice' className='inline-flex min-h-11 items-center text-sm text-ivory/75 underline underline-offset-4 hover:text-champagne'>
            About Supernova Dental
          </Link>
          <p className='mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-champagne'>Planning your visit</p>
          <h1 className='mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl'>Cancellations, lateness &amp; missed appointments</h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-ivory/80'>
            Appointment time is reserved especially for you. Giving us notice when your plans change helps us offer
            that time to another patient and keep care running smoothly.
          </p>
        </div>
      </header>

      <div className='mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16'>
        <div className='border-l-2 border-champagne bg-white p-6 sm:p-8'>
          <h2 className='text-2xl'>At a glance</h2>
          <p className='mt-4 leading-7'>Please give at least <strong>two working days’ notice</strong> to cancel or rearrange.</p>
          <p className='mt-3 leading-7'>
            For short-notice cancellations and missed appointments, the fee is <strong>£200 per hour of booked
            appointment time or the cost of the appointment, whichever is lower</strong>.
          </p>
        </div>

        <div className='mt-12 space-y-10 text-base leading-8'>
          <section aria-labelledby='cancelling'>
            <h2 id='cancelling' className='mb-4 text-2xl sm:text-3xl'>Cancelling or rearranging</h2>
            <p>
              If you cannot attend, please contact our team as soon as possible. Cancellations or changes made with
              less than two working days’ notice are treated as short-notice cancellations and are subject to the fee above.
              If you are unsure of your cancellation deadline, please contact reception.
            </p>
          </section>
          <section aria-labelledby='lateness'>
            <h2 id='lateness' className='mb-4 text-2xl sm:text-3xl'>If you are running late</h2>
            <p>
              Please call us to let us know. Your clinician will assess whether there is enough time to complete your
              appointment safely. If the remaining time is insufficient, we may need to rearrange your appointment
              and the missed-appointment fee may apply.
            </p>
          </section>
          <section aria-labelledby='missed'>
            <h2 id='missed' className='mb-4 text-2xl sm:text-3xl'>Missed appointments</h2>
            <p>
              If you do not attend your appointment without cancelling, the missed-appointment fee applies.
              Please contact our team to discuss your next appointment and any questions about the charge.
            </p>
          </section>
          <section aria-labelledby='travel'>
            <h2 id='travel' className='mb-4 text-2xl sm:text-3xl'>Travel and unexpected delays</h2>
            <p>
              Please allow enough time for your journey, including traffic and parking. If you are delayed, contact
              us as soon as possible. Our cancellation and missed-appointment policy also applies to delays caused
              by transport or travel difficulties. Please speak to our team if exceptional circumstances have
              affected your attendance.
            </p>
          </section>
          <section aria-labelledby='fees'>
            <h2 id='fees' className='mb-4 text-2xl sm:text-3xl'>How the fee is calculated</h2>
            <p>
              The hourly charge is calculated using the time reserved for your appointment, then capped at the
              appointment cost. For example, a 30-minute appointment has a time-based charge of £100. If the
              appointment costs £80, the fee is £80; if it costs £150, the fee is £100.
            </p>
          </section>
          <section aria-labelledby='respect'>
            <h2 id='respect' className='mb-4 text-2xl sm:text-3xl'>Respect for our team</h2>
            <p>
              We ask all patients to treat our team with courtesy and respect. Abusive or threatening behaviour
              towards our staff, whether in person, by telephone or in writing, will not be tolerated.
            </p>
          </section>
        </div>

        <section aria-labelledby='contact' className='mt-12 border-t border-obsidian/15 pt-9'>
          <h2 id='contact' className='text-2xl sm:text-3xl'>Need to change your appointment?</h2>
          <p className='mt-4 leading-7'>Please get in touch with our reception team.</p>
          <div className='mt-5 flex flex-wrap gap-4'>
            <a href={practiceLocation.phoneHref} className='inline-flex min-h-11 items-center rounded-full bg-obsidian px-6 py-3 text-sm font-semibold text-ivory hover:bg-deep-navy'>
              Call {practiceLocation.phone}
            </a>
            <a href={`mailto:${practiceLocation.email}`} className='inline-flex min-h-11 items-center px-2 py-3 text-sm underline underline-offset-4'>
              Email reception
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
