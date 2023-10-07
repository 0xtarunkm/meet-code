import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
    token: {
      id: string;
    } & DefaultSession['token'];
  }
}
