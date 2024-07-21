import React from 'react';
import BlogBox from '@/components/BlogBox/BlogBox';
import fetchBlogPosts from '@/services/wordpress/fetchPosts';

export default async function Blogs() {
  const data = await fetchBlogPosts();

  return (
    <section className='container mx-auto max-w-[1500px] px-4 py-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {data?.map((post: any) => (
          <BlogBox key={post.id} id={post.id} title={post.title.rendered} date={post.date} />
        ))}
      </div>
    </section>
  );
}
