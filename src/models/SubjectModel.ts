import { Expose, plainToClass } from 'class-transformer';

export class SubjectModel {
  @Expose()
  subjectRate?: number; // 과목 반영 비율

  @Expose()
  subjectRequiredType?: string; // 반영 필수 여부 : 필수반영, 선택반영, 미반영

  constructor(data?: Partial<SubjectModel>) {
    Object.assign(this, plainToClass(SubjectModel, data, { excludeExtraneousValues: true }));
  }
}

class MathSubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static setModelFromData(data) {
    const subject = new MathSubjectModel(data);
    subject.subjectRate = data.수학_반영_비율;
    subject.subjectRequiredType = data.수학_반영_필수_여부;
    return subject;
  }
}

class KoreanSubjectModel extends SubjectModel {
  constructor(data?: Partial<SubjectModel>) {
    super(data);
  }

  static setModelFromData(data) {
    const subject = new KoreanSubjectModel(data);
    subject.subjectRate = data.국어_반영_비율;
    subject.subjectRequiredType = data.국어_반영_필수_여부;
    return subject;
  }
}
