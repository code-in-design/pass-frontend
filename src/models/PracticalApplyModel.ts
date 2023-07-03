import { plainToClass } from 'class-transformer';

export type PracticalType =
  | '제자리멀리뛰기'
  | '서전트'
  | '좌전굴'
  | '10m달리기'
  | '20m달리기'
  | '25m달리기'
  | '50m달리기'
  | '80m달리기'
  | '80m달리기'
  | '100m달리기'
  | '800m달리기'
  | '농구'
  | '농구공던지기'
  | '높이뛰기'
  | '매달리기'
  | '메디신볼던지기'
  | '배구'
  | '배근력'
  | '사이드스텝'
  | '셔틀런'
  | '순환식계측'
  | '십자런'
  | '싯업'
  | '앉아메디신볼던지기'
  | '전공'
  | '제자리3단뛰기'
  | '중량런'
  | '체전굴'
  | '체조'
  | '축구'
  | '핸드볼공던지기'
  | '허들';

export class PracticalApplyModel {
  id?: number;
  type?: PracticalType;

  constructor(data?: Partial<PracticalApplyModel>) {
    return plainToClass(PracticalApplyModel, data, { excludeExtraneousValues: true });
  }

  static practicalType(...types: PracticalType[]) {
    return types;
  }
}
