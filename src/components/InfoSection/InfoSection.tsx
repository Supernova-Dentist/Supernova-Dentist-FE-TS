import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceGridList from '@/components/ServiceGridList/ServiceGridList';
import ServiceGridTitle from '@/components/ServiceGridTitle/ServiceGridTitle';
import ServiceVideo from '@/components/ServiceVideo/ServiceVideo';

export default function InfoSection({ data, id }: { data: any; id?: string }) {
  const { title, descriptions, advantagesTitle, useCaseTitle, advantagesData, useCaseData, videoSrc } = data;

  return (
    <section id={id} className='py-8 px-4 md:py-18 lg:pb-28'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />

        {/* Video and Description */}
        <div className='flex flex-col gap-8'>
          {/* Description */}
          <div>
            <ServiceDescription className='mt-6 mb-4' description={descriptions[0]} />
            <ServiceDescription description={descriptions[1]} />
          </div>
          {/* Video */}
          <ServiceVideo videoSrc={videoSrc} />

        </div>

        {/* Grids */}
        <div className='mt-8 flex flex-col lg:flex-row gap-8'>
          <div className='flex-1'>
            <ServiceGridTitle title={advantagesTitle} />
            <ServiceGridList listItems={advantagesData} />
          </div>
          <div className='flex-1'>
            <ServiceGridTitle title={useCaseTitle} />
            <ServiceGridList listItems={useCaseData} />
          </div>
        </div>
      </div>
    </section>
  );
}
