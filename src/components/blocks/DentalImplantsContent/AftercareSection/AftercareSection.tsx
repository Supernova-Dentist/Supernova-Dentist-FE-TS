import afterCareData from '@/app/(cosmetic-services)/dental-implants/utils/afterCareData';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceGridList from '@/components/ServiceGridList/ServiceGridList';

export default function AftercareSection() {
  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title='Dental Implant After Care Instructions' />
        <p className='mt-4 text-cream max-w-[700px]'>
          Proper care is essential to ensure the success and longevity of your dental implants. Follow these guidelines
          to maintain optimal oral health and implant function:
        </p>
        <ServiceGridList listItems={afterCareData} textColors={{ header: 'text-gold', text: 'text-cream' }} />
        <p className='mt-8 text-cream'>
          Some initial discomfort or swelling is normal following the placement of dental implants. If you experience
          persistent pain, unusual swelling, or other issues, contact your dentist promptly.
        </p>
      </div>
    </section>
  );
}
