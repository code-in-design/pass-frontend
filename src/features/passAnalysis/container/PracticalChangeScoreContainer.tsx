import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import PracticalChangeScoreForm from '../components/PassAnalysisMenu/PracticalChangeScoreForm';

interface Props {
  types: {
    name: string;
    multipleChoice?: string[];
  }[];
}

const PracticalChangeScoreContainer = (props: Props) => {
  let step = 0;
  const [practicalName, setPracticalName] = useState(props.types[0].name);
  const [practicalScore, setPracticalScore] = useState(props.types[0]?.multipleChoice);
  const { register, handleSubmit, setValue, formState, getValues } = useForm();

  const goPrevStep = useCallback(() => {
    step = step - 1;
    setPracticalName(props.types[step].name);
    setPracticalScore(props.types[step]?.multipleChoice);
  }, []);

  const goNextStep = useCallback(() => {
    step = step + 1;
    setPracticalName(props.types[step].name);
    setPracticalScore(props.types[step]?.multipleChoice);
  }, []);

  const onsubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <PracticalChangeScoreForm type={practicalName} practicalScore={practicalScore} register={register} setValue={setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} index={step} lastType={props.types.length} />
    </form>
  );
};

PracticalChangeScoreContainer.defaultProps = {
  types: [
    {
      name: '제자리 멀리뛰기',
      multipleChoice: ['3초 이상 유지 후 멀리뛰기 깔끔하게 수행', '1~3초 무난하게 유지 후 멀리뛰기 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 멀리뛰기 수행'],
    },
    {
      name: '배근력',
      multipleChoice: ['3초 이상 유지 후 배근력 깔끔하게 수행', '1~3초 무난하게 유지 후 배근력 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 배근력 수행'],
    },
    {
      name: '사이드스텝',
    },
    {
      name: '서전트점프',
    },
    {
      name: '매달리기',
    },
    {
      name: '메디신볼던지기',
      multipleChoice: ['3초 이상 유지 후 볼던지기 깔끔하게 수행', '1~3초 무난하게 유지 후 볼던지기 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 볼던지기 수행'],
    },
  ],
};
export default PracticalChangeScoreContainer;
