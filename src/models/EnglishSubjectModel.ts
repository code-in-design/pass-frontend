import { Expose } from 'class-transformer';

export class EnglishSubjectModel {
  @Expose()
  testEnglishRate?: number; //수능 영어 반영 비율

  @Expose()
  englishRequiredType?: string; //영어 필수반영: 필수반영, 선택반영, 미반영
}
