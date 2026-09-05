import { z } from 'zod';

// For some reason zod not giving correct errors for when input are empty. Should get the default field is required message, so added min(1) for that
const normalisePhone = (value: string) => value.replace(/[\s()-]/g, '').replace(/^\+440/, '+44');
const internationalPhonePattern = /^\+?\d{7,15}$/;

export const promotionSignupSchema = z.object({
  fullname: z.string().trim().min(1, 'Full name is required').max(99, 'Name too long'),
  email: z.string().trim().min(1, 'Email is required').email(),
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .transform(normalisePhone)
    .refine((data) => internationalPhonePattern.test(data), { message: 'Invalid phone number' }),
  optOutEmails: z.boolean(),
});

export type PromotionFormData = z.infer<typeof promotionSignupSchema>;
