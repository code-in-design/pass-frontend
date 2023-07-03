import { Expose } from 'class-transformer';
import { EnglishSubjectModel } from './EnglishSubjectModel';
import { HistorySubjectModel } from './HistorySubjectModel';
import { InquirySubjectModel } from './InquirySubjectModel';
import { KoreanSubjectModel } from './KoreanSubjectModel';
import { MathSubjectModel } from './MathSubjectModel';

export class SubjectModel {
  koreanSubject?: any;
  mathSubject?: MathSubjectModel;
  englishSubject?: EnglishSubjectModel;
  historySubject?: HistorySubjectModel;
  inquirySubject?: InquirySubjectModel;

  static setModelFromData(data) {
    const subject = new SubjectModel();
    subject.koreanSubject = KoreanSubjectModel.setModelFromData(data);
    subject.mathSubject = MathSubjectModel.setModelFromData(data);
    return subject;
  }
}
