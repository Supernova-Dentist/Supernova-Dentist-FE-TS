import fetchBlogPosts from '@/services/wordpress/fetchPosts';
import Blogs from '../blocks/Blogs/Blogs';

export default async function FetchBlogsWrapper({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageParam = Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page;
  const page = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;
  const limit = 6;

  const data = await fetchBlogPosts(limit, page);
  const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/posts`);
  const totalPages = res.headers.get('X-WP-TotalPages');

  return <Blogs data={data} page={page} totalPages={Number(totalPages)} />;
}
