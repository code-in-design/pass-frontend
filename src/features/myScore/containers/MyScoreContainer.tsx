import { useForm, useWatch } from 'react-hook-form';
import CheckMyScore from '../components/CheckMyScore';
import FinalGrades from '../components/FinalGrades';
import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import PreliminaryGrades from '../components/PreliminaryGrades';
import { useSetPreScoresMutation, useSetScoresMutation, useFetchPreScoresQuery, useFetchScoresQuery } from '../apis/scoresApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTransformFetchScore } from '../hooks/useTransformFetchScore';

const MyScoreContainer = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [hasScoreData, setHasScoreData] = useState(false);
  const [lists, setLists] = useState([]);
  const { register, setValue, handleSubmit, getValues, control, formState } = useForm();
  let fetchResult;
  const selectValue = useWatch({
    control,
    name: ['inquiry1Type', 'inquiry2Type'],
  });
  // 성적 입력하기
  const [setPreScores] = useSetPreScoresMutation();
  const [setScores] = useSetScoresMutation();
  //성적 불러오기
  const { data } = useFetchPreScoresQuery();
  // const { data } = useFetchScoresQuery();

  const onClickPrevButton = () => {
    router.push('/');
  };

  const onClickEditGrades = () => {
    setStep(prev => prev - 1);
  };

  const onClickNextButton = () => {
    setStep(prev => prev + 1);
  };

  const onSubmitBeforeConfirmGrade = async data => {
    console.log(data);
    if (getValues('inquiry1Type').value === '미응시') {
      setValue('inquiry1Score', 0);
    }
    if (getValues('inquiry2Type').value === '미응시') {
      setValue('inquiry2Score', 0);
    }
    // setPreScores(data);
  };

  const onSubmitAfterConfirmGrade = async data => {
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
    setStep(prev => prev + 1);
  };

  // if (data) {
  //   console.log(data);
  //   fetchResult = useTransformFetchScore(data);
  // setHasScoreData(true);
  // }

  // useEffect(() => {
  //   setStep(2);
  //   setLists(fetchResult);
  // }, [data]);
  return (
    <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
      {/* 성적 확정 전 */}
      <form onSubmit={handleSubmit(onSubmitBeforeConfirmGrade)} id="scoreForm">
        {step === 1 && <PreliminaryGrades onClickPrevButton={onClickPrevButton} onClickNextButton={onClickNextButton} register={register} setValue={setValue} />}
        {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} lists={lists} hasScoreData={hasScoreData} />}
      </form>

      {/* 성적 확정 후(수능 성적표 발표 후) */}
      {/* <form onSubmit={handleSubmit(onSubmitAfterConfirmGrade)}>
        {step === 1 && <FinalGrades selectValue={selectValue} onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} />}
        {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} lists={lists} />}
      </form> */}
    </GradeInputForm>
  );
};

export default MyScoreContainer;
