import { META_ACCESS_TOKEN, NEXT_PUBLIC_META_API_BASE_URL } from '@/lib/constants';

export async function fetchInstagramPosts() {
  const url = `${NEXT_PUBLIC_META_API_BASE_URL}/me/media?fields=id,media_type,media_url,username,timestamp,caption&access_token=${META_ACCESS_TOKEN}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.log({ error });
  }
}
