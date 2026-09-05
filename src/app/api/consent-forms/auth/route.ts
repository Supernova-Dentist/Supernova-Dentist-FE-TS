import {
  CONSENT_FORMS_SESSION_COOKIE,
  createConsentFormsSessionToken,
  isConsentFormsPasscodeValid,
} from '@/lib/consentFormsAuth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let passcode = '';

  try {
    const body: unknown = await request.json();

    if (typeof body === 'object' && body !== null && 'passcode' in body && typeof body.passcode === 'string') {
      passcode = body.passcode;
    }
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  let isValid = false;
  try {
    isValid = isConsentFormsPasscodeValid(passcode);
  } catch {
    return NextResponse.json({ message: 'Consent forms are not configured.' }, { status: 503 });
  }

  if (!isValid) {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return NextResponse.json({ message: 'Incorrect passcode.' }, { status: 401 });
  }

  const response = NextResponse.json({ authenticated: true });
  response.cookies.set({
    name: CONSENT_FORMS_SESSION_COOKIE,
    value: createConsentFormsSessionToken(),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });

  return response;
}
