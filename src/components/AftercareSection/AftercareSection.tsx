import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceGridList from '@/components/ServiceGridList/ServiceGridList';

export default function AftercareSection({ data }: AftercareSection) {
  const { title, descriptions, content } = data;

  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <div className='flex justify-center'>
          <p className='mt-4 mb-6 text-cream max-w-[720px]'>{descriptions?.[0]}</p>
        </div>
        <ServiceGridList listItems={content} textColors={{ header: 'text-gold', text: 'text-cream' }} />
        <p className='mt-8 text-cream'>{descriptions?.[1]}</p>
      </div>
    </section>
  );
}
