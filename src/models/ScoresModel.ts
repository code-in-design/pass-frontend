export class ScoresModel {
  koreanOptionalSubject?: string; //국어 선택과목
  koreanRawScore?: string; //국어 원점수
  koreanStandardScore?: string; //국어 표준점수
  koreanPercentile?: string; // 국어 백분위
  koreanGrade?: string; // 국어 등급
  englishGrade?: string; // 영어 등급
  mathOptionalSubject?: string; // 수학 선택과목
  mathRawScore?: string; // 수학 원점수
  mathStandardScore?: string; // 수학 표준점수
  mathPercentile?: string; // 수학 백분위
  mathGrade?: string; // 수학 등급
  inquiry1OptionalSubject?: string;
  inquiry1RawScore?: string;
  inquiry1StandardScore?: string;
  inquiry1Percentile?: string;
  inquiry1Grade?: string;
  inquiry2OptionalSubject?: string;
  inquiry2RawScore?: string;
  inquiry2StandardScore?: string;
  inquiry2Percentile?: string;
  inquiry2Grade?: string;
  historyGrade?: string;
  naesinGrade?: string;
  constructor(data?: Partial<ScoresModel>) {
    // TODO
    this.koreanOptionalSubject = data?.koreanOptionalSubject;
    // this.koreanRawScore = koreanRawScore;
    // this.koreanStandardScore = koreanStandardScore;
    // this.koreanPercentile = koreanPercentile;
    // this.koreanGrade = koreanGrade;
    // this.englishGrade = englishGrade;
    // this.mathOptionalSubject = mathOptionalSubject;
    // this.mathRawScore = mathRawScore;
    // this.mathStandardScore = mathStandardScore;
    // this.mathPercentile = mathPercentile;
    // this.mathGrade = mathGrade;
    // this.inquiry1OptionalSubject = inquiry1OptionalSubject;
    // this.inquiry1RawScore = inquiry1RawScore;
    // this.inquiry1StandardScore = inquiry1StandardScore;
    // this.inquiry1Percentile = inquiry1Percentile;
    // this.inquiry1Grade = inquiry1Grade;
    // this.inquiry2OptionalSubject = inquiry2OptionalSubject;
    // this.inquiry2RawScore = inquiry2RawScore;
    // this.inquiry2StandardScore = inquiry2StandardScore;
    // this.inquiry2Percentile = inquiry2Percentile;
    // this.inquiry2Grade = inquiry2Grade;
    // this.historyGrade = historyGrade;
    // this.naesinGrade = naesinGrade;
  }

  formatModelConfirmData = data => {
    return {
      korean_type: data.koreanOptionalSubject,
      korean_std_score: Number(data.koreanStandardScore),
      korean_percentile: Number(data.koreanPercentile),
      korean_grade: Number(data.koreanGrade),
      english_grade: Number(data.englishGrade),
      math_type: data.mathOptionalSubject,
      math_std_score: Number(data.mathStandardScore),
      math_percentile: Number(data.mathPercentile),
      math_grade: Number(data.mathGrade),
      inquiry1_type: data.inquiry1OptionalSubject.value,
      inquiry1_std_score: Number(data.inquiry1StandardScore),
      inquiry1_percentile: Number(data.inquiry1Percentile),
      inquiry1_grade: Number(data.inquiry1Grade),
      inquiry2_type: data.inquiry2OptionalSubject.value,
      inquiry2_std_score: Number(data.inquiry2StandardScore),
      inquiry2_percentile: Number(data.inquiry2Percentile),
      inquiry2_grade: Number(data.inquiry2Grade),
      kor_history_grade: Number(data.historyGrade),
      naesin_grade: data.naesinGrade === '' ? null : Number(data.naesinGrade),
    };
  };

  formatModelData = data => {
    return {
      korean_type: data.koreanOptionalSubject,
      korean_score: Number(data.koreanRawScore),
      english_grade: Number(data.englishGrade),
      math_type: data.mathOptionalSubject,
      math_score: Number(data.mathRawScore),
      inquiry1_type: data.inquiry1OptionalSubject.value,
      inquiry1_score: Number(data.inquiry1RawScore),
      inquiry2_type: data.inquiry2OptionalSubject.value,
      inquiry2_score: Number(data.inquiry2RawScore),
      kor_history_grade: Number(data.historyGrade),
      naesin_grade: data.naesinGrade === '' ? null : Number(data.naesinGrade),
    };
  };
  setModelData = data => {
    return {
      koreanOptionalSubject: data.korean_type,
      koreanRawScore: data.korean_score,
      koreanStandardScore: data.korean_std_score,
      koreanPercentile: data.korean_percentile,
      koreanGrade: data.korean_grade,
      englishGrade: data.english_grade,
      mathOptionalSubject: data.math_type,
      mathRawScore: data.math_score,
      mathStandardScore: data.math_std_score,
      mathPercentile: data.math_percentile,
      mathGrade: data.math_grade,
      inquiry1OptionalSubject: data.inquiry1_type,
      inquiry1RawScore: data.inquiry1_score,
      inquiry1StandardScore: data.inquiry1_std_score,
      inquiry1Percentile: data.inquiry1_percentile,
      inquiry1Grade: data.inquiry1_grade,
      inquiry2OptionalSubject: data.inquiry2_type,
      inquiry2RawScore: data.inquiry2_score,
      inquiry2StandardScore: data.inquiry2_std_score,
      inquiry2Percentile: data.inquiry2_percentile,
      inquiry2Grade: data.inquiry2_grade,
      historyGrade: data.kor_history_grade,
      naesinGrade: data.naesin_grade,
    };
  };

  // TODO: 이름 바꾸기 (성적표를 가져온다)
  getOOO = (score: ScoresModel) => {
    return [score.getOptionalSubject('선택과목'), score.getStandardScore('표준점수'), score.getPercentileScore('백분위'), score.getGradeBySubject('등급')];
  };

  // 선택과목 행 데이터 가져오기
  getOptionalSubject = rowHeader => {
    return {
      rowHeader: rowHeader,
      history: '-',
      korean: this.koreanOptionalSubject,
      math: this.mathOptionalSubject,
      english: '-',
      inquiry1: this.inquiry1OptionalSubject,
      inquiry2: this.inquiry2OptionalSubject,
    };
  };
  // 표준점수 행 데이터 가져오기
  getStandardScore = rowHeader => {
    return {
      rowHeader: rowHeader,
      history: '-',
      korean: this.koreanStandardScore,
      math: this.mathStandardScore,
      english: '-',
      inquiry1: this.inquiry1StandardScore,
      inquiry2: this.inquiry2StandardScore,
    };
  };
  // 백분위 행 데이터 가져오기
  getPercentileScore = rowHeader => {
    return {
      rowHeader: rowHeader,
      history: '-',
      korean: this.koreanPercentile,
      math: this.mathPercentile,
      english: '-',
      inquiry1: this.inquiry1Percentile,
      inquiry2: this.inquiry2Percentile,
    };
  };
  // 등급 행 데이터 가져오기
  getGradeBySubject = rowHeader => {
    return {
      rowHeader: rowHeader,
      history: this.historyGrade,
      korean: this.koreanGrade,
      math: this.mathGrade,
      english: this.englishGrade,
      inquiry1: this.inquiry1Grade,
      inquiry2: this.inquiry2Grade,
    };
  };
}
