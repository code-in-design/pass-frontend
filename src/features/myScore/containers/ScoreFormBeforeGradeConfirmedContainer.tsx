import { useRouter } from 'next/router';
import React from 'react';
import { FieldValues, SubmitHandler, useWatch } from 'react-hook-form';
import useFormError from '../../../hooks/useFormError';
import { ScoreModel } from '../../../models/ScoreModel';
import ScoreFormBeforeGradeConfirmed from '../components/ScoreForms/ScoreFormBeforeGradeConfirmed';
import { useScoreFormContext } from '../context/useScoreFormContext';
import useScores from '../hooks/useScores';

const ScoreFormBeforeGradeConfirmedContainer = () => {
  const router = useRouter();
  const { dispatchSetTranscriptByScores, dispatchNextStep } = useScores();
  const { onInvalid } = useFormError();
  const { register, setValue, handleSubmit, control } = useScoreFormContext();
  // 성적을 입력하고 확인버튼을 누를때 에러가 없으면 실행됨
  const onSubmitConfirmGrade: SubmitHandler<FieldValues> = (data, event) => {
    dispatchSetTranscriptByScores(new ScoreModel(data));
    dispatchNextStep();
  };

  return <ScoreFormBeforeGradeConfirmed register={register} setValue={setValue} control={control} handleSubmit={handleSubmit(onSubmitConfirmGrade, onInvalid)} onClickPrevButton={() => router.push('/')} />;
};

export default ScoreFormBeforeGradeConfirmedContainer;
