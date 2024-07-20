export default async function fetchMediaById(id) {
  try {
    const res = await fetch(`${process.env.WORDPRESS_API_BASE_URL}/wp/v2/media/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching media file with ID ${id}:`, error);
    throw error;
  }
}
