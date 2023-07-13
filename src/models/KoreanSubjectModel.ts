import { SubjectModel } from './SubjectModel';

export class KoreanSubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static fromApiResponse(data) {
    const korean = new KoreanSubjectModel(data);
    korean.subjectName = '국어';
    korean.subjectRate = data.국어_반영_비율;
    korean.subjectRequiredType = data.국어_반영_필수_여부;
    return korean;
  }
}
