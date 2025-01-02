import { type Metadata } from 'next';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { EnquiryFormContent } from './utils/enquiry-form-content';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';

export const metadata: Metadata = {
  title: 'Contact Supernova Dental | Your Trusted Dental Clinic in Bridgwater, Somerset',
  description:
    'Have questions or need more details about our dental services? Get in touch with Supernova Dental in Bridgwater, Somerset for professional advice and assistance.',
};

export default function EnquiryForm() {
  return (
    <div className='min-h-screen flex bg-gradient-to-b from-white to-cream justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        {/* HighlightCard */}
        <HighlightCard
          title='Get in Touch with Our Team'
          description=' Please fill out the form below for advice, feedback, or more information on the services we have to offer.'
          logoSrc='/favicon.ico'
        />

        {/* Breadcrumb */}
        <div className='p-4 md:px-6 pb-10 flex justify-start mx-auto max-w-3xl'>
          <BreadCrumb />
        </div>

        {/* Enquiry Form Content */}
        <EnquiryFormContent />
      </div>
    </div>
  );
}
