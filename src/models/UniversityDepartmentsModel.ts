import { classToPlain, Expose, plainToClass, Type } from 'class-transformer';
import _ from 'lodash';
import { ApplyPossibilityModel } from './ApplyPossibility';
import { EnglishSubjectModel } from './EnglishSubjectModel';
import { HistorySubjectModel } from './HistorySubjectModel';
import { InquirySubjectModel } from './InquirySubjectModel';
import { KoreanSubjectModel } from './KoreanSubjectModel';
import { MathSubjectModel } from './MathSubjectModel';
import { PracticalApplyModel, PracticalType } from './PracticalApplyModel';
import { SubjectModel } from './SubjectModel';
import { TranscriptModel } from './TranscriptModel';

export class UniversityDepartmentsModel {
  @Expose()
  departmentName?: string; //학과이름

  @Expose()
  recruitmentGroup?: string; //모집군

  @Expose()
  applyTypeDetail?: string; //세부 전형 : 일반학생 전형, 수능 일반전형

  @Expose()
  departmentAffiliation?: string; //학과 계열

  @Expose()
  recruitNumber?: number; //모집정원

  @Expose()
  lastYearCompetitionRate?: number; //작년 경쟁률

  @Expose()
  practicalContributions?: string; //실기 기여도: 최상, 상, 중, 하 , 최하

  @Expose()
  testContributions?: string; //수능 기여도 : 최상, 상, 중, 하 , 최하

  @Expose()
  applyType?: string; //전형 : 수능,교과,실기

  @Expose()
  isApplyPossibility?: boolean; //지원가능성 분석 여부

  @Expose()
  @Type(() => ApplyPossibilityModel)
  possibilityOfApply?: string; //지원가능성

  @Expose()
  isPassPossibility?: boolean; //합격확률 분석 여부

  @Expose()
  conversionScore?: number; //수능환산점수

  @Expose()
  isMultistage?: boolean; //다단계 여부

  @Expose()
  multistageDetail?: string; //다단계 세부사항

  @Expose()
  testRate?: number; //수능 전형반영비율

  @Expose()
  naesinRate?: number; //내신 전형반영비율

  @Expose()
  practicalRate?: number; //실기 전형반영비율

  @Expose()
  etcRate?: number; //기타 전형빈영비율

  @Expose()
  inquiryNumber?: number; // 탐구 반영 개수

  @Expose()
  exceptionRateDescription?: string; //예외 반영 비율 설명

  @Expose()
  universityDepartmentHomepage?: string; //학과 홈페이지

  @Expose()
  recruitmentGuideline?: string; //모집요강 홈페이지

  @Expose()
  isEndAnalysis?: boolean; //분석 종료 여부

  @Expose()
  practicalTestDate?: string; //실기고사 일정

  @Expose()
  successfulApplicantDate?: string; //합격자 발표일

  @Expose()
  isTeachingPossibility?: boolean; //교직이수 가능 여부

  @Expose()
  zValue?: number; //z-지수

  @Expose()
  competitionMinRate?: number; //경쟁률 최소

  @Expose()
  competitionMaxRate?: number; //경쟁률 최대

  @Expose()
  @Type(() => PracticalApplyModel)
  practicalApplyType?: PracticalType[]; // 반영 실기 종목: [제자리멀리뛰기, 서전트, 좌전굴, 체전굴]

  @Expose()
  @Type(() => SubjectModel)
  subjects?: SubjectModel[]; // 과목별 반영비율,반영필수 여부 : {국어반영비율:20,국어 반영필수여부:필수반영}

  constructor(data?: Partial<UniversityDepartmentsModel>) {
    return plainToClass(UniversityDepartmentsModel, data, { excludeExtraneousValues: true });
  }

  toJSON = data => {
    return classToPlain(data);
  };

  fromApiResponse(data) {
    const universityDepartment = new UniversityDepartmentsModel();
    const filteredSubjects: SubjectModel[] = [
      data.국어_반영_비율 && KoreanSubjectModel.setModelFromData(data),
      data.수학_반영_비율 && MathSubjectModel.setModelFromData(data),
      data.영어_반영_비율 && EnglishSubjectModel.setModelFromData(data),
      data.탐구_반영_비율 && InquirySubjectModel.setModelFromData(data),
      data.한국사_반영_비율 && HistorySubjectModel.setModelFromData(data),
    ];
    const subjectArray = _.compact(filteredSubjects);

    universityDepartment.departmentName = data.학과명; //학과이름
    universityDepartment.conversionScore = data.수능환산점수; //수능환산점수

    // universityDepartment.possibilityOfSupport= data.; //지원가능성

    universityDepartment.recruitmentGroup = data.모집군; //모집군

    universityDepartment.zValue = data.z_지수; //z-지수

    // universityDepartment.competitionMinRate= numberString; //경쟁률 최소

    // universityDepartment.competitionMaxRate= numberString; //경쟁률 최대

    universityDepartment.recruitNumber = data.모집_정원; //모집정원

    universityDepartment.practicalTestDate = data.실기_고사_일정; //실기고사 일정

    universityDepartment.successfulApplicantDate = data.최초_합격자_발표일; //합격자 발표일

    universityDepartment.recruitmentGuideline = data.모집요강_홈페이지; //모집요강 홈페이지

    universityDepartment.testRate = data.수능_반영_비율; //수능 전형반영비율

    universityDepartment.practicalRate = data.실기_반영_비율; //실기 전형반영비율

    universityDepartment.naesinRate = data.내신_반영_비율; //내신 전형반영비율

    universityDepartment.etcRate = data.기타_반영_비율; //기타 전형빈영비율

    universityDepartment.inquiryNumber = data.탐구_반영_개수; // 탐구 반영 개수

    universityDepartment.lastYearCompetitionRate = data.작년_경쟁률; //작년 경쟁률

    universityDepartment.isApplyPossibility = data.지원_가능성_준석_여부; //지원가능성 분석 여부

    const filteredPossibilityOfApply: ApplyPossibilityModel[] = [data.지원_가능성_기준_안정, data.지원_가능성_기준_적정, data.지원_가능성_기준_소신, data.지원_가능성_기준_우주_상향, data.지원_가능성_지원_불가];

    universityDepartment.possibilityOfApply = ApplyPossibilityModel.setModelFromData(filteredPossibilityOfApply);

    universityDepartment.isPassPossibility = data.합격_확률_분석_여부; //합격확률 분석 여부

    universityDepartment.isMultistage = data.다단계_여부; //다단계 여부

    universityDepartment.multistageDetail = data.다단계_세부사항; //다단계 세부사항

    universityDepartment.universityDepartmentHomepage = data.학과_홈페이지; //학과 홈페이지

    universityDepartment.isTeachingPossibility = data.교직_이수_가능_여부; //교직이수 가능 여부

    universityDepartment.exceptionRateDescription = data.예외_반영_비율_설명; //예외 반영 비율 설명

    universityDepartment.applyType = data.전형; //전형 = 수능;교과

    universityDepartment.applyTypeDetail = data.세부_전형; //세부 전형 = 일반학생 전형; 수능 일반전형

    universityDepartment.departmentAffiliation = data.학과_계열; //학과 계열

    universityDepartment.isEndAnalysis = data.분석_종료_여부; //분석 종료 여부

    universityDepartment.testContributions = data.수능_기여도; //수능 기여도 = 최상; 상; 중; 하 ; 최하

    universityDepartment.practicalContributions = data.실기_기여도; //실기 기여도= 최상; 상; 중; 하 ; 최하

    universityDepartment.practicalApplyType = PracticalApplyModel.practicalType(data.반영_실기_종목_1, data.반영_실기_종목_2, data.반영_실기_종목_3, data.반영_실기_종목_4, data.반영_실기_종목_5, data.반영_실기_종목_6);

    universityDepartment.subjects = subjectArray;

    return universityDepartment;
  }
}
