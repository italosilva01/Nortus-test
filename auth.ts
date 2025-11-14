import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { endpoints } from "./lib/endpoints";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials:  { email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize() {
        try {
          const response = await endpoints.auth.login();
          console.log("response", response);
          if(response.status === 200 && response?.data) {
            console.log("AQUI")
            return {
              id: response.data?.data.id || "1", 
              accessToken: response.data?.data.accessToken,
              username: response.data?.data.username,
            }
          }
          return null;
        } catch (error) {
          console.log("error", error);
          return null;
        }
      }
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id,
        token.accessToken = user.accessToken;
        token.username = user.username;
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.accessToken = token.accessToken as string;
      session.user.username = token.username as string;
      return session;
    },
  },
})