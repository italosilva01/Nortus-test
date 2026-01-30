import * as z from 'zod';

export const loginSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(5, 'Password must be at least 5 characters')
    .nonempty(),
});
