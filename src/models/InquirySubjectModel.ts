import { Expose } from 'class-transformer';

export class InquirySubjectModel {
  @Expose()
  testInquiryRate?: number; //수능 탐구 반영 비율

  @Expose()
  inquiryRequiredType?: string; //탐구 필수반영: 필수반영, 선택반영, 미반영
}
