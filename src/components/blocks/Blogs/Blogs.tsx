'use client';

import React, { useCallback, useEffect, useState } from 'react';
import BlogBox from '@/components/BlogBox/BlogBox';
import fetchBlogPosts from '@/services/wordpress/fetchPosts';
import { decodeHtmlEntities } from '@/utils/format/decodeHtmlEntities';
import PaginationWrapper from '@/components/Pagination/Pagination';

export default function Blogs() {
  // const data: Post[] = await fetchBlogPosts();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchBlogPosts(limit, currentPage);
        setPosts(posts);

        const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL}/posts`);
        const totalPosts = res.headers.get('x-wp-total');
        console.log({ totalPages, limit });

        if (totalPosts !== null) {
          setTotalPages(Math.ceil(+totalPosts / limit));
        }
      } catch (error) {
        console.log({ error });
      }
    };

    void fetchData();
  }, [currentPage]);

  const handlePageChange = useCallback((page: number) => {
    console.log({ page });

    setCurrentPage(page);
  }, []);

  return (
    <section className='container mx-auto max-w-[1500px] px-4 py-12 sm:px-10'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12'>
        {posts?.map((post: Post) => (
          <BlogBox
            key={post.id}
            id={post.id}
            title={decodeHtmlEntities(post.title.rendered)}
            date={post.date}
            excerpt={post.excerpt.rendered}
          />
        ))}
      </div>
      <PaginationWrapper currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </section>
  );
}
