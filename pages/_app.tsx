import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../src/theme';
// import { Provider } from 'react-redux';
// import store from '../app/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    <>
      <Head>
        <title>Z-ONE</title>
      </Head>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}