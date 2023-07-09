import { UniversitiesModel } from '@/models/UniversitiesModel';
import React from 'react';
import { useFetchUniversityListQuery } from '../apis/universityApi';
import UniversityTable from '../components/FindUniversity/table/UniversityTable';
import UniversityTable2 from '../components/FindUniversity/table/UniversityTable2';

const UniversityTableContainer = () => {
  const { data } = useFetchUniversityListQuery();
  const universityModel = new UniversitiesModel();

  const universityData = data?.map((item: any) => {
    return universityModel.setTableData(item);
  });

  return (
    <>
      <UniversityTable data={universityData} />
      {/* <UniversityTable2 /> */}
    </>
  );
};

export default UniversityTableContainer;
