import React, { useEffect, useState } from 'react';
import { useLazyFetchUniversityDetailQuery } from '../apis/universityApi';
import UniversityInformationModal from '../components/FindUniversity/modals/InformationModal';
import DistributionTableContainer from '@/container/PracticalScoreDistributionChartContainer';

interface Props {
  id: number;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityInfoModalContainer = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getDepartmentDetail, { data }] = useLazyFetchUniversityDetailQuery();

  useEffect(() => {
    getDepartmentDetail(props.id);
    console.log(data);
  }, [props.id]);

  return (
    <>
      <UniversityInformationModal data={data} onClose={props.onClose} setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <DistributionTableContainer onClose={setIsModalOpen} name={data?.universityName} subTitle={data?.universityDepartments?.applyTypeDetail} />}
    </>
  );
};

export default UniversityInfoModalContainer;
