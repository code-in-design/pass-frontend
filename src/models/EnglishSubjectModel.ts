import { SubjectModel } from './SubjectModel';

export class EnglishSubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static fromApiResponse(data) {
    const english = new EnglishSubjectModel(data);
    english.subjectName = '영어';
    english.subjectRate = data.영어_반영_비율;
    english.subjectRequiredType = data.영어_반영_필수_여부;
    return english;
  }
}
