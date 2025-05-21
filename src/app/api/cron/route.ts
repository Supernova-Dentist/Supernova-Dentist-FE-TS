import { ensureValidToken } from '@/data-access/instagram';

export async function GET(request: Request) {
  try {
    await ensureValidToken();
    return new Response('Instagram token checked and refreshed if needed.', { status: 200 });
  } catch (error) {
    return new Response('Failed to check/refresh Instagram token.', { status: 500 });
  }
}
