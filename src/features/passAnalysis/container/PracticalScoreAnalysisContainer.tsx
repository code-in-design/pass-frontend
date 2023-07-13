import React from 'react';
import PracticalScoreAnalysisMenu from '../components/PassAnalysisMenu/PracticalScoreAnalysisMenu';

interface Props {
  name: string;
  subTitle: string;
  remainChange: number;
  exercise: string[];
}

const PracticalScoreAnalysisContainer = (props: Props) => {
  return <PracticalScoreAnalysisMenu name={props.name} subTitle={props.subTitle} remainChange={props.remainChange} exercise={props.exercise} />;
};

export default PracticalScoreAnalysisContainer;
