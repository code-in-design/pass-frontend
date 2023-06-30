import { Expose, plainToClass } from 'class-transformer';

export class PracticalApplyModel {
  @Expose()
  달리기10m?: string;

  @Expose()
  달리기20m?: string;

  @Expose()
  달리기25m?: string;

  @Expose()
  달리기50m?: string;

  @Expose()
  달리기80m?: string;

  @Expose()
  달리기100m?: string;

  @Expose()
  달리기800m?: string;

  @Expose()
  농구?: string;

  @Expose()
  농구공던지기?: string;

  @Expose()
  높이뛰기?: string;

  @Expose()
  매달리기?: string;

  @Expose()
  메디신볼던지기?: string;

  @Expose()
  배구?: string;

  @Expose()
  배근력?: string;

  @Expose()
  사이드스텝?: string;

  @Expose()
  서전트점프?: string;

  @Expose()
  셔틀런?: string;

  @Expose()
  순환식계측?: string;

  @Expose()
  십자런?: string;

  @Expose()
  싯업?: string;

  @Expose()
  앉아메디신볼던지기?: string;

  @Expose()
  전공?: string;

  @Expose()
  제자리3단뛰기?: string;

  @Expose()
  '제자리 멀리뛰기'?: string;

  @Expose()
  좌전굴?: string;

  @Expose()
  중량런?: string;

  @Expose()
  체전굴?: string;

  @Expose()
  체조?: string;

  @Expose()
  축구?: string;

  @Expose()
  핸드볼공던지기?: string;

  @Expose()
  허들?: string;

  constructor(data?: Partial<PracticalApplyModel>) {
    return plainToClass(PracticalApplyModel, data, { excludeExtraneousValues: true });
  }
}
