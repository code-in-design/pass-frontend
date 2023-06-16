import React from 'react';
import ScoreDistributionModal from '../components/FindUniversity/modals/ScoreDistributionModal';

interface Props {
  name: string;
  subTitle: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityScoreModalContainer = (props: Props) => {
  return <ScoreDistributionModal name={props.name} subTitle={props.subTitle} onClose={props.onClose} />;
};

export default UniversityScoreModalContainer;
