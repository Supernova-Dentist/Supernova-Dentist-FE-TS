import { ensureValidToken } from '@/data-access/instagram';
import { INSTAGRAM_API_BASE_URL, instagramAccountsConfig } from '@/lib/constants';

export default async function fetchInstagramPosts(page: string) {
  const accountId = instagramAccountsConfig[page as keyof typeof instagramAccountsConfig];

  if (!accountId) throw new Error('Invalid page');

  try {
    const validToken = await ensureValidToken(accountId);
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
