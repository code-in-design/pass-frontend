import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';

const WelcomeSectionContainer = () => {
  const { data } = useFetchMeQuery();

  return <WelcomeSection name={data?.name} />;
};

export default WelcomeSectionContainer;
