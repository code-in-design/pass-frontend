import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { useSetPreScoresMutation, useSetScoresMutation, useFetchScoresQuery, useFetchPreScoresQuery } from '../apis/scoresApi';
import { ScoreModel } from '@/models/ScoreModel';
import ScoreFormBeforeGradeConfirmed from '../components/ScoreForms/ScoreFormBeforeGradeConfirmed';
import ScoreFormAfterGradeConfirmed from '../components/ScoreForms/ScoreFormAfterGradeConfirmed';
import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import TableGradeCardContainer from './TableGradeCardContainer';

const MyScoreContainer = () => {
  const router = useRouter();
  let tableScoreData;
  const isComfirmScore = false;

  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const unRequiredFields = useWatch({
    control,
    name: ['inquiry1OptionalSubject', 'inquiry2OptionalSubject', 'mathDropout'],
  });

  const [step, setStep] = useState(1);
  const [scoreData, setScoreData] = useState();
  // 성적 입력하기
  const [setPreScores] = useSetPreScoresMutation();
  const [setScores] = useSetScoresMutation();
  //성적 불러오기
  const beforeScore = useFetchPreScoresQuery();
  const afterScore = useFetchScoresQuery();

  // TODO: useFetchPreScoresQuery의 data가 없거나 useForm에 의해 유저가 입력한 값이 없으면 -> step1 아니면 step2 (useMemo로)

  // 입력된 데이터가 있으면 step2로 넘어가고,
  // 입력된 데이터가 없으면 step1로 가는 함수
  // hasData -> 데이터가 있냐,
  // TODO: 이름 수정
  const hasData = useMemo(() => {
    if (isComfirmScore) {
      if (isEmpty(beforeScore.data)) {
        setStep(1);
      } else {
        setStep(2);
        const scoreModel = new ScoreModel(beforeScore.data);
        tableScoreData = scoreModel.getGrades(scoreModel);
        setScoreData(tableScoreData);
      }
    } else {
      if (isEmpty(afterScore.data)) {
        setStep(1);
      } else {
        setStep(2);
        const scoreModel = new ScoreModel(afterScore.data);
        tableScoreData = scoreModel.getGrades(scoreModel);
        setScoreData(tableScoreData);
      }
    }
  }, [isComfirmScore, beforeScore, afterScore]);

  const onClickPrevButton = () => {
    router.push('/');
  };

  const onClickEditGrades = () => {
    setStep(prev => prev - 1);
  };

  const onClickNextButton = () => {
    setStep(prev => prev + 1);
  };

  // TODO: 이름 바꾸기
  const postScore = () => {
    const scoreData = getValues();
    if (isComfirmScore) {
      setPreScores(scoreData);
    } else {
      setScores(scoreData);
    }
  };

  // 성적을 입력하고 확인버튼을 누를때 에러가 없으면 실행됨
  const onSubmitConfirmGrade: SubmitHandler<FieldValues> = (data, event) => {
    console.log(data, event);
    const scoreModel = new ScoreModel(data);
    tableScoreData = scoreModel.getGrades(scoreModel);
    setScoreData(tableScoreData);
    onClickNextButton();
  };

  // 성적을 입력하고 확인버튼을 누를때 에러가 있으면 실행됨
  const onErrorConfirmGrade: SubmitErrorHandler<FieldValues> = (errors, event) => {
    if (!isEmpty(errors)) {
      const firstKey = Object.keys(errors)[0];
      const firstValue = errors[firstKey];
      if (firstValue) {
        alert(firstValue?.message);
      }
    }
  };

  // useEffect(() => {
  //   if (!isEmpty(errors)) {
  //     const firstKey = Object.keys(errors)[0];
  //     const firstValue = errors[firstKey];
  //     if (firstValue) {
  //       alert(firstValue?.message);
  //     }
  //   }
  // }, [errors]);

  return (
    <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
      {isComfirmScore ? (
        /* 성적 확정 전 */
        <form onSubmit={handleSubmit(onSubmitConfirmGrade, onErrorConfirmGrade)}>
          {step === 1 && <ScoreFormBeforeGradeConfirmed unRequiredFields={unRequiredFields} onClickPrevButton={onClickPrevButton} onClickNextButton={onClickNextButton} register={register} setValue={setValue} getValues={getValues} />}
          {step === 2 && <TableGradeCardContainer onClickEditGrades={onClickEditGrades} isScoreEntered={isEmpty(beforeScore.data)} scoreData={scoreData} postScore={postScore} />}
        </form>
      ) : (
        /* 성적 확정 후(수능 성적표 발표 후) */
        <form onSubmit={handleSubmit(onSubmitConfirmGrade, onErrorConfirmGrade)}>
          {step === 1 && <ScoreFormAfterGradeConfirmed unRequiredFields={unRequiredFields} onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} getValues={getValues} />}
          {step === 2 && <TableGradeCardContainer onClickEditGrades={onClickEditGrades} isScoreEntered={isEmpty(afterScore.data)} scoreData={scoreData} postScore={postScore} />}
        </form>
      )}
    </GradeInputForm>
  );
};

export default MyScoreContainer;
