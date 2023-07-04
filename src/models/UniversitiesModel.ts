import { classToPlain, Expose, plainToClass, Type } from 'class-transformer';
import { UniversityDepartmentsModel } from './UniversityDepartmentsModel';

type RegionType = '서울권' | '경기권' | '인천권' | '경남권' | '경북권' | '강원제주권' | '광주권' | '전라권' | '충청권';

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
  @Type(() => UniversityDepartmentsModel)
  universityDepartments?: UniversityDepartmentsModel[]; // 학과 종류

  @Expose()
  region?: RegionType; //지역

  @Expose()
  logo?: string;

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
      universityDepartments: UniversityDepartmentsModel.setModelFromData(data),
    };
  };
}
