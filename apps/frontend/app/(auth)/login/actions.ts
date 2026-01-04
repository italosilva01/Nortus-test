'use server';

import { signIn } from '@/auth';
import { FormSchema } from '@/feature/auth/login/lib/schemeValidation';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export const handleLogin = async (data: FormSchema) => {
  try {
    console.log('data', data);
    await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirectTo: '/',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect('/login?error=CredenciaisInvalidas');
    }
    throw error;
  }
};
