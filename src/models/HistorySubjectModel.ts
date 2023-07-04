import { SubjectModel } from './SubjectModel';

export class HistorySubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static setModelFromData(data) {
    const history = new HistorySubjectModel(data);
    history.subjectName = '한국사';
    history.subjectRate = data.한국사_반영_비율;
    return history;
  }
}
