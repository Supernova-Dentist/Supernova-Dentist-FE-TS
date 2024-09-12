import { INSTAGRAM_API_BASE_URL } from '@/lib/constants';
import prisma from '@/lib/db';

const REFRESH_THRESHOLD = 86400 * 7; // 1 week in seconds

export async function getCurrentInstagramAccessToken() {
  const tokenRecord = await prisma.instagramToken.findUnique({ where: { id: 1 } });

  return tokenRecord;
}
