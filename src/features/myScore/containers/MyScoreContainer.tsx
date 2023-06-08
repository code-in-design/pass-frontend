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

  const { register, setValue, handleSubmit, getValues, control } = useForm();
  const unRequiredFields = useWatch({
    control,
    name: ['inquiry1OptionalSubject', 'inquiry2OptionalSubject', 'mathDropout'],
  });

  const [step, setStep] = useState(1);
  const [scoreData, setScoreData] = useState([]);
  // 성적 입력하기
  const [setPreScores] = useSetPreScoresMutation();
  const [setScores] = useSetScoresMutation();
  //성적 불러오기
  const beforeScore = useFetchPreScoresQuery();
  const afterScore = useFetchScoresQuery();

  // 입력된 데이터가 있으면 step을 2로, 데이터가 없으면 step1로 설정한다.
  const step1OrStep2BasedOnData = useMemo(() => {
    if (isComfirmScore) {
      isEmpty(beforeScore.data) ? setStep(1) : setStep(2);
    }
    if (!isComfirmScore) {
      isEmpty(afterScore.data) ? setStep(1) : setStep(2);
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

  // 성적확정전,후를 구분해서 서버로 데이터를 보낸다.
  const sendDataBasedOnConfirmation = () => {
    const scoreData = getValues();
    if (isComfirmScore) {
      setPreScores(scoreData);
    } else {
      setScores(scoreData);
    }
  };

  // 성적을 입력하고 확인버튼을 누를때 에러가 없으면 실행됨
  const onSubmitConfirmGrade: SubmitHandler<FieldValues> = (data, event) => {
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

  useEffect(() => {
    step1OrStep2BasedOnData;
  }, []);

  return (
    <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
      {isComfirmScore ? (
        /* 성적 확정 전 */
        <form onSubmit={handleSubmit(onSubmitConfirmGrade, onErrorConfirmGrade)}>
          {step === 1 && <ScoreFormBeforeGradeConfirmed unRequiredFields={unRequiredFields} onClickPrevButton={onClickPrevButton} onClickNextButton={onClickNextButton} register={register} setValue={setValue} getValues={getValues} />}
          {step === 2 && <TableGradeCardContainer isComfirmScore={isComfirmScore} onClickEditGrades={onClickEditGrades} isScoreEntered={isEmpty(beforeScore.data)} scoreData={scoreData} sendScoreToServer={sendDataBasedOnConfirmation} />}
        </form>
      ) : (
        /* 성적 확정 후(수능 성적표 발표 후) */
        <form onSubmit={handleSubmit(onSubmitConfirmGrade, onErrorConfirmGrade)}>
          {step === 1 && <ScoreFormAfterGradeConfirmed unRequiredFields={unRequiredFields} onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} getValues={getValues} />}
          {step === 2 && <TableGradeCardContainer isComfirmScore={isComfirmScore} onClickEditGrades={onClickEditGrades} isScoreEntered={isEmpty(afterScore.data)} scoreData={scoreData} sendScoreToServer={sendDataBasedOnConfirmation} />}
        </form>
      )}
    </GradeInputForm>
  );
};

export default MyScoreContainer;
