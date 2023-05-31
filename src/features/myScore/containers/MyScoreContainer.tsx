import { useForm } from 'react-hook-form';
import CheckMyScore from '../components/CheckMyScore';
import FinalGrades from '../components/FinalGrades';
import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import PreliminaryGrades from '../components/PreliminaryGrades';
import { useSetPreScoresMutation, useSetScoresMutation, useFetchPreScoresQuery } from '../apis/scoresApi';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MyScoreContainer = () => {
  const router = useRouter();
  const [step, setStep] = useState(2);
  const { register, setValue, handleSubmit, formState } = useForm();
  // 성적 입력하기
  const [setPreScores] = useSetPreScoresMutation();
  const [setScores] = useSetScoresMutation();
  //성적 불러오기
  const fetchPreScores = useFetchPreScoresQuery();
  // const fetchScores = useFetchScoresQuery();

  const onClickPrevButton = () => {
    router.push('/');
  };

  const onClickEditGrades = () => {
    setStep(prev => prev - 1);
  };

  const onsubmit = data => {
    setPreScores(data);
    setStep(prev => prev + 1);
    fetchPreScores;
  };
  return (
    <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
      <form onSubmit={handleSubmit(onsubmit)}>
        {step === 1 && <PreliminaryGrades onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} />}
        {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} data={fetchPreScores.data} />}
        {/* <FinalGrades /> */}
      </form>
    </GradeInputForm>
  );
};

export default MyScoreContainer;
