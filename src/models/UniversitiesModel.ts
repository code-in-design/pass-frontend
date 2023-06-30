import { classToPlain, Expose, plainToClass } from 'class-transformer';
import { RegionModel } from './RegionModel';
import { UniversityDepartmentsModel } from './UniversityDepartmentsModel';

export class UniversitiesModel {
  @Expose()
  id?: string; //대학교 아이디

  @Expose()
  universityName?: string; // 대학교 이름

  @Expose()
  universityHomepage?: string; //대학교 홈페이지

  @Expose()
  type?: string; //운영 : 사립, 공립

  @Expose()
  universityDepartments?: UniversityDepartmentsModel; // 학과 종류

  @Expose()
  region?: RegionModel; //지역

  constructor(data?: Partial<UniversitiesModel>) {
    return plainToClass(UniversitiesModel, data, { excludeExtraneousValues: true });
  }

  toJSON = data => {
    return classToPlain(data);
  };

  setModelFromData = data => {
    return {
      id: data.id,
      universityName: data.대학명,
      universityHomepage: data.대학_홈페이지,
      type: data.운영,
      region: data.지역,
    };
  };

  //나의 관심 대학
  setInterestedUniversitiesData = data => {
    return {
      logo: data.logo,
      universityName: data.universityName,
      departmentName: data.departmentName,
      conversionScore: data.conversionScore,
      possibilityOfSupport: data.possibilityOfSupport,
    };
  };
}
