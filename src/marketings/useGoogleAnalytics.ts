import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

const useGoogleAnalytics = () => {
  const GA_TRACKING_ID = 'G-F4NNP3XVYR';
  const router = useRouter();

  const pageview = useCallback(url => {
    (window as any)?.gtag('event', 'page_view', {
      page_title: document.title, // 페이지 제목
      page_location: window.location.href, // 페이지 위치(URL)
      page_path: url, // 페이지 경로
      send_to: GA_TRACKING_ID, // Google Analytics 트래킹 ID
    });
  }, []);

  const event = useCallback(({ action, category, label, value }: { action: string; category?: string; label?: string; value?: string }) => {
    // 액션(필수): 동영상 재생, 버튼 클릭 등..
    // 카테고리(권장, 그룹화): 대분류
    // 레이블(선택): 추가정보
    // 값(선택): 추가정보
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }, []);

  useEffect(() => {
    if (router?.pathname?.includes('admin')) return;
    const isInitialized = typeof (window as any).ga === 'function';
    if (isInitialized || !router) return; // 딱 한번만 초기화
    const handleRouteChange = (url: any) => {
      if (!url?.includes('#')) pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router]);

  return { GA_TRACKING_ID, pageview, event };
};

export default useGoogleAnalytics;
