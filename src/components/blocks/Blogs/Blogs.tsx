import React from 'react';
import BlogBox from '@/components/BlogBox/BlogBox';
import fetchBlogPosts from '@/services/wordpress/fetchPosts';

// Layout for blogs is a hacky atm. Consider using 3 columns instead or a grid system
export default async function Blogs() {
  const data = await fetchBlogPosts();

  return (
    <section className='mx-auto max-w-[1556px] my-20 px-6 sm:px-12'>
      <div className='flex justify-center'>
        <div className='flex flex-wrap gap-12 justify-center'>
          {data?.map((post: any) => (
            <React.Fragment key={post.id}>
              <BlogBox id={post.id} title={post.title.rendered} date={post.date} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
