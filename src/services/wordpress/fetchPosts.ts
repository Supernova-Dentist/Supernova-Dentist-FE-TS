import { truncateText } from '@/utils/format/truncateString';

export default async function fetchBlogPosts() {
  try {
    const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/posts`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected data format: Expected an array');
    }

    const postsWithTruncatedExcerpt = data?.map((post: unknown) => ({
      ...post,
      excerpt: truncateText(post.excerpt.rendered, 100),
    }));

    return postsWithTruncatedExcerpt;
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
