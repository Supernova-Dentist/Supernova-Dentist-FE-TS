import React from 'react';
import ServiceStat from './ServiceStat/ServiceStat';

export default function ServiceStats({ stats }: ServiceStats) {
  return (
    <div className='flex gap-4 flex-row justify-center'>
      {stats.map(({ title, text }) => (
        <React.Fragment key={title}>
          <ServiceStat title={title} text={text} />
        </React.Fragment>
      ))}
    </div>
  );
}
