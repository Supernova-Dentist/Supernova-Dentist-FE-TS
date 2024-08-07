export default async function fetchMediaPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL}/posts?categories[]=686`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    // Ensure data is an array
    if (!Array.isArray(data)) {
      throw new Error('Expected an array from API');
    }

    // Log each post for debugging
    data.forEach((post) => {
      console.log('Posts:', post);
    });

    // Map the filtered posts to the desired format
    return data;
  } catch (error) {
    console.error('Error fetching media files:', error);
    throw error;
  }
}
