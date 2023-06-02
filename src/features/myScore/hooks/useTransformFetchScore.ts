export const useTransformFetchScore = data => {
  let fetchResult: any = [];

  const getScores = (area, cellData) => {
    return { area: area, ...cellData };
  };

  const payload = JSON.parse(data);
  fetchResult = [
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
  return fetchResult;
};
