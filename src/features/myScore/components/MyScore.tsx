import { useForm } from 'react-hook-form';
import GradeInputForm from './GradeInputForm/GradeInputForm';
import PreliminaryGrades from './PreliminaryGrades';
import FinalGrades from './FinalGrades';
import CheckMyScore from './CheckMyScore';

const MyScoare = () => {
  const { register, setValue } = useForm();

  return (
    <>
      <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
        <PreliminaryGrades register={register} setValue={setValue} />
      </GradeInputForm>
      <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 표준점수와 백분위, 등급을, 영어·한국사는 등급을 입력해주세요.">
        <FinalGrades register={register} setValue={setValue} />
      </GradeInputForm>
      <GradeInputForm title="성적 입력하기">
        <CheckMyScore />
      </GradeInputForm>
    </>
  );
};

export default MyScoare;
