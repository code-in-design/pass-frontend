import { classToPlain, Expose, plainToClass } from 'class-transformer';
import { PracticalApplyModel } from './PracticalApplyModel';

export class UniversityDepartmentsModel {
  @Expose()
  departmentName?: string; //학과이름

  @Expose()
  conversionScore?: number; //수능환산점수

  @Expose()
  possibilityOfSupport?: string; //지원가능성

  @Expose()
  recruitmentGroup?: string; //모집군

  @Expose()
  zValue?: number; //z-지수

  @Expose()
  koreanRequiredType?: string; //국어 필수반영 : 필수반영, 선택반영, 미반영

  @Expose()
  mathRequiredType?: string; //수학 필수반영: 필수반영, 선택반영, 미반영

  @Expose()
  englishRequiredType?: string; //영어 필수반영: 필수반영, 선택반영, 미반영

  @Expose()
  inquiryRequiredType?: string; //탐구 필수반영: 필수반영, 선택반영, 미반영

  @Expose()
  competitionMinRate?: number; //경쟁률 최소

  @Expose()
  competitionMaxRate?: number; //경쟁률 최대

  @Expose()
  recruitNumber?: number; //모집정원

  @Expose()
  practicalTestDate?: string; //실기고사 일정

  @Expose()
  successfulApplicantDate?: string; //합격자 발표일

  @Expose()
  recruitmentGuideline?: string; //모집요강 홈페이지

  @Expose()
  testRate?: number; //수능 전형반영비율

  @Expose()
  practicalRate?: number; //실기 전형반영비율

  @Expose()
  naesinRate?: number; //내신 전형반영비율

  @Expose()
  etcRate?: number; //기타 전형빈영비율

  @Expose()
  testKoreanRate?: number; //수능 국어 반영 비율

  @Expose()
  testMathRate?: number; //수능 수학 반영 비율

  @Expose()
  testEnglishRate?: number; //수능 영어 반영 비율

  @Expose()
  testInquiryRate?: number; //수능 탐구 반영 비율

  @Expose()
  inquiryNumber?: number; // 탐구 반영 개수

  @Expose()
  testHistoryRate?: number; //수능 한국사 반영 비율

  @Expose()
  lastYearCompetitionRate?: number; //작년 경쟁률

  @Expose()
  isApplyPossibility?: boolean; //지원가능성 분석 여부

  @Expose()
  isPassPossibility?: boolean; //합격확률 분석 여부

  @Expose()
  isMultistage?: boolean; //다단계 여부

  @Expose()
  MultistageDetail?: string; //다단계 세부사항

  @Expose()
  UniversityDepartmentHomepage?: string; //학과 홈페이지

  @Expose()
  isTeachingPossibility?: boolean; //교직이수 가능 여부

  @Expose()
  exceptionRateDescription?: string; //예외 반영 비율 설명

  @Expose()
  applyType?: string; //전형 : 수능,

  @Expose()
  applyTypeDetail?: string; //세부 전형 : 일반학생 전형, 수능 일반전형

  @Expose()
  departmentAffiliation?: string; //학과 계열

  @Expose()
  isEndAnalysis?: boolean; //분석 종료 여부

  @Expose()
  testContributions?: string; //수능 기여도 : 최상, 상, 중, 하 , 최하

  @Expose()
  practicalContributions?: string; //실기 기여도: 최상, 상, 중, 하 , 최하

  @Expose()
  practicalApplyType1?: PracticalApplyModel;

  @Expose()
  practicalApplyType2?: PracticalApplyModel;

  @Expose()
  practicalApplyType3?: PracticalApplyModel;

  @Expose()
  practicalApplyType4?: PracticalApplyModel;

  @Expose()
  practicalApplyType5?: PracticalApplyModel;

  @Expose()
  practicalApplyType6?: PracticalApplyModel;

  constructor(data?: Partial<UniversityDepartmentsModel>) {
    return plainToClass(UniversityDepartmentsModel, data, { excludeExtraneousValues: true });
  }

  toJSON = data => {
    return classToPlain(data);
  };
}
