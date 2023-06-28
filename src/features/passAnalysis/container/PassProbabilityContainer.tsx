import React, { useState } from 'react';
import PassProbability from '../components/PassAnalysisMenu/PassProbability';

const PassAnalysisContainer = () => {
  const [scorePercentage, setScorePercentage] = useState(70);
  return <PassProbability scorePercentage={scorePercentage} />;
};

export default PassAnalysisContainer;
