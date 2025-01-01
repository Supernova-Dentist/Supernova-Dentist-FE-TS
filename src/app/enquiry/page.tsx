import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { type Metadata } from 'next';
import { EnquiryFormContent } from './utils/enquiry-form-content';

export const metadata: Metadata = {
  title: 'Get in Touch with Our Dental Experts | Your Dental Clinic',
  description: 'Contact our experienced dental professionals to schedule an appointment or inquire about our services.',
};

export default function EnquiryForm() {
  return (
    <div className='min-h-screen flex bg-gradient-to-b from-white to-cream justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <h1 className='text-4xl md:text-5xl text-gold font-bold text-center my-12 pt-6'>Get in touch with our team</h1>
        <hr className='border-t-2 border-gold w-20 mx-auto mb-16' />
        <div className='px-4 md:px-6 pb-10 flex justify-start mx-auto max-w-3xl'>
          <BreadCrumb />
        </div>
        <p className='text-center text-lg md:text-xl mb-8 max-w-[36rem] mx-auto'>
          Please fill out the form below for advice, feedback or more information on the services we have to offer.
        </p>

        <EnquiryFormContent />
      </div>
    </div>
  );
}
