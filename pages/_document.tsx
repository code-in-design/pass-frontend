import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const title = 'Z-ONE';
  const description = '체대입시, 체육 진로 원스탑 플랫폼';
  const url = 'https://z-one.kr';
  const keywords = '체대입시,체대입시플랫폼,체육대학,체대,합격,입시정보,모집요강,입시결과,경쟁률,대학정보,학과정보,수능,수시,정시,대학진학,입시정보사이트,배치표,입시일정,수능문제,입시분석,고3입시정보';
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={description} />

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
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />

        {/* <meta property="og:image" content="" key="ogimage" /> */}
        <meta name="keywords" content={keywords} />
        <meta name="naver-site-verification" content="6fc614587fc636493325df49b27cf6cb6694c546" />
      </Head>
      <body>
        <Main />
        <div id="portal"></div>
        <NextScript />
      </body>
    </Html>
  );
}
