import React from 'react';
import DistributionTableModal from './ScoreDistributionTableModal';

interface Props {
  name: string;
  subTitle: string;
  exercise: string[];
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScoreDistributionTableContainer = (props: Props) => {
  return <DistributionTableModal name={props.name} subTitle={props.subTitle} onClose={props.onClose} exercise={props.exercise} />;
};

export default ScoreDistributionTableContainer;
