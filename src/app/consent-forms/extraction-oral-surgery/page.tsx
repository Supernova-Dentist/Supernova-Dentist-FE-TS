import { ExtractionOralSurgeryConsentFormContent } from '@/components/ExtractionOralSurgeryConsentFormContent/ExtractionOralSurgeryConsentFormContent';
import { CONSENT_FORMS_SESSION_COOKIE, isConsentFormsSessionValid } from '@/lib/consentFormsAuth';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dental Extraction / Oral Surgery Consent | Supernova Dental Practice',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExtractionOralSurgeryConsentFormPage() {
  const sessionToken = cookies().get(CONSENT_FORMS_SESSION_COOKIE)?.value;

  if (!isConsentFormsSessionValid(sessionToken)) {
    redirect('/consent-forms?next=/consent-forms/extraction-oral-surgery');
  }

  return (
    <div className='flex min-h-[100dvh] flex-col py-10'>
      <h1 className='text-3xl font-bold text-center mt-8'>SUPERNOVA DENTAL PRACTICE</h1>
      <h2 className='text-2xl font-semibold text-center mt-4'>CONSENT FOR DENTAL EXTRACTION / ORAL SURGERY</h2>

      <ExtractionOralSurgeryConsentFormContent />
    </div>
  );
}
