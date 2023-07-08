import LandingPage from '../src/pages/index/landing';

export default function Home({ isMobile, isLoading, isLogin }) {
  if (isLoading) return null;
  return <LandingPage isMobile={isMobile} />;
}
