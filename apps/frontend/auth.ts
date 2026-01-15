import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { endpoints } from './shared/lib/endpoints';
import { authEndpoints } from './shared/lib/endpoints/auth';
import { HTTP_STATUS_CODES } from './shared/lib/helpers';
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          const response = await endpoints.auth.login(
            username as string,
            password as string
          );
          if (response.status === HTTP_STATUS_CODES.OK && response?.data) {
            return {
              id: response.data?.data?.id || '1',
              accessToken: response.data?.data?.accessToken,
              username: response.data?.data?.username,
              refreshToken: response.data?.data?.refreshToken,
            };
          }
          return null;
        } catch (error) {
          throw new Error('Login failed');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      console.log('user', user);
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.username = user.username;
        token.refreshToken = user.refreshToken;

        return token;
      } else if (Date.now() < token.exp * 1000) {
        console.log('1');

        return token;
      } else {
        console.log('2');

        console.log('token.refreshToken', token.refreshToken);

        if (!token.refreshToken) throw new TypeError('Missing refresh token');
        try {
          const response = await authEndpoints.refreshToken(token.refreshToken);
          console.log('response', response);
          if (response.status !== HTTP_STATUS_CODES.OK)
            throw new TypeError('Failed to refresh token');

          const newTokens = response.data as {
            accessToken: string;
            exp: number;
            refreshToken?: string;
          };

          console.log('atualizado token', newTokens);

          return {
            ...token,
            accessToken: newTokens.accessToken,
            exp: Math.floor(Date.now() / 1000 + newTokens.exp),
            refreshToken: newTokens.refreshToken
              ? newTokens.refreshToken
              : token.refreshToken,
          };
        } catch (error) {
          throw new TypeError('Failed to refresh token');
        }
      }
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.accessToken = token.accessToken as string;
      session.user.username = token.username as string;
      session.user.refreshToken = token.refreshToken as string;
      return session;
    },
  },
});
