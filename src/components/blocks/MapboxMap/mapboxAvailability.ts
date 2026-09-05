export function hasUsableMapboxToken(token: string | undefined): boolean {
  return typeof token === 'string' && token.trim().startsWith('pk.') && token.trim().length > 10;
}
