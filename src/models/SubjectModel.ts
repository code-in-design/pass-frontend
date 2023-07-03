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
