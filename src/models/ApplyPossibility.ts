import { plainToClass } from 'class-transformer';

export class ApplyPossibilityModel {
  constructor(data?: Partial<ApplyPossibilityModel>) {
    return plainToClass(ApplyPossibilityModel, data, { excludeExtraneousValues: true });
  }

  static fromApiResponse(data) {
    if (data?.[0]) return '안정';
    if (data?.[1]) return '적정';
    if (data?.[2]) return '소신';
    if (data?.[3]) return '우주상향';
    if (data?.[4]) return '지원불가';
  }
}
