import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceGridList from '@/components/ServiceGridList/ServiceGridList';
import ServiceGridTitle from '@/components/ServiceGridTitle/ServiceGridTitle';

export default function InfoSection({ data, advantagesData, useCaseData }: InfoSection) {
  const { title, descriptions, advantagesTitle, useCaseTitle } = data;

  return (
    <section className='py-8 px-4 md:py-18 lg:pb-28'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <ServiceDescription className='mt-6 mb-4' description={descriptions[0]} />
        <ServiceDescription description={descriptions[1]} />
        <ServiceGridTitle title={advantagesTitle} />
        <ServiceGridList listItems={advantagesData} />
        <ServiceGridTitle title={useCaseTitle} />
        <ServiceGridList listItems={useCaseData} />
      </div>
    </section>
  );
}
