import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { theme } from '@/theme';
import store from '@/app/store';
import { ThemeProvider } from '@emotion/react';
import emotionTheme from '../src/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Z-ONE</title>
      </Head>
      <ChakraProvider theme={theme} resetCSS>
        <ThemeProvider theme={emotionTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  );
}
