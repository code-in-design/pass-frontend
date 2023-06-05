export const useTransformFetchAfterScore = data => {
  let fetchResult: any = [];

  const getScores = (area, cellData) => {
    return { area: area, ...cellData };
  };

  fetchResult = [
    getScores('선택과목', {
      history: data?.kor_history_type,
      korean: data?.korean_type,
      math: data?.math_type,
      english: data?.english_type,
      inquiry1: data?.inquiry1_type,
      inquiry2: data?.inquiry2_type,
    }),
    getScores('표준점수', {
      history: data?.kor_history_std_score,
      korean: data?.korean_std_score,
      math: data?.math_std_score,
      english: data?.english_std_score,
      inquiry1: data?.inquiry1_std_score,
      inquiry2: data?.inquiry2_std_score,
    }),
    getScores('백분위', {
      history: data?.kor_history_percentile,
      korean: data?.korean_percentile,
      math: data?.math_percentile,
      english: data?.englishPercentile,
      inquiry1: data?.inquiry1_percentile,
      inquiry2: data?.inquiry2_percentile,
    }),
    getScores('등급', {
      history: data?.kor_history_grade,
      korean: data?.korean_grade,
      math: data?.math_grade,
      english: data?.english_grade,
      inquiry1: data?.inquiry1_grade,
      inquiry2: data?.inquiry2_grade,
    }),
  ];
  return fetchResult;
};
