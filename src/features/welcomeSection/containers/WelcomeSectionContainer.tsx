import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';

const WelcomeSectionContainer = () => {
  const { data } = useFetchMeQuery();
  const result = JSON.parse(data);
  return <WelcomeSection name={result.name} />;
};

export default WelcomeSectionContainer;
