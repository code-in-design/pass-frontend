import { ScoreModel } from '@/models/ScoreModel';

export const fillTableData = data => {
  let fetchResult: any = [];
  const scoresModel = new ScoreModel({});
  // TODO
  // scoresModel.englishGrade = data?.englishGrade;
  // scoresModel.historyGrade = data?.historyGrade;
  // scoresModel.inquiry1OptionalSubject = data?.inquiry1OptionalSubject.value || data?.inquiry1OptionalSubject;
  // scoresModel.inquiry1Percentile = data?.inquiry1Percentile;
  // scoresModel.inquiry1StandardScore = data?.inquiry1StandardScore;
  // scoresModel.inquiry1Grade = data?.inquiry1Grade;
  // scoresModel.inquiry1RawScore = data?.inquiry1RawScore;
  // scoresModel.inquiry2OptionalSubject = data?.inquiry2OptionalSubject.value || data?.inquiry2OptionalSubject;
  // scoresModel.inquiry2Percentile = data?.inquiry2Percentile;
  // scoresModel.inquiry2StandardScore = data?.inquiry2StandardScore;
  // scoresModel.inquiry2Grade = data?.inquiry2Grade;
  // scoresModel.inquiry2RawScore = data?.inquiry2RawScore;
  // scoresModel.mathOptionalSubject = data?.mathOptionalSubject || '미응시';
  // scoresModel.mathGrade = data?.mathGrade;
  // scoresModel.mathPercentile = data?.mathPercentile;
  // scoresModel.mathStandardScore = data?.mathStandardScore;
  // scoresModel.koreanOptionalSubject = data?.koreanOptionalSubject;
  // scoresModel.koreanRawScore = data?.koreanRawScore;
  // scoresModel.koreanGrade = data?.koreanGrade;
  // scoresModel.koreanPercentile = data?.koreanPercentile;
  // scoresModel.koreanStandardScore = data?.koreanStandardScore;
  fetchResult = [scoresModel.getOptionalSubject('선택과목'), scoresModel.getStandardScore('표준점수'), scoresModel.getPercentileScore('백분위'), scoresModel.getGradeBySubject('등급')];
  return fetchResult;
};
