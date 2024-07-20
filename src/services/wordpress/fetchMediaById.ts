export default async function fetchMediaById(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL}/posts/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    // Ensure the class_list is included in the returned data

    return data;
  } catch (error) {
    console.error(`Error fetching media file with ID ${id}:`, error);
    throw error;
  }
}
