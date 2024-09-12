import { ensureValidToken } from '@/data-access/instagram';
import { INSTAGRAM_API_BASE_URL } from '@/lib/constants';

export default async function fetchInstagramPosts() {
  try {
    const validToken = await ensureValidToken();
    const url = `${INSTAGRAM_API_BASE_URL}/me/media?fields=id,media_type,media_url,username,timestamp,caption,permalink&access_token=${validToken}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.log({ error });

    throw error;
  }
}
