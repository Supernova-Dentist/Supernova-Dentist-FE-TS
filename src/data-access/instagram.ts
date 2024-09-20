import type { InstagramToken } from '@prisma/client';
import { INSTAGRAM_API_BASE_URL } from '@/lib/constants';
import prisma from '@/lib/db';

const REFRESH_THRESHOLD = 86400 * 7; // 1 week in seconds

export async function getCurrentInstagramAccessToken(): Promise<InstagramToken | null> {
  const tokenRecord = await prisma.instagramToken.findUnique({ where: { id: 1 } });
  if (tokenRecord === null || tokenRecord === undefined) return null;

  return tokenRecord;
}

export async function updateInstagramToken(newToken: string, newExpiry: Date): Promise<InstagramToken> {
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

export async function refreshAccessToken(currentToken: string): Promise<string> {
  const refreshUrl = `${INSTAGRAM_API_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;

  try {
    const response = await fetch(refreshUrl);
    const data: { access_token: string; expires_in: number } = await response.json();

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

export async function ensureValidToken(): Promise<string> {
  const currentToken = await getCurrentInstagramAccessToken();

  if (currentToken === null || currentToken === undefined) {
    throw new Error('No access token found');
  }

  const { access_token: tokenString, expires_in: expiresIn } = currentToken;

  const currentTime = new Date();
  const timeLeft = expiresIn.getTime() - currentTime.getTime();

  if (timeLeft < REFRESH_THRESHOLD) {
    const refreshedToken = await refreshAccessToken(tokenString);
    return refreshedToken;
  }

  return tokenString;
}
