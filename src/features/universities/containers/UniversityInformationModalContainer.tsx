import React, { useEffect } from 'react';
import { useLazyFetchUniversityDetailQuery } from '../apis/universityApi';
import UniversityInformationModal from '../components/FindUniversity/modals/InformationModal';

interface Props {
  id: number;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityInfoModalContainer = (props: Props) => {
  const [getDepartmentDetail, { data }] = useLazyFetchUniversityDetailQuery();
  console.log(data);

  useEffect(() => {
    getDepartmentDetail(props.id);
  }, [props.id]);

  return <UniversityInformationModal data={data} onClose={props.onClose} />;
};

export default UniversityInfoModalContainer;
