import { Expose } from 'class-transformer';

export class HistorySubjectModel {
  @Expose()
  testHistoryRate?: number; //수능 한국사 반영 비율
}
