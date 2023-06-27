import { isEmpty } from 'lodash';
import React, { useCallback, useState } from 'react';
import { FieldValues, FormState, useForm, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormTrigger } from 'react-hook-form';
import PracticalScoreCheckForm from '../components/PassAnalysisMenu/PracticalScoreCheckForm';
import PracticalScoreInputForm from '../components/PassAnalysisMenu/PracticalScoreInputForm';
import PassAnalysisProcess from '../components/PassAnalysisProcess';

const types = [
  { name: '배근력', multipleChoice: ['3초 이상 유지 후 배근력 깔끔하게 수행', '1~3초 무난하게 유지 후 배근력 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 배근력 수행'] },
  { name: '제자리 멀리뛰기', multipleChoice: ['3초 이상 유지 후 멀리뛰기 깔끔하게 수행', '1~3초 무난하게 유지 후 멀리뛰기 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 멀리뛰기 수행'] },
  { name: '사이드스텝' },
  { name: '서전트점프' },
  { name: '매달리기' },
  { name: '메디신볼던지기', multipleChoice: ['3초 이상 유지 후 볼던지기 깔끔하게 수행', '1~3초 무난하게 유지 후 볼던지기 깔끔하게 수행', '다소 아쉬운 물구나무서기 후 무난한 볼던지기 수행'] },
];

interface Props {
  step: number;
  goPrevStep: () => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  formState: FormState<FieldValues>;
}

const PracticalScoreInputContainer = (props: Props) => {
  const [step, setStep] = useState(0);
  const [isProcess, setIsProcess] = useState(false);
  const typesName = types.map(type => type.name);

  const triggerAndCheck = async fields => {
    const result = await props.trigger(fields);
    if (!result) {
      if (!isEmpty(props.formState.errors)) {
        const firstKey = Object.keys(props.formState.errors)[0];
        const firstValue = props.formState.errors[firstKey];
        if (firstValue) {
          alert(firstValue.message);
        }
      }
    }
    return result;
  };

  const goPrevStep = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
    }
    if (step === 0 && props.step === 2) {
      props.goPrevStep();
    }
  }, [types, step]);

  const goNextStep = useCallback(async () => {
    const checkList = typesName[step];
    if (await triggerAndCheck(checkList)) {
      setStep(step + 1);
    }
  }, [types, step]);

  const onClickConfirm = () => {
    // setIsProcess(true);
  };

  return (
    <>
      {!isProcess && (
        <>
          {step !== types.length && <PracticalScoreInputForm types={types} step={step} register={props.register} getValues={props.getValues} setValue={props.setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} />}
          {step === types.length && <PracticalScoreCheckForm types={types} getValues={props.getValues} goPrevStep={goPrevStep} onClickConfirm={onClickConfirm} />}
        </>
      )}
      {isProcess && <PassAnalysisProcess />}
    </>
  );
};

export default PracticalScoreInputContainer;
