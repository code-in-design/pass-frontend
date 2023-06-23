import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import TranscriptTableContainer from './TranscriptTableContainer';
import ScoreFormAfterGradeConfirmedContainer from './ScoreFormAfterGradeConfirmedContainer';
import ScoreFormBeforeGradeConfirmedContainer from './ScoreFormBeforeGradeConfirmedContainer';
import useScores from '../hooks/useScores';
import { ScoreFormProvider } from '../context/useScoreFormContext';
import { useState } from 'react';

const MyScoreContainer = () => {
  const { isScoreEnteredOnFrontend, isBeforeScoreEnteredOnBackend, isAfterScoreEnteredOnBackend, step, 가채점기간, 성적발표후 } = useScores();
  let title = '성적 입력하기';
  let subtitle = '국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.';
  console.log('프론트입력:', isScoreEnteredOnFrontend, '서버데이터:', isBeforeScoreEnteredOnBackend, isAfterScoreEnteredOnBackend, 'step:', step, '가채점기간:', 가채점기간, '성적발표후:', 성적발표후);

  if (isBeforeScoreEnteredOnBackend || isAfterScoreEnteredOnBackend) {
    title = '내 점수 확인';
    subtitle = '';
  }

  return (
    <ScoreFormProvider>
      <GradeInputForm title={title} subtitle={subtitle}>
        {/** 가채점기간에 입력한 점수가 없는 경우 입력폼을 보여줌 */}
        {가채점기간 && !isBeforeScoreEnteredOnBackend && step === 0 && <ScoreFormBeforeGradeConfirmedContainer />}
        {/** 성적발표후 입력한 점수가 없는 경우 입력폼을 보여줌 */}
        {성적발표후 && !isAfterScoreEnteredOnBackend && step === 0 && <ScoreFormAfterGradeConfirmedContainer />}
        {/** 가채점기간이든 성적발표이후든 이미 입력한 점수가 있는 경우 성적표를 보여줌 */}
        {(isBeforeScoreEnteredOnBackend || isAfterScoreEnteredOnBackend) && <TranscriptTableContainer />}
      </GradeInputForm>
    </ScoreFormProvider>
  );
};

export default MyScoreContainer;
