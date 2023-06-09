import GradeInputForm from '../components/GradeInputForm/GradeInputForm';
import TranscriptTableContainer from './TranscriptTableContainer';
import ScoreFormAfterGradeConfirmedContainer from './ScoreFormAfterGradeConfirmedContainer';
import ScoreFormBeforeGradeConfirmedContainer from './ScoreFormBeforeGradeConfirmedContainer';
import useScores from '../hooks/useScores';
import { ScoreFormProvider } from '../context/useScoreFormContext';

const MyScoreContainer = () => {
  const { isScoreEnteredOnFrontend, isScoreEnteredOnBackend, step, 가채점기간, 성적발표후 } = useScores();
  return (
    <ScoreFormProvider>
      <GradeInputForm title="성적 입력하기" subtitle="국어·수학·탐구 과목은 원점수를, 영어·한국사는 등급을 입력해주세요.">
        {/** 가채점기간이든 성적발표이후든 이미 입력한 점수가 있는 경우 성적표를 보여줌 */}
        {(isScoreEnteredOnBackend || isScoreEnteredOnFrontend) && <TranscriptTableContainer />}
        {/** 가채점기간에 입력한 점수가 없는 경우 입력폼을 보여줌 */}
        {가채점기간 && !isScoreEnteredOnBackend && step === 1 && <ScoreFormBeforeGradeConfirmedContainer />}
        {/** 성적발표후 입력한 점수가 없는 경우 입력폼을 보여줌 */}
        {성적발표후 && !isScoreEnteredOnBackend && step === 1 && <ScoreFormAfterGradeConfirmedContainer />}
      </GradeInputForm>
    </ScoreFormProvider>
  );
};

export default MyScoreContainer;
