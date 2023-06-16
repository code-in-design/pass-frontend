import React from 'react';
import UniversityInformationModal from '../components/FindUniversity/modals/InformationModal';

interface Props {
  data: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityInfoModalContainer = (props: Props) => {
  return <UniversityInformationModal name={props.data} subTitle="수능 일반 전형" competition="14.05:1" onClose={props.onClose} />;
};

export default UniversityInfoModalContainer;
