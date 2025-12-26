import * as z from 'zod';

export const getLoginSchema = (t: (key: string) => string) => {
  return z.object({
    username: z.string().email({
      message: t('errorsScreen.emailInvalid'),
    }),
    password: z.string().min(1, {
      message: t('errorsScreen.passwordRequired'),
    }),
  });
};

export const LoginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(1),
});

export type FormSchema = z.infer<typeof LoginSchema>;
