import { describe, expect, it } from 'vitest';
import { promotionSignupSchema } from './PromotionForm';
import { referAFriendSignupSchema } from './ReferAFriendForm';

describe('lead form normalisation', () => {
  it.each([
    '07700 900123',
    '+44 7700 900123',
    '+44 (0)7700 900123',
    '(07700) 900123',
    '07700-900123',
    '+1 (415) 555-2671',
    '+33 6 12 34 56 78',
    '+61 412 345 678',
  ])(
    'accepts and normalises conventional international phone formatting: %s',
    (phone) => {
      const result = promotionSignupSchema.parse({
        fullname: '  Test Patient  ',
        email: '  test@example.com  ',
        phone,
        optOutEmails: true,
      });

      expect(result.fullname).toBe('Test Patient');
      expect(result.email).toBe('test@example.com');
      expect(result.phone).toMatch(/^\+?\d{7,15}$/);
    }
  );

  it('rejects whitespace-only names and malformed phone numbers', () => {
    expect(
      promotionSignupSchema.safeParse({ fullname: '   ', email: 'test@example.com', phone: 'abcdefghij', optOutEmails: false })
        .success
    ).toBe(false);
  });

  it.each(['123456', '+1234567890123456', 'abcdefghij', '+44 7700 ABC123'])(
    'rejects incomplete, excessive or non-numeric phone input: %s',
    (phone) => {
      expect(
        promotionSignupSchema.safeParse({
          fullname: 'Test Patient',
          email: 'test@example.com',
          phone,
          optOutEmails: false,
        }).success,
      ).toBe(false);
    },
  );

  it('applies the same normalisation to refer-a-friend leads', () => {
    const result = referAFriendSignupSchema.parse({
      referrerName: 'Test Referrer',
      fullname: 'Test Patient',
      email: ' test@example.com ',
      phone: '+44 7700 900123',
      optOutEmails: false,
    });

    expect(result.email).toBe('test@example.com');
    expect(result.phone).toBe('+447700900123');
  });
});
