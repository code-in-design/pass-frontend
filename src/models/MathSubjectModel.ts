import { SubjectModel } from './SubjectModel';

export class MathSubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static setModelFromData(data) {
    const math = new MathSubjectModel(data);
    math.subjectName = '수학';
    math.subjectRate = data.수학_반영_비율;
    math.subjectRequiredType = data.수학_반영_필수_여부;
    return math;
  }
}
