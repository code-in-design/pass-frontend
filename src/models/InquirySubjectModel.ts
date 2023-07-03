import { SubjectModel } from './SubjectModel';

export class InquirySubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static setModelFromData(data) {
    const inquiry = new InquirySubjectModel(data);
    inquiry.subjectName = '탐구';
    inquiry.subjectRate = data.탐구_반영_비율;
    inquiry.subjectRequiredType = data.탐구_반영_필수_여부;
    return inquiry;
  }
}
