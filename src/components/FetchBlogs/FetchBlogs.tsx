import fetchBlogPosts from '@/services/wordpress/fetchPosts';
import Blogs from '../blocks/Blogs/Blogs';
import { BLOG_LIMIT } from '@/lib/constants';

export default async function FetchBlogsWrapper({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageParam = Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page;
  const searchQuery = Array.isArray(searchParams.search) ? searchParams.search[0] : searchParams.search;
  const categories = Array.isArray(searchParams.categories) ? searchParams.categories[0] : searchParams.categories;

  let page = pageParam !== undefined && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

  const { posts, totalPages } = await fetchBlogPosts(BLOG_LIMIT, page, searchQuery, categories);

  // Not ideal. Be better to redirect user in the blogs component or show some out of bounds UI
  if ((totalPages !== null && page > +totalPages) || page < 1) {
    page = 1;
  }

  return <Blogs posts={posts} page={page} totalPages={Number(totalPages)} />;
}
