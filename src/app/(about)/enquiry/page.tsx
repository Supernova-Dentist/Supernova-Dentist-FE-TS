import { EnquiryFormContent } from './utils/enquiry-form-content';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get in Touch with Our Dental Experts | Your Dental Clinic',
  description: 'Contact our experienced dental professionals to schedule an appointment or inquire about our services.',
};

export default function EnquiryForm() {
  return (
    <div className='flex flex-col items-center justify-center bg-lightGrey'>
      <section className='p-8 mt-24 w-full '>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-2xl mx-auto space-y-6 text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gold sm:text-6xl lg:text-7xl'>
              Get in touch with our team
            </h1>
            <p className='text-xl text-cream'>
              Please fill out the form below for advice, feedback or more information on the services we have to offer.
            </p>
          </div>
        </div>
        <hr className='border-t-2 border-gold my-12 w-1/2 mx-auto' />
      </section>

      <EnquiryFormContent />
    </div>
  );
}
