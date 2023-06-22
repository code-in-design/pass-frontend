import { isEmpty } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import NaesinScoreInputForm from '../components/PassAnalysisMenu/NaesinScoreInputForm';
import VolunteerAttendanceInputForm from '../components/PassAnalysisMenu/VolunteerAttendanceInputForm';

const NaesinScoreContainer = () => {
  const [step, setStep] = useState(0);
  const [isProcess, setIsProcess] = useState(false);
  const { register, handleSubmit, setValue, formState, control, getValues, trigger, watch } = useForm();
  const confirmStep0 = getValues(['volunteerTime', 'absence', 'lateNumber', 'earlyLeaveNumber', 'resultNumber']);

  const triggerAndCheck = async fields => {
    const result = await trigger(fields);
    if (!result) {
      if (!isEmpty(formState.errors)) {
        const firstKey = Object.keys(formState.errors)[0];
        const firstValue = formState.errors[firstKey];
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
  }, [step]);

  const goNextStep = useCallback(async () => {
    setStep(step + 1);
  }, [step]);

  const onClickConfirm = () => {
    setIsProcess(true);
  };

  const onsubmit = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        {step === 0 && <VolunteerAttendanceInputForm step={step} register={register} getValues={getValues} setValue={setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} />}
        {step === 1 && <NaesinScoreInputForm step={step} register={register} getValues={getValues} setValue={setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} />}
      </form>
    </>
  );
};

export default NaesinScoreContainer;
