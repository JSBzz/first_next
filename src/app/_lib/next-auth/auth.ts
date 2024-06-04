const bcrypt = require("bcrypt");
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    // NaverProvider({
    //   clientId: process.env.NAVER_CLIENT_ID!,
    //   clientSecret: process.env.NAVER_CLIENT_SECRET!,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "password", type: "password", placeholder: "password" },
      },

      async authorize(credentials, req) {
        const fetchData: Response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/member/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email!,
            }),
          }
        );

        const user = await fetchData?.json();
        const isPasswordCompare = await bcrypt.compare(credentials?.password, user.password);
        const token = fetchData.headers.get("Set-Cookie");

        if (!isPasswordCompare) return null;
        if (!token) return null;

        user.accessToken = token;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      session.user = token as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
