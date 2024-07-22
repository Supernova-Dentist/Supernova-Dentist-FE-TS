import { truncateText } from '@/utils/format/truncateString';

export default async function fetchBlogPosts() {
  try {
    const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/posts`);
    const data = await res.json();

    const postsWithTruncatedExcerpt = data?.map((post: unknown) => ({
      ...post,
      excerpt: truncateText(post.excerpt.rendered, 60),
    }));

    return postsWithTruncatedExcerpt;
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
