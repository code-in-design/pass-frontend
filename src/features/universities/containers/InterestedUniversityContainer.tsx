import React from 'react';
import { useFetchUniversityListQuery } from '../apis/universityApi';
import InterestedUniversities from '../components/InterestedUniversities';

const InterestedUniversityContainer = () => {
  const { data } = useFetchUniversityListQuery();
  return <InterestedUniversities data={data} />;
};

export default InterestedUniversityContainer;
