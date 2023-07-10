import { Expose, plainToClass } from 'class-transformer';

export class ApplyPossibilityModel {
  @Expose()
  stability?: string; // 지원 가능성 기준 : 안정
  @Expose()
  adequacy?: string; // 지원 가능성 기준 : 적정
  @Expose()
  belief?: string; // 지원 가능성 기준 : 소신
  @Expose()
  aspirationalApplication?: string; // 지원 가능성 기준 : 우주상향
  @Expose()
  impossible?: string; // 지원 가능성 기준 : 지원불가

  constructor(data?: Partial<ApplyPossibilityModel>) {
    return plainToClass(ApplyPossibilityModel, data, { excludeExtraneousValues: true });
  }

  static setModelFromData(data) {
    if (data?.[0]) return '안정';
    if (data?.[1]) return '적정';
    if (data?.[2]) return '소신';
    if (data?.[3]) return '우주상향';
    if (data?.[4]) return '지원불가';
  }
}
