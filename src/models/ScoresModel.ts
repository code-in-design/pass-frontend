export class ScoresModel {
  koreanType: string;
  koreanStdScore: string;
  koreanPercentile?: string;
  koreanGrade?: string;
  englishGrade: string;
  mathType: string;
  mathStdScore: string;
  mathPercentile?: string;
  mathGrade?: string;
  inquiry1Type: string;
  inquiry1StdScore: string;
  inquiry1Percentile?: string;
  inquiry1Grade?: string;
  inquiry2Type: string;
  inquiry2StdScore: string;
  inquiry2Percentile?: string;
  inquiry2Grade?: string;
  historyGrade: string;
  naesinGrade: string;
  constructor(
    koreanType: string,
    koreanStdScore: string,
    englishGrade: string,
    mathType: string,
    mathStdScore: string,
    inquiry1Type: string,
    inquiry1StdScore: string,
    inquiry2Type: string,
    inquiry2StdScore: string,
    historyGrade: string,
    naesinGrade: string,
    inquiry2Percentile?: string,
    inquiry1Percentile?: string,
    inquiry1Grade?: string,
    mathPercentile?: string,
    mathGrade?: string,
    inquiry2Grade?: string,
    koreanPercentile?: string,
    koreanGrade?: string,
  ) {
    this.koreanType = koreanType;
    this.koreanStdScore = koreanStdScore;
    this.koreanPercentile = koreanPercentile;
    this.koreanGrade = koreanGrade;
    this.englishGrade = englishGrade;
    this.mathType = mathType;
    this.mathStdScore = mathStdScore;
    this.mathPercentile = mathPercentile;
    this.mathGrade = mathGrade;
    this.inquiry1Type = inquiry1Type;
    this.inquiry1StdScore = inquiry1StdScore;
    this.inquiry1Percentile = inquiry1Percentile;
    this.inquiry1Grade = inquiry1Grade;
    this.inquiry2Type = inquiry2Type;
    this.inquiry2StdScore = inquiry2StdScore;
    this.inquiry2Percentile = inquiry2Percentile;
    this.inquiry2Grade = inquiry2Grade;
    this.historyGrade = historyGrade;
    this.naesinGrade = naesinGrade;
  }
}
