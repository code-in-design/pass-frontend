import { PracticalType } from '@/components/PracticalIcon';
import { plainToClass } from 'class-transformer';

export class PracticalApplyModel {
  constructor(data?: Partial<PracticalApplyModel>) {
    return plainToClass(PracticalApplyModel, data, { excludeExtraneousValues: true });
  }

  static fromApiResponse(data: PracticalType[]) {
    const practicalApply = data?.sort((a, b) => {
      if (a === null) return 1;
      if (b === null) return -1;
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    return practicalApply;
  }
}
