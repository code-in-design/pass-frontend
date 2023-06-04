import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { theme } from '@/theme';
import store from '@/app/store';
import 'code-in-design-system/dist/globals.css';
import GoogleAnalytics from '../src/marketings/GoogleAnalytics';
import GoogleTagManager from '../src/marketings/GoogleTagManager';
import NaverSiteVerification from '../src/marketings/NaverSiteVerification';
import GoogleSiteVerification from '../src/marketings/GoogleSiteVerification';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NaverSiteVerification />
      <GoogleSiteVerification />
      <GoogleAnalytics />
      <GoogleTagManager />
      <Head>
        <title>Z-ONE</title>
      </Head>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const isServer = !!ctx.req;
  const userAgent = isServer ? ctx.req.headers['user-agent'] : navigator.userAgent;
  const isLine = /\bLine\//i.test(userAgent) || false;
  const isMobile = /(iPad|iPhone|Android|Mobile)/i.test(userAgent) || false;
  const rules = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)', 'Android.*(wv|.0.0.0)'];
  const regex = new RegExp(`(${rules.join('|')})`, 'ig');
  const isInApp = Boolean(userAgent.match(regex));

  return { pageProps: { isMobile, isInApp, isLine } };
};
