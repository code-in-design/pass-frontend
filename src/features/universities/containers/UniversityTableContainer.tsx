import React from 'react';
import UniversityTable from '../components/FindUniversity/UniversityTable';
import UniversityInfoModalContainer from './UniversityInformationModalContainer';

const UniversityTableContainer = () => {
  return (
    <>
      <UniversityTable />
      <UniversityInfoModalContainer />
    </>
  );
};

export default UniversityTableContainer;
