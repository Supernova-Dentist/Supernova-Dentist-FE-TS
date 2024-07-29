import { truncateText } from '@/utils/format/truncateString';

export default async function fetchBlogPosts(limit = 6, page = 1): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/posts?per_page=${limit}&page=${page}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: Post[] = await res.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected data format: Expected an array');
    }

    const postsWithTruncatedExcerpt = data?.map((post: Post) => ({
      ...post,
      excerpt: { rendered: truncateText(post.excerpt.rendered, 100) },
    }));

    return postsWithTruncatedExcerpt;
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
