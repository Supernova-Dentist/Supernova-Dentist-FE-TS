import { ExtractionOralSurgeryConsentFormContent } from '@/components/ExtractionOralSurgeryConsentFormContent/ExtractionOralSurgeryConsentFormContent';
import { getConsentClinicianGdcNumbers } from '@/data/consentClinicians';
import { CONSENT_FORMS_SESSION_COOKIE, isConsentFormsSessionValid } from '@/lib/consentFormsAuth';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Wisdom Tooth Removal / Oral Surgery Consent | Supernova Dental Practice',
  robots: {
    index: false,
    follow: false,
  },
};

export default function WisdomToothConsentFormPage() {
  const sessionToken = cookies().get(CONSENT_FORMS_SESSION_COOKIE)?.value;

  if (!isConsentFormsSessionValid(sessionToken)) {
    redirect('/consent-forms?next=/consent-forms/wisdom-tooth-removal');
  }

  return (
    <div className='flex min-h-[100dvh] min-w-0 flex-col px-3 py-10'>
      <h1 className='text-3xl font-bold text-center mt-8'>SUPERNOVA DENTAL PRACTICE</h1>
      <h2 className='text-2xl font-semibold text-center mt-4'>CONSENT FOR WISDOM TOOTH REMOVAL / ORAL SURGERY</h2>

      <ExtractionOralSurgeryConsentFormContent
        formType='wisdom-tooth'
        clinicianGdcNumbers={getConsentClinicianGdcNumbers()}
      />
    </div>
  );
}
