import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Spotify({
      clientId: String(process.env.SPOTIFY_API_KEY),
      clientSecret: String(process.env.SPOTIFY_SECRET),
      scope: 'user-library-read',
    }),
  ],
  callbacks: {
    async jwt(token, _, account) {
      if (account) {
        token.id = account.id;
        token.accessToken = account.accessToken;
        token.refresh_token = account.refresh_token;
      }
      return token;
    },
    async session(session: any, user) {
      session.user = user;
      return session;
    },
  },
});
