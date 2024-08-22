import ComparisonTable from '@/components/ComparisonTable/ComparisonTable';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function ComparisonSection({ data }: ComparisonSection) {
  const { title, description, content } = data;

  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} className='mb-6 text-center sm:text-left' />
        <p className='text-center sm:text-left text-cream mb-8'>{description}</p>
        <div className='overflow-x-auto'>
          <ComparisonTable data={content} />
        </div>
      </div>
    </section>
  );
}
