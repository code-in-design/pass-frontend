import { isEmpty } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import NaesinScoreInputForm from '../components/PassAnalysisMenu/NaesinScoreInputForm';
import VolunteerAttendanceInputForm from '../components/PassAnalysisMenu/VolunteerAttendanceInputForm';

const NaesinScoreContainer = () => {
  const [step, setStep] = useState(0);
  const [isProcess, setIsProcess] = useState(false);
  const { register, handleSubmit, setValue, formState, control, getValues, trigger, watch } = useForm();
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

  const onClickConfirm = () => {
    setIsProcess(true);
  };

  const onsubmit = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        {step === 0 && <VolunteerAttendanceInputForm step={step} register={register} getValues={getValues} setValue={setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} isdisable={isdisable} />}
        {step === 1 && <NaesinScoreInputForm step={step} register={register} getValues={getValues} setValue={setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} />}
      </form>
    </>
  );
};

export default NaesinScoreContainer;
