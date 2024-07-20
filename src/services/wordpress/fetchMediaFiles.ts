export default async function fetchMediaPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL}/posts`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    let data = await res.json();

    // Ensure data is an array
    if (!Array.isArray(data)) {
      throw new Error('Expected an array from API');
    }

    // Log each post's class_list for debugging
    data.forEach((post) => {
      console.log('Post class names:', post.class_list);
    });

    // Filter posts where class_list includes 'category-image'
    const filteredPosts = data.filter((post) => post.class_list?.includes('category-image'));

    // Log filtered posts to confirm the filtering
    console.log('Filtered posts:', filteredPosts);

    // Map the filtered posts to the desired format
    return filteredPosts.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      class_list: post.class_list, // Include class_list
      jetpack_featured_media_url: post.jetpack_featured_media_url,
      alt_text: post.alt_text,
    }));
  } catch (error) {
    console.error('Error fetching media files:', error);
    throw error;
  }
}
