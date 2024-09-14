import ComparisonTable from '@/components/ComparisonTable/ComparisonTable';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function ComparisonSection({ data, id }: ComparisonSection) {
  const { title, description, content } = data;

  return (
    <section id={id} className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} className='mb-4' />
        <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />
        <p className='text-center text-cream mb-10'>{description}</p>
        <div className='overflow-x-auto'>
          <ComparisonTable data={content} />
        </div>
      </div>
    </section>
  );
}
