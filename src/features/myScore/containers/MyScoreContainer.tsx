import { useForm } from 'react-hook-form';
import CheckMyScore from '../components/CheckMyScore';
import FinalGrades from '../components/FinalGrades';
import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import PreliminaryGrades from '../components/PreliminaryGrades';

const MyScoreContainer = () => {
  return (
    <>
      <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
        <PreliminaryGrades />
      </GradeInputForm>
      {/* <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 표준점수와 백분위, 등급을, 영어·한국사는 등급을 입력해주세요.">
        <FinalGrades />
      </GradeInputForm> */}
      <GradeInputForm title="성적 입력하기">
        <CheckMyScore />
      </GradeInputForm>
    </>
  );
};

export default MyScoreContainer;
