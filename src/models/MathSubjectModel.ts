import { Expose, plainToClass } from 'class-transformer';

export class MathSubjectModel {
  @Expose()
  testMathRate?: number; //수능 수학 반영 비율

  @Expose()
  mathRequiredType?: string; //수학 필수반영: 필수반영, 선택반영, 미반영

  constructor(data?: Partial<MathSubjectModel>) {
    return plainToClass(MathSubjectModel, data, { excludeExtraneousValues: true });
  }

  static setModelFromData(data) {
    const korean = new MathSubjectModel(data);
    korean.testMathRate = data.수학_반영_비율;
    korean.mathRequiredType = data.수학_반영_필수_여부;
    return korean;
  }
}
