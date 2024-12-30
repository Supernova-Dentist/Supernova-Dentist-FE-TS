import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { TabsFAQ } from '@/components/TabsFAQ/TabsFAQ';
import type { Metadata } from 'next';

// Define the metadata for the page
export const metadata: Metadata = {
  title: 'Supernova Dental | FAQ',
  description:
    'Find answers to common questions about Supernova Dental Clinic. Our FAQ covers office hours, location, procedures, insurance and appointments.',
};

export default function FAQ() {
  return (
    <>
      {/* Uncomment and adjust if you want to include the breadcrumb navigation */}
      {/* <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div> */}
      <TabsFAQ />
    </>
  );
}
