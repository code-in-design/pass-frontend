import { useForm, useWatch } from 'react-hook-form';
import CheckMyScore from '../components/CheckMyScore';
import FinalGrades from '../components/FinalGrades';
import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import PreliminaryGrades from '../components/PreliminaryGrades';
import { useSetPreScoresMutation, useSetScoresMutation, useFetchPreScoresQuery, useFetchScoresQuery } from '../apis/scoresApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MyScoreContainer = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [lists, setLists] = useState([]);
  const { register, setValue, handleSubmit, formState, getValues, control } = useForm();
  const selectValue = useWatch({
    control,
    name: ['inquiry1Type', 'inquiry2Type'],
  });
  // 성적 입력하기
  const [setPreScores] = useSetPreScoresMutation();
  const [setScores] = useSetScoresMutation();
  //성적 불러오기
  // const { data, isLoading, error } = useFetchPreScoresQuery();
  const { data, isLoading, error } = useFetchScoresQuery();

  const onClickPrevButton = () => {
    router.push('/');
  };

  const onClickEditGrades = () => {
    setStep(prev => prev - 1);
  };

  const getScores = (area, cellData) => {
    return { area: area, ...cellData };
  };

  const onpresubmit = async data => {
    setPreScores(data);
  };

  const onsubmit = async data => {
    if (getValues('inquiry1Type').value === '미응시') {
      setValue('inquiry1Score', 0);
      setValue('inquiry1Percentile', 0);
      setValue('inquiry1Grade', 9);
    }
    if (getValues('inquiry2Type').value === '미응시') {
      setValue('inquiry2Score', 0);
      setValue('inquiry2Percentile', 0);
      setValue('inquiry2Grade', 9);
    }
    // setScores(data);
    console.log(data);
    // setStep(prev => prev + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (data) {
    const payload = JSON.parse(data);
    const result: any = [
      getScores('선택과목', {
        history: payload?.history_type,
        korean: payload?.korean_type,
        math: payload?.math_type,
        english: payload?.english_type,
        inquiry1: payload?.inquiry1_type,
        inquiry2: payload?.inquiry2_type,
      }),
      getScores('표준점수', {
        history: payload?.history_std_score,
        korean: payload?.korean_std_score,
        math: payload?.math_std_score,
        english: payload?.english_std_score,
        inquiry1: payload?.inquiry1_std_score,
        inquiry2: payload?.inquiry2_std_score,
      }),
      getScores('백분위', {
        history: payload?.history_percentile,
        korean: payload?.korean_percentile,
        math: payload?.math_percentile,
        english: payload?.english_percentile,
        inquiry1: payload?.inquiry1_percentile,
        inquiry2: payload?.inquiry2_percentile,
      }),
      getScores('등급', {
        history: payload?.kor_history_grade,
        korean: payload?.korean_grade,
        math: payload?.math_grade,
        english: payload?.english_grade,
        inquiry1: payload?.inquiry1_grade,
        inquiry2: payload?.inquiry2_grade,
      }),
    ];
    setStep(2);
    setLists(result);
  }

  return (
    <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
      {/* 성적 확정 전 */}
      <form onSubmit={handleSubmit(onpresubmit)}>
        {step === 1 && <PreliminaryGrades onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} />}
        {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} lists={lists} />}
      </form>

      {/* 성적 확정 후 */}
      <form onSubmit={handleSubmit(onsubmit)}>
        {step === 1 && <FinalGrades selectValue={selectValue} onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} />}
        {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} lists={lists} />}
      </form>
    </GradeInputForm>
  );
};

export default MyScoreContainer;
