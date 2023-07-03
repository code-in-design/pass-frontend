import { Expose, plainToClass } from 'class-transformer';

export class SubjectModel {
  subjectName?: '국어' | '수학' | '영어' | '탐구' | '한국사';

  @Expose()
  subjectRate?: number; // 과목 반영 비율

  @Expose()
  subjectRequiredType?: string; // 반영 필수 여부 : 필수반영, 선택반영, 미반영

  constructor(data?: Partial<SubjectModel>) {
    Object.assign(this, plainToClass(SubjectModel, data, { excludeExtraneousValues: true }));
  }
}

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

export class KoreanSubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static setModelFromData(data) {
    const korean = new KoreanSubjectModel(data);
    korean.subjectName = '국어';
    korean.subjectRate = data.국어_반영_비율;
    korean.subjectRequiredType = data.국어_반영_필수_여부;
    return korean;
  }
}

export class EnglishSubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static setModelFromData(data) {
    const english = new EnglishSubjectModel(data);
    english.subjectName = '영어';
    english.subjectRate = data.영어_반영_비율;
    english.subjectRequiredType = data.영어_반영_필수_여부;
    return english;
  }
}

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
