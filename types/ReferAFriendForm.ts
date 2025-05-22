import validator from 'validator';
import { z } from 'zod';

// For some reason zod not giving correct errors for when input are empty. Should get the default field is required message, so added min(1) for that
export const referAFriendSignupSchema = z.object({
  referrerName: z
  .string()
  .max(99, 'Name too long')
  .default('') // so it doesn't fail on undefined
  .transform((val) => val.trim() === '' ? 'NoFriendReferral' : val),

  fullname: z.string().min(1, 'Full name is required').max(99, 'Name too long'),
  email: z.string().min(1, 'Email is required').email(),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine((data) => validator.isMobilePhone(data), { message: 'Invalid phone number' }),
  optOutEmails: z.boolean(),
});

export type ReferAFriendFormData = z.infer<typeof referAFriendSignupSchema>;
