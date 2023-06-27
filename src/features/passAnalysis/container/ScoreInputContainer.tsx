import React, { useCallback, useEffect, useState } from 'react';
import NaesinScoreInputForm from '../components/PassAnalysisMenu/NaesinScoreInputForm';
import VolunteerAttendanceInputForm from '../components/PassAnalysisMenu/VolunteerAttendanceInputForm';
import { useScoreContext } from '../context/useScoreContext';
import PracticalScoreInputContainer from './PracticalScoreInputContainer';

const ScoreInputContainer = () => {
  const [step, setStep] = useState(0);
  const { register, setValue, handleSubmit, trigger, getValues, watch, formState } = useScoreContext();
  const confirmStep0 = watch(['volunteerTime', 'absence', 'lateNumber', 'earlyLeaveNumber', 'resultNumber']);
  const [isdisable, setIsdisable] = useState(false);

  useEffect(() => {
    setIsdisable(confirmStep0.filter(v => v === '').length === 0);
  }, [confirmStep0]);

  const goPrevStep = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
    }
  }, [step]);

  const goNextStep = useCallback(async () => {
    setStep(step + 1);
  }, [step]);

  const onsubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      {step === 0 && <VolunteerAttendanceInputForm step={step} register={register} getValues={getValues} setValue={setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} isdisable={isdisable} />}
      {step === 1 && <NaesinScoreInputForm step={step} goPrevStep={goPrevStep} goNextStep={goNextStep} />}
      {step === 2 && <PracticalScoreInputContainer step={step} register={register} trigger={trigger} formState={formState} getValues={getValues} setValue={setValue} goPrevStep={goPrevStep} />}
    </form>
  );
};

export default ScoreInputContainer;
