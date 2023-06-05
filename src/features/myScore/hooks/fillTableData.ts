import { ScoresModel } from '@/models/ScoresModel';

export const fillTableData = () => {
  let fetchResult: any = [];
  const scoresModel = new ScoresModel();
  fetchResult = [scoresModel.getOptionalSubject('선택과목'), scoresModel.getStandardScore('표준점수'), scoresModel.getPercentileScore('백분위'), scoresModel.getGradeBySubject('등급')];
  return fetchResult;
};
