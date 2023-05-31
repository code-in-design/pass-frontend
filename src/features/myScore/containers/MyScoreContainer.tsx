import { useForm } from 'react-hook-form';
import CheckMyScore from '../components/CheckMyScore';
import FinalGrades from '../components/FinalGrades';
import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import PreliminaryGrades from '../components/PreliminaryGrades';
import { useSetPreScoresMutation, useSetScoresMutation, useLazyFetchPreScoresQuery } from '../apis/scoresApi';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MyScoreContainer = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [lists, setLists] = useState([]);
  const { register, setValue, handleSubmit, formState } = useForm();
  // 성적 입력하기
  const [setPreScores] = useSetPreScoresMutation();
  const [setScores] = useSetScoresMutation();
  //성적 불러오기
  const [fetchPreScores] = useLazyFetchPreScoresQuery();
  // const fetchScores = useFetchScoresQuery();

  const onClickPrevButton = () => {
    router.push('/');
  };

  const onClickEditGrades = () => {
    setStep(prev => prev - 1);
  };

  const getScores = (area, scores) => {
    return { area: area, ...scores };
  };

  const onsubmit = async data => {
    setPreScores(data);
    setStep(prev => prev + 1);
    fetchPreScores()
      .then(res => {
        const payload = JSON.parse(res.data);
        const data: any = [
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
        setLists(data);
      })
      .catch(e => {
        console.log('/pre-scores/me error', e);
      });
  };

  return (
    <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
      <form onSubmit={handleSubmit(onsubmit)}>
        {step === 1 && <PreliminaryGrades onClickPrevButton={onClickPrevButton} register={register} setValue={setValue} />}
        {step === 2 && <CheckMyScore onClickEditGrades={onClickEditGrades} lists={lists} />}
        {/* <FinalGrades /> */}
      </form>
    </GradeInputForm>
  );
};

export default MyScoreContainer;
