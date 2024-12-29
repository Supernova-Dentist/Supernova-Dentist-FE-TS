import ServiceActions from '@/components/ServiceActions/ServiceActions';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceHeader from '@/components/ServiceHeader/ServiceHeader';
import ServiceStatsContainer from '@/components/ServiceStatsContainer/ServiceStatsContainer';

export default function ServiceBox({ title, subTitle, benefitText, stats }: ServiceBox) {
  return (
    <div className='relative max-w-3xl rounded-lg bg-white p-8 shadow-lg md:p-12'>
      <ServiceHeader title={title} subTitle={subTitle} className='mb-4' />
      <ServiceDescription className='mt-6 mb-8 hidden md:block' description={benefitText} />
      <ServiceStatsContainer stats={stats} />
      <ServiceActions />
    </div>
  );
}
