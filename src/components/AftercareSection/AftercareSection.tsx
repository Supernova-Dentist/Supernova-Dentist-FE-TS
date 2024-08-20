import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceGridList from '@/components/ServiceGridList/ServiceGridList';

export default function AftercareSection({ title, descriptions, data }: AftercareSection) {
  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <p className='mt-4 text-cream max-w-[700px]'>{descriptions?.[0]}</p>
        <ServiceGridList listItems={data} textColors={{ header: 'text-gold', text: 'text-cream' }} />
        <p className='mt-8 text-cream'>{descriptions?.[1]}</p>
      </div>
    </section>
  );
}
