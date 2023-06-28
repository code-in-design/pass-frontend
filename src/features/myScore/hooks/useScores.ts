import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { ScoreModel } from '../../../models/ScoreModel';
import { useFetchPreScoresQuery, useFetchScoresQuery } from '../apis/scoresApi';
import { scoresActions } from '../slices/scoresSlice';
import { useEffect } from 'react';

const useScores = () => {
  const dispatch = useDispatch();
  const transcript = useSelector((state: RootState) => state.scores.transcript);
  // 프론트에서 입력받은 점수가 있는가
  const isScoreEnteredOnFrontend = !isEmpty(transcript?.items);
  // 서버에서 받아온 점수 (가채점기간 성적)
  const beforeScore = useFetchPreScoresQuery();
  // 서버에서 받아온 점수 (성적발표후 성적)
  const afterScore = useFetchScoresQuery();
  // 서버에 저장된 점수가 있는가
  const isScoreEnteredOnBackend = !isEmpty(beforeScore.data) && !isEmpty(afterScore.data);
  const isBeforeScoreEnteredOnBackend = !isEmpty(beforeScore.data);
  const isAfterScoreEnteredOnBackend = !isEmpty(afterScore.data);
  // TODO: 백엔드에서 데이터 받아와서 구분하기
  const 가채점기간 = false;
  const 성적발표후 = !가채점기간;

  const step = useSelector((state: RootState) => state.scores.step);

  const dispatchSetTranscriptByAfterScores = (score: ScoreModel) => {
    const transcript = score.transformToAfterTranscriptModel();
    dispatch(scoresActions.setTranscript(JSON.stringify(transcript)));
  };
  const dispatchSetTranscriptByBeforScores = (score: ScoreModel) => {
    const transcript = score.transformToBeforeTranscriptModel();
    dispatch(scoresActions.setTranscript(JSON.stringify(transcript)));
  };
  const dispatchNextStep = () => dispatch(scoresActions.goNextStep());

  const dispatchPrevStep = () => dispatch(scoresActions.goPrevStep());

  // 가채점기간 => beforeScore.data, 성적발표후 => afterScore.data
  useEffect(() => {
    // 가채점 기간에 입력한 성적값을 서버에서 보여줄때
    if (가채점기간 && isBeforeScoreEnteredOnBackend) {
      dispatchSetTranscriptByAfterScores(new ScoreModel(beforeScore.data));
    }
    if (성적발표후 && isAfterScoreEnteredOnBackend) {
      dispatchSetTranscriptByAfterScores(new ScoreModel(afterScore.data));
    }
  }, [beforeScore.data, afterScore.data]);

  return {
    가채점기간,
    성적발표후,
    beforeScore,
    afterScore,
    transcript,
    isScoreEnteredOnFrontend,
    isScoreEnteredOnBackend,
    isBeforeScoreEnteredOnBackend,
    isAfterScoreEnteredOnBackend,
    step,
    dispatchPrevStep,
    dispatchNextStep,
    dispatchSetTranscriptByAfterScores,
    dispatchSetTranscriptByBeforScores,
  };
};

export default useScores;
