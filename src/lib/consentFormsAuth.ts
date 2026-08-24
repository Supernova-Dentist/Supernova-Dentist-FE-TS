import { createHmac, timingSafeEqual } from 'node:crypto';

export const CONSENT_FORMS_SESSION_COOKIE = 'consent_forms_session';

const SESSION_DURATION_MS = 30 * 60 * 1000;
const DEFAULT_DEVELOPMENT_PASSCODE = '2024';
const DEFAULT_DEVELOPMENT_SECRET = 'supernova-consent-forms-development-secret';

function getSessionSecret() {
  return process.env.CONSENT_FORMS_SESSION_SECRET ?? DEFAULT_DEVELOPMENT_SECRET;
}

function sign(value: string) {
  return createHmac('sha256', getSessionSecret()).update(value).digest('hex');
}

function safelyCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function isConsentFormsPasscodeValid(passcode: string) {
  const expectedPasscode = process.env.CONSENT_FORMS_PASSCODE ?? DEFAULT_DEVELOPMENT_PASSCODE;

  return safelyCompare(passcode, expectedPasscode);
}

export function createConsentFormsSessionToken() {
  const expiresAt = String(Date.now() + SESSION_DURATION_MS);

  return `${expiresAt}.${sign(expiresAt)}`;
}

export function isConsentFormsSessionValid(token: string | undefined) {
  if (token === undefined) return false;

  const [expiresAt, providedSignature, ...extraParts] = token.split('.');

  if (
    expiresAt === undefined ||
    providedSignature === undefined ||
    extraParts.length > 0 ||
    !/^\d+$/.test(expiresAt) ||
    Number(expiresAt) <= Date.now()
  ) {
    return false;
  }

  return safelyCompare(providedSignature, sign(expiresAt));
}
