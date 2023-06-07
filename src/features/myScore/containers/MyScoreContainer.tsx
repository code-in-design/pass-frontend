import { useForm, useWatch } from 'react-hook-form';
import CheckMyScore from '../components/CheckMyScore';
import FinalGrades from '../components/FinalGrades';
import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import PreliminaryGrades from '../components/PreliminaryGrades';
import { useSetPreScoresMutation, useSetScoresMutation, useFetchScoresQuery, useFetchPreScoresQuery } from '../apis/scoresApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fillTableData } from '../hooks/fillTableData';

const MyScoreContainer = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isScoreEntered, setIsScoreEntered] = useState(false);
  const { register, setValue, handleSubmit, getValues, control, formState } = useForm();
  const [scoreData, setScoreData] = useState();
  const [originalData, setOriginalData] = useState();
  let tableData;
  const unRequiredFields = useWatch({
    control,
    name: ['inquiry1OptionalSubject', 'inquiry2OptionalSubject', 'mathDropout'],
  });
  // 성적 확정전, 성적 확정후 유저가 입력한게 있냐 없냐로(또는 서버데이터) step이 넘어간다.

  // 성적 입력하기
  const [setPreScores] = useSetPreScoresMutation();
  const [setScores] = useSetScoresMutation();
  //성적 불러오기
  const { data, error } = useFetchPreScoresQuery();
  // const { data } = useFetchScoresQuery();

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
    setPreScores(originalData);
    // setScores(originalData);
  };

  const onSubmitBeforeConfirmGrade = async data => {
    setOriginalData(data);
    if (getValues('inquiry1OptionalSubject').value === '미응시') {
      setValue('inquiry1RawScore', 0);
    }
    if (getValues('inquiry2OptionalSubject').value === '미응시') {
      setValue('inquiry2RawScore', 0);
    }
    if (getValues('mathDropout')) {
      setValue('mathRawScore', 0);
    }

    // TODO
    // 테이블형태로 데이터를 바꾸고 다음페이지로 넘어간다
    const transData = fillTableData(data);
    setScoreData(transData);
    onClickNextButton();
  };

  const onSubmitAfterConfirmGrade = async data => {
    setOriginalData(data);
    if (getValues('inquiry1OptionalSubject').value === '미응시') {
      setValue('inquiry1StandardScore', 0);
      setValue('inquiry1Percentile', 0);
      setValue('inquiry1Grade', 9);
    }
    if (getValues('inquiry2OptionalSubject').value === '미응시') {
      setValue('inquiry2StandardScore', 0);
      setValue('inquiry2Percentile', 0);
      setValue('inquiry2Grade', 9);
    }
    const transData = fillTableData(data);
    setScoreData(transData);
    onClickNextButton();
  };

  if (data) {
    tableData = fillTableData(data);
  }

  useEffect(() => {
    if (data) {
      setScoreData(tableData);
      setStep(2);
      setIsScoreEntered(true);
    }
  }, [data]);

  return (
    <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
      {/* 성적 확정 전 */}
      <form onSubmit={handleSubmit(onSubmitBeforeConfirmGrade)}>
        {/** TODO: 성적 확정 전 점수 입력하기 => ScoreFormBeforeGreadeConfirmed */}
        {step === 1 && <PreliminaryGrades unRequiredFields={unRequiredFields} onClickPrevButton={onClickPrevButton} onClickNextButton={onClickNextButton} register={register} setValue={setValue} getValues={getValues} />}
        {/** TODO: 성적 확정 후 점수 입력하기 => ScoreFormAfterGreadeConfirmed */}
        {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} isScoreEntered={isScoreEntered} scoreData={scoreData} postScore={postScore} />}
      </form>

      {/* 성적 확정 후(수능 성적표 발표 후) */}
      {/* <form onSubmit={handleSubmit(onSubmitAfterConfirmGrade)}>
        {step === 1 && <FinalGrades unRequiredFields={unRequiredFields} onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} getValues={getValues} />}
        {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} isScoreEntered={isScoreEntered} scoreData={scoreData} postScore={postScore} />}
      </form> */}
    </GradeInputForm>
  );
};

export default MyScoreContainer;
