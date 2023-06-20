import React, { useCallback, useState } from 'react';
import PracticalChangeScoreForm from '../components/PassAnalysisMenu/PracticalChangeScoreForm';

interface Props {
  types: string[];
}

const PracticalChangeScoreContainer = (props: Props) => {
  let index = 0;
  const [type, setType] = useState(props.types[0]);

  const goPrevStep = useCallback(() => {
    index = index - 1;
    setType(props.types[index]);
  }, []);

  const goNextStep = useCallback(() => {
    index = index + 1;
    setType(props.types[index]);
  }, []);

  return (
    <form action="">
      <PracticalChangeScoreForm type={type} goPrevStep={goPrevStep} goNextStep={goNextStep} index={index} lastType={props.types.length} />
    </form>
  );
};

PracticalChangeScoreContainer.defaultProps = {
  types: ['제자리 멀리뛰기', '배근력', '사이드스텝', '서전트점프', '매달리기', '메디신볼던지기'],
};
export default PracticalChangeScoreContainer;
