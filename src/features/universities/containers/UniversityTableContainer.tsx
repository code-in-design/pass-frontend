import React, { useState } from 'react';
import UniversityTable from '../components/FindUniversity/table/UniversityTable';
import UniversityInfoModalContainer from './UniversityInformationModalContainer';

const UniversityTableContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [DataId, setDataId] = useState(0);

  return (
    <>
      <UniversityTable setIsModalOpen={setIsModalOpen} setDataId={setDataId} />
      {isModalOpen && <UniversityInfoModalContainer onClose={setIsModalOpen} id={DataId} />}
    </>
  );
};

export default UniversityTableContainer;
