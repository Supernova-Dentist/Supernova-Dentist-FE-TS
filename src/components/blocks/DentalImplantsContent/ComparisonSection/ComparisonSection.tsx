import ComparisonTable from '@/components/ComparisonTable/ComparisonTable';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function ComparisonSection() {
  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title='Dental Restoration Comparison' className='mb-6 text-center' />
        <p className='text-center text-cream mb-8'>
          Compare dental implants with bridges and dentures to find the best option for your tooth replacement needs.
        </p>
        <div className='overflow-x-auto'>
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
}
