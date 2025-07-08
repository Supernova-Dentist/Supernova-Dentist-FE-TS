import ServiceActions from '@/components/ServiceActions/ServiceActions';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceHeader from '@/components/ServiceHeader/ServiceHeader';
import ServiceStatsContainer from '@/components/ServiceStatsContainer/ServiceStatsContainer';

export default function ServiceBox({ title, subTitle, benefitText, stats, statsTitle }: ServiceBox) {
  return (
    <div className='relative max-w-3xl rounded-lg bg-white p-8 shadow-2xl md:p-12'>
      <ServiceHeader title={title} subTitle={subTitle} className='mb-4' />
      <ServiceDescription className='mt-6 mb-8' description={benefitText} />
      {stats && stats.length > 0 && <ServiceStatsContainer stats={stats} statsTitle={statsTitle} />}
      <ServiceActions shouldCentre={!stats || stats.length === 0} />
    </div>
  );
}
