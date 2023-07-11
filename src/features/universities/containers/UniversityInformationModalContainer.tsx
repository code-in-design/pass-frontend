import React, { useEffect } from 'react';
import { useLazyFetchUniversityDetailQuery } from '../apis/universityApi';
import UniversityInformationModal from '../components/FindUniversity/modals/InformationModal';

interface Props {
  data: number;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityInfoModalContainer = (props: Props) => {
  const [getDepartmentDetail, { data }] = useLazyFetchUniversityDetailQuery();

  useEffect(() => {
    getDepartmentDetail(props.data);
  }, [props.data]);

  return <UniversityInformationModal data={data} onClose={props.onClose} />;
};

export default UniversityInfoModalContainer;
