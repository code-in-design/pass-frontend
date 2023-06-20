import ScoreDistributionTableModal from '@/components/Table/ScoreDistributionTableModal';
import React from 'react';

interface Props {
  name: string;
  subTitle: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityScoreModalContainer = (props: Props) => {
  return <ScoreDistributionTableModal name={props.name} subTitle={props.subTitle} onClose={props.onClose} />;
};

export default UniversityScoreModalContainer;
