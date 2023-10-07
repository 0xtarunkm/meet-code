import { prisma } from '@/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.SECRET!,
  callbacks: {
    // @ts-ignore
    session({ session, token, user }) {
      return { session, user }; // The return type will match the one returned in `useSession()`
    },
  },
});
