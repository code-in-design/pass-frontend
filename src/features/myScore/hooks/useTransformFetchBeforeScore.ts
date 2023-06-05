export const useTransformFetchBeforeScore = data => {
  let fetchResult: any = [];

  const getScores = (area, cellData) => {
    return { area: area, ...cellData };
  };

  fetchResult = [
    getScores('선택과목', {
      history: data?.historyType,
      korean: data?.koreanType,
      math: data?.mathType,
      english: data?.englishType,
      inquiry1: data?.inquiry1Type?.value || '미응시',
      inquiry2: data?.inquiry2Type?.vlaue || '미응시',
    }),
    getScores('표준점수', {
      history: data?.historyScore,
      korean: data?.koreanScore,
      math: data?.mathScore,
      english: data?.englishScore,
      inquiry1: data?.inquiry1Score,
      inquiry2: data?.inquiry2Score,
    }),
    getScores('백분위', {
      history: data?.historyPercentile,
      korean: data?.koreanPercentile,
      math: data?.mathPercentile,
      english: data?.englishPercentile,
      inquiry1: data?.inquiry1Percentile,
      inquiry2: data?.inquiry2Percentile,
    }),
    getScores('등급', {
      history: data?.historyGrade,
      korean: data?.koreanGrade,
      math: data?.mathGrade,
      english: data?.englishGrade,
      inquiry1: data?.inquiry1Grade,
      inquiry2: data?.inquiry2Grade,
    }),
  ];
  return fetchResult;
};
