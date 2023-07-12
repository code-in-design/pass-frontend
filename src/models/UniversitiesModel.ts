import { instanceToPlain, Expose, plainToClass, Type } from 'class-transformer';
import { UniversityDepartmentsModel } from './UniversityDepartmentsModel';

type RegionType = '서울권' | '경기권' | '인천권' | '경남권' | '경북권' | '강원제주권' | '광주권' | '전라권' | '충청권';

// TODO: 네이밍 수정
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
  universityDepartments?: UniversityDepartmentsModel; // 학과

  @Expose()
  region?: RegionType; //지역

  @Expose()
  logo?: string;

  constructor(data?: Partial<UniversitiesModel>) {
    return plainToClass(UniversitiesModel, data, { excludeExtraneousValues: true });
  }

  toJSON = () => {
    return instanceToPlain(this, { excludeExtraneousValues: true });
  };

  fromApiResponse = data => {
    const university = new UniversitiesModel();
    const universityDepartment = new UniversityDepartmentsModel();
    university.id = data?.id;
    university.universityName = data.대학명;
    university.universityHomepage = data.대학_홈페이지;
    university.type = data.운영;
    university.region = data.지역;
    university.universityDepartments = universityDepartment.fromApiResponse(data);
    return university;
  };

  getTableRowData = () => {
    return {
      id: this.id,
      group: this?.universityDepartments?.recruitmentGroup,
      universityName: this?.universityName,
      departmentName: this?.universityDepartments?.departmentName,
      practicalType: this?.universityDepartments?.practicalApplyType,
      test: this?.universityDepartments?.testContributions,
      practical: this?.universityDepartments?.practicalContributions,
      conversionScore: this?.universityDepartments?.conversionScore,
      Zvalue: this?.universityDepartments?.zValue,
      applicationPossibility: this?.universityDepartments?.possibilityOfApply,
    };
  };
}
