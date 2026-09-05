import { createHmac, timingSafeEqual } from 'node:crypto';

export const CONSENT_FORMS_SESSION_COOKIE = 'consent_forms_session';

const SESSION_DURATION_MS = 30 * 60 * 1000;
const DEFAULT_DEVELOPMENT_PASSCODE = '2024';
const DEFAULT_DEVELOPMENT_SECRET = 'supernova-consent-forms-development-secret';

function getSessionSecret() {
  const secret = process.env.CONSENT_FORMS_SESSION_SECRET;
  if (secret !== undefined && secret.length >= 32) return secret;
  if (process.env.NODE_ENV !== 'production') return DEFAULT_DEVELOPMENT_SECRET;
  throw new Error('CONSENT_FORMS_SESSION_SECRET must be configured in production.');
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
  const configuredPasscode = process.env.CONSENT_FORMS_PASSCODE;
  const expectedPasscode =
    configuredPasscode !== undefined && configuredPasscode.length >= 6
      ? configuredPasscode
      : process.env.NODE_ENV !== 'production'
        ? DEFAULT_DEVELOPMENT_PASSCODE
        : undefined;

  if (expectedPasscode === undefined) {
    throw new Error('CONSENT_FORMS_PASSCODE must be configured in production.');
  }

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
