import ConsentFormsAccessGate from '@/components/ConsentFormsAccessGate/ConsentFormsAccessGate';
import { CONSENT_FORMS_SESSION_COOKIE, isConsentFormsSessionValid } from '@/lib/consentFormsAuth';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consent Forms | Supernova Dental Practice',
  robots: {
    index: false,
    follow: false,
  },
};

const consentForms = [
  {
    title: 'Dental Extraction / Oral Surgery',
    description:
      'Prepare the treatment details, review the risks and alternatives with the patient, and collect all required signatures.',
    href: '/consent-forms/extraction-oral-surgery',
    status: 'Available',
  },
] as const;

interface ConsentFormsPageProps {
  searchParams?: {
    next?: string | string[];
  };
}

export default function ConsentFormsPage({ searchParams }: ConsentFormsPageProps) {
  const sessionToken = cookies().get(CONSENT_FORMS_SESSION_COOKIE)?.value;
  const requestedPath = typeof searchParams?.next === 'string' ? searchParams.next : '/consent-forms';
  const redirectTo = requestedPath.startsWith('/') && !requestedPath.startsWith('//') ? requestedPath : '/consent-forms';

  if (!isConsentFormsSessionValid(sessionToken)) {
    return <ConsentFormsAccessGate redirectTo={redirectTo} />;
  }

  return (
    <main className='min-h-[100dvh] bg-gradient-to-b from-cream/60 via-white to-white px-5 pb-24 pt-36 sm:px-8'>
      <div className='mx-auto max-w-5xl'>
        <header className='mx-auto max-w-2xl text-center'>
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold'>
            <svg
              aria-hidden='true'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.8'
              className='h-8 w-8'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z' />
              <path strokeLinecap='round' strokeLinejoin='round' d='M14 3v6h5M9 13h6M9 17h6' />
            </svg>
          </div>

          <p className='mt-6 text-sm font-bold uppercase tracking-[0.2em] text-gold'>Supernova Dental Practice</p>
          <h1 className='mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>Consent forms</h1>
          <p className='mt-4 text-base leading-7 text-muted-foreground sm:text-lg'>
            Select a form below to begin a new patient consent workflow.
          </p>
        </header>

        <section className='mt-12' aria-labelledby='available-forms-heading'>
          <div className='mb-5 flex items-end justify-between gap-4'>
            <div>
              <h2 id='available-forms-heading' className='text-xl font-bold tracking-tight'>
                Available forms
              </h2>
              <p className='mt-1 text-sm text-muted-foreground'>Choose the appropriate procedure.</p>
            </div>
            <span className='shrink-0 rounded-full border bg-white px-3 py-1 text-xs font-semibold text-muted-foreground'>
              {consentForms.length} form
            </span>
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            {consentForms.map((form) => (
              <Link
                key={form.href}
                href={form.href}
                className='group flex min-h-64 flex-col rounded-2xl border-2 border-border bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 sm:p-7'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white'>
                    <svg
                      aria-hidden='true'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='h-6 w-6'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M9 11.5 11 14l4-5' />
                      <path strokeLinecap='round' strokeLinejoin='round' d='M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z' />
                      <path strokeLinecap='round' strokeLinejoin='round' d='M14 3v6h5' />
                    </svg>
                  </div>
                  <span className='rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700'>
                    {form.status}
                  </span>
                </div>

                <h3 className='mt-6 text-xl font-bold leading-snug tracking-tight group-hover:text-gold'>{form.title}</h3>
                <p className='mt-3 flex-1 text-sm leading-6 text-muted-foreground'>{form.description}</p>

                <div className='mt-6 flex min-h-12 items-center justify-between rounded-xl bg-muted/50 px-4 font-bold transition-colors group-hover:bg-gold group-hover:text-white'>
                  <span>Open consent form</span>
                  <svg
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='h-5 w-5 transition-transform group-hover:translate-x-1'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m9 18 6-6-6-6' />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
