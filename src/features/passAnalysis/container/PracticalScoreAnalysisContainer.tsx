import React from 'react';
import PracticalScoreAnalysisMenu from '../components/PassAnalysisMenu/PracticalScoreAnalysisMenu';

interface Props {
  name: string;
  subTitle: string;
}

const PracticalScoreAnalysisContainer = (props: Props) => {
  return <PracticalScoreAnalysisMenu name={props.name} subTitle={props.subTitle} />;
};

export default PracticalScoreAnalysisContainer;
