import { BLOG_LIMIT } from '@/lib/constants';
import { truncateText } from '@/utils/format/truncateString';

export default async function fetchBlogPosts(limit = BLOG_LIMIT, page = 1, query = ''): Promise<FetchPostsResponse> {
  const params = new URLSearchParams({
    per_page: limit.toString(),
    page: page.toString(),
    search: query ?? '',
  });

  try {
    const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/categories`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const totalPages = res.headers.get('X-WP-TotalPages');
    const data: Post[] = await res.json();
    console.log({ data });

    if (!Array.isArray(data)) {
      throw new Error('Unexpected data format: Expected an array');
    }

    const postsWithTruncatedExcerpt = data?.map((post: Post) => ({
      ...post,
      excerpt: { rendered: truncateText(post.excerpt.rendered, 100) },
    }));

    return { posts: postsWithTruncatedExcerpt, totalPages: Number(totalPages) };
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
