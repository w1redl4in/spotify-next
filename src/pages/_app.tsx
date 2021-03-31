import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../layout';
import { GlobalStyles, theme } from '../styles';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { SkeletonTheme } from 'react-loading-skeleton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Spotify - Web Player</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyles />
        <SkeletonTheme
          color={theme.colors.grey300}
          highlightColor={theme.colors.grey100}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SkeletonTheme>
      </ThemeProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
