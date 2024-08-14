import React from 'react';
import ServiceStat from './ServiceStat/ServiceStat';

export default function ServiceStats({ stats }: ServiceStatsProps) {
  return (
    <div className='flex flex-col gap-4 sm:flex-row justify-center'>
      {stats.map(({ title, text }) => (
        <React.Fragment key={title}>
          <ServiceStat title={title} text={text} />
        </React.Fragment>
      ))}
    </div>
  );
}
