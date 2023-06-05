import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';

const WelcomeSectionContainer = () => {
  const { data } = useFetchMeQuery();
  let fetchDataName = '';
  if (data) {
    fetchDataName = JSON.parse(data).name;
  }
  return <WelcomeSection name={fetchDataName} />;
};

export default WelcomeSectionContainer;
