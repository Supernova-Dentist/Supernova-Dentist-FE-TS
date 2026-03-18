import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import { EnquiryFormContent } from './utils/enquiry-form-content';

export const metadata: Metadata = {
  title: 'Private Dentist in Bridgwater | Contact Us | Supernova Dental',
  description:
    'Contact Supernova Dental in Bridgwater, Somerset to book an appointment, arrange a consultation or get professional advice from our friendly dental team.',
  keywords:
    'contact Supernova Dental, dental enquiries Bridgwater, dentist contact Bridgwater, dental practice Bridgwater, dental consultation Somerset, get in touch with dentist, contact a dentist Bridgwater, dental services Somerset, dentist appointment Bridgwater, trusted dentist Bridgwater, Supernova Dental contact, dental assistance Bridgwater',
};

export default function EnquiryForm() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        {/* Breadcrumb */}
        <div className='p-4 md:px-6 lg:pt-6 pb-10 flex justify-start mx-auto max-w-3xl'>
          <BreadCrumb />
        </div>
        {/* HighlightCard */}
        <HighlightCard
          title='Get in Touch with Our Team'
          description=' Please fill out the form below for advice, feedback, or more information on the services we have to offer.'
          logoSrc='/favicon.ico'
        />


        {/* Enquiry Form Content */}
        <EnquiryFormContent />
      </div>
    </div>
  );
}
