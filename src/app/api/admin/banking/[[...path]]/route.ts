import { hasStaffSession } from '@/lib/staffSession';
import { NextResponse } from 'next/server';

const privateHeaders = {
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'X-Content-Type-Options': 'nosniff',
};
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const problem = (message: string, status: number) => NextResponse.json({ message }, { status, headers: privateHeaders });
export const maxDuration = 60;

async function readBody(request: Request, maxBytes: number) {
  const reader = request.body?.getReader();
  if (reader === undefined) return Buffer.alloc(0);
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) return Buffer.concat(chunks, bytes);
    bytes += value.byteLength;
    if (bytes > maxBytes) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
}

async function proxy(request: Request, { params }: { params: { path?: string[] } }) {
  if (!hasStaffSession()) return problem('Your staff session has ended. Unlock this page and try again.', 401);
  const path = params.path ?? [];
  const method = request.method;
  const isList = method === 'GET' && path.length === 0;
  const isCreate = method === 'POST' && path.length === 0;
  const isFilePath = path.length === 2 && uuid.test(path[0]);
  const isDownload = method === 'GET' && isFilePath && ['handover', 'receipt'].includes(path[1]);
  const isUpload = method === 'PUT' && isFilePath && path[1] === 'receipt';
  const isEmail = method === 'POST' && isFilePath && path[1] === 'email';
  if (!isList && !isCreate && !isDownload && !isUpload && !isEmail) return problem('Banking record not found.', 404);

  const backend = process.env.BANKING_BACKEND_URL ?? process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL;
  const secret = process.env.BANKING_API_SECRET;
  if (backend === undefined || backend === '' || secret === undefined || secret.length < 32) return problem('Banking is not configured.', 503);

  try {
    const url = new URL(`${backend.replace(/\/+$/, '')}/banking${path.length > 0 ? `/${path.join('/')}` : ''}`);
    const cursor = new URL(request.url).searchParams.get('before');
    if (isList && cursor !== null) {
      if (!uuid.test(cursor)) return problem('Invalid records page.', 400);
      url.searchParams.set('before', cursor);
    }
    const headers = new Headers({ 'x-banking-api-secret': secret });
    let body: Uint8Array<ArrayBuffer> | undefined;
    if (isCreate || isUpload) {
      const type = request.headers.get('content-type') ?? '';
      const allowed = isCreate ? ['application/json'] : ['application/pdf', 'image/jpeg', 'image/png'];
      if (!allowed.includes(type)) return problem('Unsupported file or request type.', 415);
      const bytes = await readBody(request, isUpload ? 3 * 1024 * 1024 : 900_000);
      if (bytes === null) return problem(isUpload ? 'The receipt must be no larger than 3 MB.' : 'The signatures are too large.', 413);
      headers.set('content-type', type);
      body = new Uint8Array(bytes);
    }
    const upstream = await fetch(url, { method, headers, body, cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(isCreate || isEmail ? 45_000 : 20_000) });
    const upstreamIsJson = upstream.headers.get('content-type')?.startsWith('application/json') === true;
    if (upstream.status === 401 || upstream.status >= 500 || upstream.status === 429) {
      if (upstream.status === 429) return problem('Too many requests. Please wait and try again.', 429);
      // Do not forward gateway pages or backend configuration details.
      if (upstream.status !== 503 || !upstreamIsJson) {
        return problem('Banking records are temporarily unavailable. Please try again.', 503);
      }
    }
    if (!isDownload && upstream.status === 404 && !upstreamIsJson) {
      return problem('Banking is not available yet.', 503);
    }
    const responseHeaders = new Headers(privateHeaders);
    for (const name of ['content-type', 'content-disposition']) {
      const value = upstream.headers.get(name);
      if (value !== null) responseHeaders.set(name, value);
    }
    return new NextResponse(upstream.body, { status: upstream.status, headers: responseHeaders });
  } catch {
    return problem('Banking records are temporarily unavailable. Please try again.', 503);
  }
}

export { proxy as GET, proxy as POST, proxy as PUT };
