import React from 'react';
import PracticalScoreAnalysisMenu from '../components/PassAnalysisMenu/PracticalScoreAnalysisMenu';

interface Props {
  name: string;
  subTitle: string;
  remainChange: number;
}

const PracticalScoreAnalysisContainer = (props: Props) => {
  return <PracticalScoreAnalysisMenu name={props.name} subTitle={props.subTitle} remainChange={props.remainChange} />;
};

export default PracticalScoreAnalysisContainer;
