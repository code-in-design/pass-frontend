import React, { useEffect } from 'react';
import useGoogleAnalytics from './useGoogleAnalytics';
import Script from 'next/script';

// type Props = {};

const GoogleAnalytics = () => {
  const { GA_TRACKING_ID, event, pageview } = useGoogleAnalytics();

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
