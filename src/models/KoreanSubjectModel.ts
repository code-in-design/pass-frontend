import { Expose, plainToClass } from 'class-transformer';

export class KoreanSubjectModel {
  @Expose()
  testKoreanRate?: number; //수능 국어 반영 비율

  @Expose()
  koreanRequiredType?: string; //국어 필수반영 : 필수반영, 선택반영, 미반영

  constructor(data?: Partial<KoreanSubjectModel>) {
    return plainToClass(KoreanSubjectModel, data, { excludeExtraneousValues: true });
  }
  static setModelFromData(data) {
    const korean = new KoreanSubjectModel(data);
    korean.testKoreanRate = data.국어_반영_비율;
    korean.koreanRequiredType = data.국어_반영_필수_여부;
    return korean;
  }
}
