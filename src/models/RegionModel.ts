import { Expose, plainToClass } from 'class-transformer';

export class RegionModel {
  @Expose()
  id?: number;

  @Expose()
  name?: string;

  @Expose()
  entire?: string; //전체

  @Expose()
  seoul?: string; //서울

  @Expose()
  gyeongGi?: string; //경기

  @Expose()
  inCheon?: string; //인천

  @Expose()
  gyeongNam?: string; //경남

  @Expose()
  gyeongBuk?: string; //경북

  @Expose()
  gangWonJeju?: string; //강원제주

  @Expose()
  gwangJu?: string; //광주

  @Expose()
  jeolLa?: string; //전라

  @Expose()
  chungCheong?: string; //충청

  constructor(data?: Partial<RegionModel>) {
    return plainToClass(RegionModel, data, { excludeExtraneousValues: true });
  }
}
