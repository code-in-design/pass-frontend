import { instanceToPlain, plainToClass } from 'class-transformer';
import { withDefault, ArrayParam, BooleanParam, NumberParam, StringParam } from 'use-query-params';

export class UniversityFilterModel {
  applyGroup = []; // 모집시기 (가나다군)

  department = []; // 학과 계열 (체육교육지도, 스포츠의학 ...)

  koreanTypes = []; // 국어 과목 반영 여부 (필수반영, 선택반영, 미반영)

  mathTypes = []; // 수학 과목 반영 여부 (필수반영, 선택반영, 미반영)

  englishTypes = []; // 영어 과목 반영 여부 (필수반영, 선택반영, 미반영)

  inquiryTypes = []; // 탐구 과목 반영 여부 (필수반영, 선택반영, 미반영)

  inquiryOnlyOne = false; // 탐구 1과목 반영 대학만 보기

  region = []; // 지역 (서울, 경기..)

  competitionMinRate = 0; // 최소경쟁률

  competitionMaxRate = 100; // 최소경쟁률

  practicalContribution = []; // 실기 기여도 (최상 ~ 최하)

  testContribution = []; // 수능 기여도 (최상 ~ 최하)

  exceptionPractical = []; // 제외 실기 종목

  completionTeaching = false; // 교직 이수 가능한 대학만 보기

  searchUniversity = '';

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
      competitionMinRate: withDefault(NumberParam, 0),
      competitionMaxRate: withDefault(NumberParam, 100),
      practicalContribution: withDefault(ArrayParam, []),
      testContribution: withDefault(ArrayParam, []),
      exceptionPractical: withDefault(ArrayParam, []),
      completionTeaching: withDefault(BooleanParam, false),
      searchUniversity: withDefault(StringParam, null),
    };
  }

  toServer(data) {
    return {
      모집군_리스트: data.applyGroup,
      국어_반영_필수_여부_리스트: data.koreanTypes,
      수학_반영_필수_여부_리스트: data.mathTypes,
      영어_반영_필수_여부_리스트: data.englishTypes,
      탐구_반영_필수_여부_리스트: data.inquiryTypes,
      지역_리스트: data.region,
      최소_경쟁률: data.competitionMinRate,
      최대_경쟁률: data.competitionMaxRate,
      학과_계열_리스트: data.department,
      수능_기여도_리스트: data.testContribution,
      실기_기여도_리스트: data.practicalContribution,
      제외할_실기_반영_리스트: data.exceptionPractical,
      교직_이수_가능_여부: data.completionTeaching,
    };
  }
}
