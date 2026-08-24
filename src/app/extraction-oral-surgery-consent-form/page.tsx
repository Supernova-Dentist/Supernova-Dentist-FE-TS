import { ExtractionOralSurgeryConsentFormContent } from '@/components/ExtractionOralSurgeryConsentFormContent/ExtractionOralSurgeryConsentFormContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Extraction / Oral Surgery Consent | Supernova Dental Practice',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExtractionOralSurgeryConsentFormPage() {
  return (
    <div className='flex flex-col py-40 min-h-[100dvh]'>
      <h1 className='text-3xl font-bold text-center mt-8'>SUPERNOVA DENTAL PRACTICE</h1>
      <h2 className='text-2xl font-semibold text-center mt-4'>CONSENT FOR DENTAL EXTRACTION / ORAL SURGERY</h2>

      <ExtractionOralSurgeryConsentFormContent />
    </div>
  );
}
