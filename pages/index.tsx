import LandingPage from '../src/pages/index/landing';

export default function Home({ isMobile, isLoading }) {
  return <LandingPage isMobile={isMobile} isLoading={isLoading} />;
}
