import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="체대입시, 체육 진로 원스탑 플랫폼" />

        <link rel="manifest" href="/manifest.json"></link>

        <link rel="icon" href="/images/favicons/android-icon-36x36.png" sizes="36x36" />
        <link rel="icon" href="/images/favicons/android-icon-48x48.png" sizes="48x48" />
        <link rel="icon" href="/images/favicons/android-icon-72x72.png" sizes="72x72" />
        <link rel="icon" href="/images/favicons/android-icon-96x96.png" sizes="96x96" />
        <link rel="icon" href="/images/favicons/android-icon-144x144.png" sizes="144x144" />
        <link rel="icon" href="/images/favicons/android-icon-192x192.png" sizes="192x192" />

        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-57x57.png" sizes="57x57" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-60x60.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-76x76.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-114x114.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-152x152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-icon-180x180.png" sizes="180x180" />
        <link rel="apple-touch-icon_precomposed" href="/images.favicons/apple-icon-precomposed.png" />

        <link rel="icon" href="/images/favicons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/images/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/images/favicons/favicon-96x66.png" sizes="96x66" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/favicons/ms-icon-70x70.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Z-ONE" />
        <meta property="og:url" content="https://z-one.kr" />
        <meta property="og:description" content="체대입시, 체육 진로 원스탑 플랫폼" />
        {/* <meta property="og:image" content="" key="ogimage" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
