import validator from 'validator';
import { z } from 'zod';

// For some reason zod not giving correct errors for when input are empty. Should get the default field is required message, so added min(1) for that
export const promotionSignupSchema = z.object({
  fullname: z.string().min(1, 'Full name is required').max(99, 'Name too long'),
  email: z.string().min(1, 'Email is required').email(),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine((data) => validator.isMobilePhone(data), { message: 'Invalid phone number' }),
  consent: z.boolean().refine((val) => val, {
    message: 'You must consent to receive marketing emails and acknowledge the privacy policy.',
  }),
});

export type PromotionFormData = z.infer<typeof promotionSignupSchema>;
