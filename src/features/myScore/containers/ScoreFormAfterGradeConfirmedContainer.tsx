import { useRouter } from 'next/router';
import React from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import useFormError from '../../../hooks/useFormError';
import { ScoreModel } from '../../../models/ScoreModel';
import ScoreFormAfterGradeConfirmed from '../components/ScoreForms/ScoreFormAfterGradeConfirmed';
import { useScoreFormContext } from '../context/useScoreFormContext';
import useScores from '../hooks/useScores';

const ScoreFormAfterGradeConfirmedContainer = () => {
  const router = useRouter();
  const { dispatchSetTranscriptByAfterScores, dispatchNextStep } = useScores();
  const { onInvalid } = useFormError();
  const { register, setValue, handleSubmit, unRequiredFields, control } = useScoreFormContext();

  // 성적을 입력하고 확인버튼을 누를때 에러가 없으면 실행됨
  const onSubmitConfirmGrade: SubmitHandler<FieldValues> = (data, event) => {
    dispatchSetTranscriptByAfterScores(new ScoreModel(data));
    dispatchNextStep();
  };

  return <ScoreFormAfterGradeConfirmed unRequiredFields={unRequiredFields} register={register} setValue={setValue} control={control} handleSubmit={handleSubmit(onSubmitConfirmGrade, onInvalid)} onClickPrevButton={() => router.push('/')} />;
};

export default ScoreFormAfterGradeConfirmedContainer;
