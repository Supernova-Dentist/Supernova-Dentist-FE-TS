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
              Get in touch with our dental experts
            </h1>
            <p className='text-xl text-cream'>
              Our team of experienced dentists is here to provide you with top-notch dental care. Fill out the form
              below to schedule an appointment or inquire about our services.
            </p>
          </div>
        </div>
        <hr className='border-t-2 border-gold my-12 w-1/2 mx-auto' />
      </section>

      <EnquiryFormContent />
    </div>
  );
}
