import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Spotify({
      clientId: String(process.env.SPOTIFY_API_KEY),
      clientSecret: String(process.env.SPOTIFY_SECRET),
    }),
  ],
});
