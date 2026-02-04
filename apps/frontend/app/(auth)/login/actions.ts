'use server';

import { signIn } from '@/auth';
import { FormSchema } from '@/feature/auth/login/lib/schemeValidation';

export const handleLogin = async (data: FormSchema) => {
  console.log('data', data);
  await signIn('credentials', {
    username: data.username,
    password: data.password,
    redirectTo: '/',
  });
};
