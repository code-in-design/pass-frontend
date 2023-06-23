import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSetPreScoresMutation, useSetScoresMutation } from '../apis/scoresApi';
import TranscriptTable from '../components/TranscriptTable';
import UniversityFinderModal from '../components/UniversityFinderModal';
import { useScoreFormContext } from '../context/useScoreFormContext';
import useScores from '../hooks/useScores';
import { ScoreModel } from '@/models/ScoreModel';

const TranscriptTableContainer = () => {
  const router = useRouter();
  const { transcript, dispatchPrevStep, dispatchSetTranscriptByBeforScores, dispatchSetTranscriptByAfterScores, beforeScore, afterScore, isScoreEnteredOnFrontend, isBeforeScoreEnteredOnBackend, 가채점기간, 성적발표후 } = useScores();
  const [setPreScore] = useSetPreScoresMutation();
  const [setScore] = useSetScoresMutation();
  const [isProcessing, setIsProcessing] = useState(false);
  const { getValues } = useScoreFormContext();

  const setFakeLoading = async () => {
    // 분석중인것을 표현하기 위해 일부러 3초간 로딩한다고 가정한다.
    const timeout: Promise<boolean> = new Promise(resolve =>
      setTimeout(() => {
        resolve(false);
      }, 3000),
    );
    setIsProcessing(true);
    const result = await timeout;
    setIsProcessing(result);
  };

  const handleModify = () => {
    dispatchPrevStep();
  };

  const handleSubmit = async () => {
    await setFakeLoading();
    const formData = getValues();
    if (가채점기간) await setPreScore(formData);
    if (성적발표후) await setScore(formData);
    router.push('/findUniversity');
  };

  useEffect(() => {
    // 가채점 기간에 입력한 성적값을 확인만하는 용도
    if (가채점기간 && isScoreEnteredOnFrontend && !isBeforeScoreEnteredOnBackend) {
      dispatchSetTranscriptByBeforScores(new ScoreModel(beforeScore.data));
    }
    // 가채점 기간에 입력한 성적값을 서버에서 보여줄때
    if (가채점기간 && isBeforeScoreEnteredOnBackend) {
      dispatchSetTranscriptByAfterScores(new ScoreModel(beforeScore.data));
    }
    if (성적발표후) {
      dispatchSetTranscriptByAfterScores(new ScoreModel(afterScore.data));
    }
  }, []);

  if (isEmpty(transcript)) return null;
  return (
    <>
      <UniversityFinderModal isOpen={isProcessing} />
      <TranscriptTable transcript={transcript} 가채점기간={가채점기간} onSubmit={handleSubmit} onModify={handleModify} hasButtons={isScoreEnteredOnFrontend} />
    </>
  );
};

export default TranscriptTableContainer;
