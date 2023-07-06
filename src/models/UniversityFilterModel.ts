import { instanceToPlain, plainToClass } from 'class-transformer';
import { withDefault, ArrayParam, BooleanParam } from 'use-query-params';

export class UniversityFilterModel {
  applyGroup = []; // 모집시기 (가나다군)

  department = []; // 학과 계열 (체육교육지도, 스포츠의학 ...)

  koreanTypes = []; // 국어 과목 반영 여부 (필수반영, 선택반영, 미반영)

  mathTypes = []; // 수학 과목 반영 여부 (필수반영, 선택반영, 미반영)

  englishTypes = []; // 영어 과목 반영 여부 (필수반영, 선택반영, 미반영)

  inquiryTypes = []; // 탐구 과목 반영 여부 (필수반영, 선택반영, 미반영)

  inquiryOnlyOne = false; // 탐구 1과목 반영 대학만 보기

  region = []; // 지역 (서울, 경기..)

  practicalContribution = []; // 실기 기여도 (최상 ~ 최하)

  testContribution = []; // 수능 기여도 (최상 ~ 최하)

  exceptionPractical = []; // 제외 실기 종목

  completionTeaching = false; // 교직 이수 가능한 대학만 보기

  constructor(data?: Partial<UniversityFilterModel>) {
    return plainToClass(UniversityFilterModel, data, { excludeExtraneousValues: true });
  }

  toJSON() {
    return instanceToPlain(this, { enableCircularCheck: true });
  }

  toQueryParams() {
    return {
      applyGroup: withDefault(ArrayParam, []),
      department: withDefault(ArrayParam, []),
      koreanTypes: withDefault(ArrayParam, []),
      mathTypes: withDefault(ArrayParam, []),
      englishTypes: withDefault(ArrayParam, []),
      inquiryTypes: withDefault(ArrayParam, []),
      inquiryOnlyOne: withDefault(BooleanParam, false),
      region: withDefault(ArrayParam, []),
      practicalContribution: withDefault(ArrayParam, []),
      testContribution: withDefault(ArrayParam, []),
      exceptionPractical: withDefault(ArrayParam, []),
      completionTeaching: withDefault(BooleanParam, false),
    };
  }
}
