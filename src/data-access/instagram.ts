import { INSTAGRAM_API_BASE_URL } from '@/lib/constants';
import prisma from '@/lib/db';

const REFRESH_THRESHOLD = 86400 * 7; // 1 week in seconds

export async function getCurrentInstagramAccessToken() {
  const tokenRecord = await prisma.instagramToken.findUnique({ where: { id: 1 } });

  return tokenRecord;
}

export async function updateInstagramToken(newToken: string, newExpiry: Date) {
  const updatedToken = await prisma.instagramToken.update({
    where: {
      id: 1,
    },
    data: {
      access_token: newToken,
      expires_in: newExpiry,
    },
  });

  return updatedToken;
}

export async function refreshAccessToken(currentToken: string) {
  const refreshUrl = `${INSTAGRAM_API_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;

  try {
    const response = await fetch(refreshUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to refresh access token');
    }

    const newExpiresIn = new Date(Date.now() + data.expires_in * 1000);
    const updatedToken = await updateInstagramToken(data.access_token, newExpiresIn);

    return updatedToken.access_token;
  } catch (error) {
    console.log({ error });
    throw new Error('Something went wrong');
  }
}

export async function ensureValidToken() {
  const currentToken = await getCurrentInstagramAccessToken();

  if (currentToken === null || currentToken === undefined) {
    throw new Error('No access token found');
  }

  const currentTime = new Date();
  const expiresIn = new Date(currentToken.expires_in);
  const timeLeft = expiresIn.getTime() - currentTime.getTime();

  if (timeLeft < REFRESH_THRESHOLD) {
    const refreshedToken = await refreshAccessToken(currentToken.access_token);
    return refreshedToken;
  }

  return currentToken.access_token;
}
