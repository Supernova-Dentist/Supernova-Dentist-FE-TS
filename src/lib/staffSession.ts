import { CONSENT_FORMS_SESSION_COOKIE, isConsentFormsSessionValid } from '@/lib/consentFormsAuth';
import { cookies } from 'next/headers';

export function hasStaffSession() {
  try {
    return isConsentFormsSessionValid(cookies().get(CONSENT_FORMS_SESSION_COOKIE)?.value);
  } catch {
    return false;
  }
}
