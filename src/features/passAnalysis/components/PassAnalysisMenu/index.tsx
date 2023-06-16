import React from 'react';
import LastYearPassCase from './LastYearPassCase';
import PassProbability from './PassProbability';
import PracticalScoreAnalysisMenu from './PracticalScoreAnalysisMenu';
import TestScoreAnalysis from './TestScoreAnalysis';

const PassAnalysisMenu = props => {
  return (
    <div>
      <PassProbability />
      <TestScoreAnalysis />
      <PracticalScoreAnalysisMenu />
      <LastYearPassCase />
    </div>
  );
};

export default PassAnalysisMenu;
