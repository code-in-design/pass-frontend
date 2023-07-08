import '../public/styles/globals.css';
import 'reflect-metadata';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { theme } from '@/theme';
import store from '@/app/store';
import { ThemeProvider } from '@emotion/react';
import emotionTheme from '../src/theme/theme';
import 'code-in-design-system/dist/globals.css';
import GoogleAnalytics from '../src/marketings/GoogleAnalytics';
import GoogleTagManager from '../src/marketings/GoogleTagManager';
import NaverSiteVerification from '../src/marketings/NaverSiteVerification';
import GoogleSiteVerification from '../src/marketings/GoogleSiteVerification';
import NextAdapterPages from 'next-query-params/pages';
import { QueryParamProvider } from 'use-query-params';
import useAuth from '../src/hooks/useAuth';
import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { isLogin, isLoading, silentRefreshAccessToken } = useAuth();
  const mergedPageProps = { isLogin, isLoading, ...pageProps };

  useLayoutEffect(() => {
    (async () => {
      // 처음으로 웹사이트에 접속했을때 로그인여부를 확인하기 위해 호출함
      await silentRefreshAccessToken();
    })();
  }, []);

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
        <ThemeProvider theme={emotionTheme}>
          <QueryParamProvider adapter={NextAdapterPages}>
            <Component {...mergedPageProps} />
          </QueryParamProvider>
        </ThemeProvider>
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
