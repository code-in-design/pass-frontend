import { PracticalApplyModel } from './PracticalApplyModel';

export class UniversityDepartmentsModel {
  departmentName: string; //학과이름
  conversionScore: number; //수능환산점수
  possibilityOfSupport: string; //지원가능성
  recruitmentGroup: string; //모집군
  contribution: string; //기여도
  zValue: number; //z-지수
  koreanRequired: string; //국어 필수반영
  koreanChoice: string; //국어 선택반영
  koreanNoApply: string; //국어 미반영
  mathRequired: string; //수학 필수반영
  mathChoice: string; //수학 선택반영
  mathNoApply: string; //수학 미반영
  englishRequired: string; //영어 필수반영
  englishChoice: string; //영어 선택반영
  englishNoApply: string; //영어 미반영
  inquiryRequired: string; //탐구 필수반영
  inquiryChoice: string; //탐구 선택반영
  inquiryNoApply: string; //탐구 미반영
  competitionMinRate: number; //경쟁률 최소
  competitionMaxRate: number; //경쟁률 최대
  recruitNumber: number; //모집정원
  practicalTestDate: string; //실기고사 일정
  successfulApplicantDate: string; //합격자 발표일
  departmentInformation: string; //학과정보
  recruitmentGuideline: string; //모집요강
  testRate: number; //수능 전형반영비율
  practicalRate: number; //실기 전형반영비율
  naesinRate: number; //내신 전형반영비율
  etcRate: number; //기타 전형빈영비율
  testKoreanRate: number; //수능 국어 반영 비율
  testMathRate: number; //수능 수학 반영 비율
  testEnglishRate: number; //수능 영어 반영 비율
  testInquiryRate: number; //수능 탐구 반영 비율
  testHistoryRate: number; //수능 한국사 반영 비율
  practicalApplyTypes: PracticalApplyModel[]; //실기 반영 종목

  constructor(
    departmentName: string,
    conversionScore: number,
    possibilityOfSupport: string,
    recruitmentGroup: string,
    contribution: string,
    zValue: number,
    koreanRequired: string,
    koreanChoice: string,
    koreanNoApply: string,
    mathRequired: string,
    mathChoice: string,
    mathNoApply: string,
    englishRequired: string,
    englishChoice: string,
    englishNoApply: string,
    inquiryRequired: string,
    inquiryChoice: string,
    inquiryNoApply: string,
    competitionMinRate: number,
    competitionMaxRate: number,
    recruitNumber: number,
    practicalTestDate: string,
    successfulApplicantDate: string,
    departmentInformation: string,
    recruitmentGuideline: string,
    testRate: number,
    practicalRate: number,
    naesinRate: number,
    etcRate: number,
    testKoreanRate: number,
    testMathRate: number,
    testEnglishRate: number,
    testInquiryRate: number,
    testHistoryRate: number,
    practicalApplyTypes: PracticalApplyModel[],
  ) {
    this.departmentName = departmentName;
    this.conversionScore = conversionScore;
    this.possibilityOfSupport = possibilityOfSupport;
    this.recruitmentGroup = recruitmentGroup;
    this.contribution = contribution;
    this.zValue = zValue;
    this.koreanRequired = koreanRequired;
    this.koreanChoice = koreanChoice;
    this.koreanNoApply = koreanNoApply;
    this.mathRequired = mathRequired;
    this.mathChoice = mathChoice;
    this.mathNoApply = mathNoApply;
    this.englishRequired = englishRequired;
    this.englishChoice = englishChoice;
    this.englishNoApply = englishNoApply;
    this.inquiryRequired = inquiryRequired;
    this.inquiryChoice = inquiryChoice;
    this.inquiryNoApply = inquiryNoApply;
    this.competitionMinRate = competitionMinRate;
    this.competitionMaxRate = competitionMaxRate;
    this.recruitNumber = recruitNumber;
    this.practicalTestDate = practicalTestDate;
    this.successfulApplicantDate = successfulApplicantDate;
    this.departmentInformation = departmentInformation;
    this.recruitmentGuideline = recruitmentGuideline;
    this.testRate = testRate;
    this.practicalRate = practicalRate;
    this.naesinRate = naesinRate;
    this.etcRate = etcRate;
    this.testKoreanRate = testKoreanRate;
    this.testMathRate = testMathRate;
    this.testEnglishRate = testEnglishRate;
    this.testInquiryRate = testInquiryRate;
    this.testHistoryRate = testHistoryRate;
    this.practicalApplyTypes = practicalApplyTypes;
  }
}
