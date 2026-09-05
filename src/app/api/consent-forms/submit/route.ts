import { CONSENT_FORMS_SESSION_COOKIE, isConsentFormsSessionValid } from '@/lib/consentFormsAuth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const session = cookies().get(CONSENT_FORMS_SESSION_COOKIE)?.value;

  try {
    if (!isConsentFormsSessionValid(session)) {
      return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ message: 'Consent forms are not configured.' }, { status: 503 });
  }

  const backendUrl = process.env.NEXT_PUBLIC_SUPERNOVA_BE_URL;
  const apiSecret = process.env.CONSENT_API_SECRET;
  if (backendUrl === undefined || backendUrl === '' || apiSecret === undefined || apiSecret === '') {
    return NextResponse.json({ message: 'Consent submission is not configured.' }, { status: 503 });
  }

  const formData = await request.formData();
  const response = await fetch(`${backendUrl}/consent`, {
    method: 'POST',
    headers: { 'x-consent-api-secret': apiSecret },
    body: formData,
    cache: 'no-store',
  });
  const payload = await response.text();

  return new NextResponse(payload, {
    status: response.status,
    headers: { 'content-type': response.headers.get('content-type') ?? 'application/json' },
  });
}
