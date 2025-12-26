import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(5, 'Password must be at least 5 characters')
    .nonempty(),
});
