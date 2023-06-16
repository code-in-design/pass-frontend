import { UniversityDepartmentsModel } from './UniversityDepartmentsModel';

export class UniversitiesModel {
  logo: string; //대학교 로고
  universityName: string; // 대학교 이름
  universityDepartments: UniversityDepartmentsModel[]; // 학과 종류
  universityHomepage: string; //대학교 홈페이지

  constructor(logo: string, universityName: string, universityDepartments: UniversityDepartmentsModel[], universityHomepage: string) {
    this.logo = logo;
    this.universityName = universityName;
    this.universityDepartments = universityDepartments;
    this.universityHomepage = universityHomepage;
  }

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
