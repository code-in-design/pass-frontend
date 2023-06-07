import { useForm, useWatch } from 'react-hook-form';
import CheckMyScore from '../components/CheckMyScore';
import FinalGrades from '../components/FinalGrades';
import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import PreliminaryGrades from '../components/PreliminaryGrades';
import { useSetPreScoresMutation, useSetScoresMutation, useFetchScoresQuery, useFetchPreScoresQuery } from '../apis/scoresApi';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { fillTableData } from '../hooks/fillTableData';
import { isEmpty } from 'lodash';
import { ScoreModel } from '@/models/ScoreModel';

const MyScoreContainer = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { register, setValue, handleSubmit, getValues, control, formState } = useForm();
  const [scoreData, setScoreData] = useState();
  const unRequiredFields = useWatch({
    control,
    name: ['inquiry1OptionalSubject', 'inquiry2OptionalSubject', 'mathDropout'],
  });
  let tableData;
  const isComfirmScore = true;
  // 성적 확정전, 성적 확정후 유저가 입력한게 있냐 없냐로(또는 서버데이터) step이 넘어간다.

  // 성적 입력하기
  const [setScores] = isComfirmScore ? useSetPreScoresMutation() : useSetScoresMutation();
  //성적 불러오기
  const { data } = isComfirmScore ? useFetchPreScoresQuery() : useFetchScoresQuery();
  const scoreModel = new ScoreModel();

  // TODO: useFetchPreScoresQuery의 data가 없거나 useForm에 의해 유저가 입력한 값이 없으면 -> step1 아니면 step2 (useMemo로)

  // TODO: 객체형식 데이터랑 테이블 형식 데이터를 이름을 잘 구분짓기
  // TODO: useMemo로 테이블 형식으로 데이터 변환하기

  const onClickPrevButton = () => {
    router.push('/');
  };

  const onClickEditGrades = () => {
    setStep(prev => prev - 1);
  };

  const onClickNextButton = () => {
    setStep(prev => prev + 1);
  };

  const postScore = () => {
    const scoreData = getValues();
    setScores(scoreData);
  };

  const onSubmitBeforeConfirmGrade = async data => {
    // TODO
    // 테이블형태로 데이터를 바꾸고 다음페이지로 넘어간다
    const transData = fillTableData(data);
    setScoreData(transData);
    // onClickNextButton();
  };

  const onSubmitAfterConfirmGrade = async data => {
    const transData = fillTableData(data);
    setScoreData(transData);
    onClickNextButton();
  };

  if (data) {
    tableData = fillTableData(data);
  }

  // if (formState.errors) {
  //   const firstKey = Object.keys(formState.errors)[0];
  //   const firstValue = formState.errors[firstKey];
  //   if (firstValue) {
  //     alert(firstValue.message);
  //   }
  // }
  console.log(formState.errors);

  useEffect(() => {
    if (data) {
      setScoreData(tableData);
      setStep(2);
    }
  }, [data]);

  return (
    <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
      {isComfirmScore ? (
        /* 성적 확정 전 */
        <form onSubmit={handleSubmit(onSubmitBeforeConfirmGrade)}>
          {/** TODO: 성적 확정 전 점수 입력하기 => ScoreFormBeforeGreadeConfirmed */}
          {step === 1 && <PreliminaryGrades unRequiredFields={unRequiredFields} onClickPrevButton={onClickPrevButton} onClickNextButton={onClickNextButton} register={register} setValue={setValue} getValues={getValues} />}
          {/** TODO: 성적 확정 후 점수 입력하기 => ScoreFormAfterGreadeConfirmed */}
          {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} isScoreEntered={isEmpty(data)} scoreData={scoreData} postScore={postScore} />}
        </form>
      ) : (
        /* 성적 확정 후(수능 성적표 발표 후) */
        <form onSubmit={handleSubmit(onSubmitAfterConfirmGrade)}>
          {step === 1 && <FinalGrades unRequiredFields={unRequiredFields} onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} getValues={getValues} />}
          {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} isScoreEntered={isEmpty(data)} scoreData={scoreData} postScore={postScore} />}
        </form>
      )}
    </GradeInputForm>
  );
};

export default MyScoreContainer;
