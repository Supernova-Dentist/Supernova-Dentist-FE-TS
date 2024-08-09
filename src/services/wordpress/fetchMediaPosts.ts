import { BLOG_LIMIT } from '@/lib/constants';

export default async function fetchMediaPosts(
  limit = BLOG_LIMIT,
  page = 1,
  categoryId = '686',
  categoryNames = ['image']
): Promise<FetchPostsResponse> {
  try {
    // Fetch categories to get their IDs
    const categoriesRes = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL}/categories?slug=${categoryNames.join(',')}`
    );
    if (!categoriesRes.ok) {
      throw new Error(`HTTP error! Status: ${categoriesRes.status}`);
    }

    const categoriesData = await categoriesRes.json();
    console.log('Fetched categories:', categoriesData);

    if (categoriesData.length === 0) {
      throw new Error('No categories found for the provided slugs');
    }

    const categoryIds = categoriesData.map((category) => category.id);
    console.log('Category IDs:', categoryIds);

    // Create a map of category slugs to IDs
    const categoriesSlugToIdMap: Record<string, number> = {};
    categoriesData.forEach((category) => {
      categoriesSlugToIdMap[category.slug] = category.id;
    });

    // Construct the query parameter for category IDs
    const categoriesQuery = `categories[]=${categoryId}`;
    console.log('Categories query:', categoriesQuery);

    // Set up URLSearchParams with additional parameters
    const params = new URLSearchParams({
      per_page: limit.toString(),
      page: page.toString(),
      categories: categoryId.toString(),
    });

    // Construct the full URL for fetching posts
    const postsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL}/posts?${categoriesQuery}&${params.toString()}`;
    console.log('Posts URL:', postsUrl);

    const res = await fetch(postsUrl);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const totalPages = res.headers.get('X-WP-TotalPages');
    const data: Post[] = await res.json();
    console.log('Fetched posts data:', data);

    if (!Array.isArray(data)) {
      throw new Error('Expected an array from API');
    }

    // Log each post for debugging
    data.forEach((post) => {
      console.log('Post:', post);
    });

    return { posts: data, totalPages: Number(totalPages) };
  } catch (error) {
    console.error('Error fetching media files:', error);
    throw error;
  }
}
