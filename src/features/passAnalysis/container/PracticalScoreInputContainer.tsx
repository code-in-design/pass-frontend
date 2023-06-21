import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import PracticalScoreCheckForm from '../components/PassAnalysisMenu/PracticalScoreCheckForm';
import PracticalScoreInputForm from '../components/PassAnalysisMenu/PracticalScoreInputForm';

const types = [
  { name: '제자리 멀리뛰기', multipleChoice: ['3초 이상 유지 후 멀리뛰기 깔끔하게 수행', '1~3초 무난하게 유지 후 멀리뛰기 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 멀리뛰기 수행'] },
  { name: '배근력', multipleChoice: ['3초 이상 유지 후 배근력 깔끔하게 수행', '1~3초 무난하게 유지 후 배근력 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 배근력 수행'] },
  { name: '사이드스텝' },
  { name: '서전트점프' },
  { name: '매달리기' },
  { name: '메디신볼던지기', multipleChoice: ['3초 이상 유지 후 볼던지기 깔끔하게 수행', '1~3초 무난하게 유지 후 볼던지기 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 볼던지기 수행'] },
];

const PracticalScoreInputContainer = () => {
  const [step, setStep] = useState(0);
  const [practicalName, setPracticalName] = useState(types[0].name);
  const [practicalScore, setPracticalScore] = useState(types[0]?.multipleChoice);
  const { register, handleSubmit, setValue, formState, getValues } = useForm();

  const goPrevStep = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
      setPracticalName(types[step - 1].name);
      setPracticalScore(types[step - 1]?.multipleChoice);
    }
  }, [types, step]);

  const goNextStep = useCallback(() => {
    setStep(step + 1);
    if (step < types.length - 1) {
      setPracticalName(types[step + 1].name);
      setPracticalScore(types[step + 1]?.multipleChoice);
    }
  }, [types, step]);

  const onsubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      {step !== types.length && (
        <PracticalScoreInputForm type={practicalName} practicalScore={practicalScore} register={register} getValues={getValues} setValue={setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} index={step} lastType={types.length} />
      )}
      {step === types.length && <PracticalScoreCheckForm types={types} getValues={getValues} goPrevStep={goPrevStep} />}
    </form>
  );
};

export default PracticalScoreInputContainer;
