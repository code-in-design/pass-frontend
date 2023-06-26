import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import NaesinScoreInputForm from '../components/PassAnalysisMenu/NaesinScoreInputForm';
import VolunteerAttendanceInputForm from '../components/PassAnalysisMenu/VolunteerAttendanceInputForm';
import { useNaesinScoreContext } from '../context/useNaesinScoreContext';

const NaesinScoreContainer = () => {
  const [step, setStep] = useState(0);
  const [isProcess, setIsProcess] = useState(false);
  const { register, setValue, handleSubmit, control, getValues, watch } = useForm();
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
      {step === 0 && <VolunteerAttendanceInputForm step={step} register={register} getValues={getValues} setValue={setValue} goPrevStep={goPrevStep} goNextStep={goNextStep} isdisable={isdisable} />}
      {step === 1 && <NaesinScoreInputForm step={step} goPrevStep={goPrevStep} goNextStep={goNextStep} />}
    </>
  );
};

export default NaesinScoreContainer;
