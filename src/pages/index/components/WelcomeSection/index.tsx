import { useFetchMeQuery } from '@/features/auth/apis/authApi';
import Welcome from './Welcome';

const WelcomeSection = () => {
  const { data } = useFetchMeQuery();
  return <Welcome name={data?.name} />;
};

export default WelcomeSection;
