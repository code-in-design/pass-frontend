import React from 'react';
import { useFetchUniversityListQuery } from '../apis/universityApi';
import UniversityTable from '../components/FindUniversity/table/UniversityTable';
import UniversityTable2 from '../components/FindUniversity/table/UniversityTable2';

const UniversityTableContainer = () => {
  const { data } = useFetchUniversityListQuery();
  return (
    <>
      {/* <UniversityTable data={data} /> */}
      <UniversityTable2 />
    </>
  );
};

export default UniversityTableContainer;
