export default async function fetchBlogPosts() {
  try {
    const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/posts`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
