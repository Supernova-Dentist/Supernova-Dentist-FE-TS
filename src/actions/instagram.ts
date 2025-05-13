import { ensureValidToken } from '@/data-access/instagram';
import { INSTAGRAM_API_BASE_URL } from '@/lib/constants';

export default async function fetchInstagramPosts(cursor?: string, direction: 'after' | 'before' = 'after') {
  const fields = ['id', 'media_type', 'media_url', 'username', 'timestamp', 'caption', 'permalink'].join(',');

  try {
    const validToken = await ensureValidToken();
    let url = `${INSTAGRAM_API_BASE_URL}/me/media?fields=${fields}&access_token=${validToken}&limit=16`;

    if (cursor) {
      url += `&${direction}=${cursor}`;
    }

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const { data, paging } = await res.json();

    return { data, paging };
  } catch (error) {
    console.log({ error });

    return { data: [], paging: {} };
  }
}
