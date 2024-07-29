import fetchBlogPosts from '@/services/wordpress/fetchPosts';
import Blogs from '../blocks/Blogs/Blogs';

export default async function FetchBlogsWrapper({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageParam = Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page;
  let page = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;
  const limit = 6;

  const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/posts`);
  const totalPages = res.headers.get('X-WP-TotalPages');

  // Not ideal. Be better to redirect user in the blogs component or show some out of bounds UI
  if (totalPages !== null && page > +totalPages) {
    page = 1;
  }

  const data = await fetchBlogPosts(limit, page);

  return <Blogs data={data} page={page} totalPages={Number(totalPages)} />;
}
