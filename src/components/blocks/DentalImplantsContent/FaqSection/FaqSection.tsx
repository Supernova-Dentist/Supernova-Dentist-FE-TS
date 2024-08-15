import { faqItems } from '@/app/(cosmetic-services)/dental-implants/utils/faqItems';
import FAQ from '@/components/FAQ/FAQ';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function FaqSection() {
  return (
    <section id='faq' className='bg-white py-12 px-4 md:py-20 lg:py-28 flex justify-center'>
      <div className='w-full max-w-4xl px-4 md:px-6 text-center'>
        <SectionTitle title='Frequently Asked Questions' className='mb-6' />
        <div className='bg-cream p-6 rounded-lg shadow-lg'>
          <FAQ faqItems={faqItems} />
        </div>
      </div>
    </section>
  );
}
