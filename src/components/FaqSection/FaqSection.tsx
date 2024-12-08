import FAQ from '@/components/FAQ/FAQ';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function FaqSection({ faqItems, id }: { faqItems: any, id: string }) {
  return (
    <section id={id} className='bg-white py-12 px-4 md:py-20 lg:py-28 flex justify-center'>
      <div className='mx-auto max-w-3xl'>
        <SectionTitle title='Frequently Asked Questions' className='mb-6 text-center text-3xl font-semibold' />
        <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />
        <p className='text-left text-lg text-gray-600 mb-12'>
          We have compiled a list of frequently asked questions to help you understand more about our services if your
          question is not answered here, please feel free to contact us:
        </p>
        <FAQ faqItems={faqItems} />
      </div>
    </section>
  );
}
