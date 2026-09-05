import { z } from 'zod';

const internationalPhonePattern = /^\+?\d{7,15}$/;

// For some reason zod not giving correct errors for when input are empty. Should get the default field is required message, so added min(1) for that
export const referAFriendSignupSchema = z.object({
  referrerName: z
  .string()
  .max(99, 'Name too long')
  .default('') // so it doesn't fail on undefined
  .transform((val) => val.trim() === '' ? 'NoFriendReferral' : val),

  fullname: z.string().trim().min(1, 'Full name is required').max(99, 'Name too long'),
  email: z.string().trim().min(1, 'Email is required').email(),
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .transform((value) => value.replace(/[\s()-]/g, '').replace(/^\+440/, '+44'))
    .refine((data) => internationalPhonePattern.test(data), { message: 'Invalid phone number' }),
  optOutEmails: z.boolean(),
});

export type ReferAFriendFormData = z.infer<typeof referAFriendSignupSchema>;
