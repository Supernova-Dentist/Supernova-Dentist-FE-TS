import GalleryGrid from '@/app/(media)/gallery/utils/GalleryGrid';
import { BLOG_LIMIT } from '@/lib/constants';
import fetchMediaPosts from '@/services/wordpress/fetchMediaPosts';

export default async function FetchGalleryWrapper({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageParam = Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page;
  const categoryId = Array.isArray(searchParams.categories) ? searchParams.categories[0] : searchParams.categories;

  console.log({ searchParams });

  let page = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

  const { posts, totalPages } = await fetchMediaPosts(BLOG_LIMIT, page, categoryId);

  // Not ideal. Be better to redirect user in the blogs component or show some out of bounds UI
  if ((totalPages !== null && page > +totalPages) || page < 1) {
    page = 1;
  }

  return <GalleryGrid categoryId={categoryId} mediaPosts={posts} page={page} totalPages={Number(totalPages)} />;
}
