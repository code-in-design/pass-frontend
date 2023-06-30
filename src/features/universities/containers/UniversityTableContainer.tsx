import React from 'react';
import { useFetchUniversityListQuery } from '../apis/universityApi';
import UniversityTable from '../components/FindUniversity/table/UniversityTable';

const UniversityTableContainer = () => {
  const { data } = useFetchUniversityListQuery();
  return <UniversityTable data={data} />;
};

export default UniversityTableContainer;
