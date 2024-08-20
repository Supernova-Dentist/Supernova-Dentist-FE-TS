import ServiceHeader from '@/components/ServiceHeader/ServiceHeader';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceActions from '@/components/ServiceActions/ServiceActions';
import ServiceStatsContainer from '@/components/ServiceStatsContainer/ServiceStatsContainer';

export default function ServiceBox({ title, subTitle, mainText, benefitText, stats }: ServiceBox) {
  return (
    <div className='relative max-w-3xl rounded-lg bg-white p-8 shadow-lg md:p-12'>
      <ServiceHeader title={title} subTitle={subTitle} className='mb-4' />
      <ServiceDescription description={mainText} />
      <ServiceDescription className='mt-6 mb-8' description={benefitText} />
      <ServiceStatsContainer stats={stats} />
      <ServiceActions />
    </div>
  );
}
