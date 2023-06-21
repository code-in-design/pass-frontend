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
  // TODO: 백엔드에서 데이터 받아와서 구분하기
  const 가채점기간 = true;
  const 성적발표후 = !가채점기간;

  const step = useSelector((state: RootState) => state.scores.step);

  const dispatchSetTranscript = transcript => dispatch(scoresActions.setTranscript(JSON.stringify(transcript)));
  const dispatchSetTranscriptByScores = (score: ScoreModel) => {
    const transcript = score.transformToTranscriptModel();
    dispatch(scoresActions.setTranscript(JSON.stringify(transcript)));
  };
  const dispatchNextStep = () => dispatch(scoresActions.goNextStep());
  const dispatchPrevStep = () => dispatch(scoresActions.goPrevStep());

  // 가채점기간 => beforeScore.data, 성적발표후 => afterScore.data
  useEffect(() => {
    if (beforeScore.isSuccess && 가채점기간) {
      dispatchSetTranscriptByScores(new ScoreModel(beforeScore.data));
    }
    if (afterScore.isSuccess && 성적발표후) {
      dispatchSetTranscriptByScores(new ScoreModel(afterScore.data));
    }
  }, [beforeScore.data, afterScore.data]);

  return { 가채점기간, 성적발표후, transcript, isScoreEnteredOnFrontend, isScoreEnteredOnBackend, step, dispatchPrevStep, dispatchNextStep, dispatchSetTranscript, dispatchSetTranscriptByScores };
};

export default useScores;
