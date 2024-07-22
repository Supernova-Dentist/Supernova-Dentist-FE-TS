import React from 'react';
import BlogBox from '@/components/BlogBox/BlogBox';
import fetchBlogPosts from '@/services/wordpress/fetchPosts';
import { decodeHtmlEntities } from '@/utils/format/decodeHtmlEntities';

export default async function Blogs() {
  const data = await fetchBlogPosts();

  return (
    <section className='container mx-auto max-w-[1500px] px-4 py-12 sm:px-10'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {data?.map((post: any) => (
          <BlogBox
            key={post.id}
            id={post.id}
            title={decodeHtmlEntities(post.title.rendered)}
            date={post.date}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
