import React from 'react';
import BlogBox from '@/components/BlogBox/BlogBox';
import blogMockData from './blogMockData';

export default function Blogs() {
  return (
    <section className='mx-auto max-w-[1556px] my-20 px-6 sm:px-12'>
      <div className='flex justify-center'>
        <div className='flex flex-wrap gap-12 justify-center'>
          {blogMockData.map(({ id, title, date, description }) => (
            <React.Fragment key={id}>
              <BlogBox id={id} title={title} date={date} description={description} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
