export class UniversitiesModel {
  logo: string;
  name: string;
  majorName: string;
  score: number;
  result: string;
  constructor(logo: string, name: string, majorName: string, score: number, result: string) {
    this.logo = logo;
    this.name = name;
    this.majorName = majorName;
    this.score = score;
    this.result = result;
  }
}
