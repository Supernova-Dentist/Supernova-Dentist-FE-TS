import ServiceStats from '../ServiceStats/ServiceStats';

export default function ServiceStatsContainer({ stats }: ServiceStats) {
  return (
    <div className='flex flex-col-reverse md:flex-row md:justify-between'>
      <div className='flex flex-col gap-1 md:absolute md:right-0 md:bottom-0 md:w-auto md:p-6 '>
        <p className='text-sm text-lightGrey font-medium text-center'>On average:</p>
        <ServiceStats stats={stats} />
      </div>
    </div>
  );
}
