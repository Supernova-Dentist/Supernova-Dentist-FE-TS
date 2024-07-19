export default async function fetchBlogPostById(id: string) {
  try {
    const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/posts/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
