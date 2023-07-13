import { PracticalType } from '@/components/PracticalIcon';
import { plainToClass } from 'class-transformer';

export class PracticalApplyModel {
  constructor(data?: Partial<PracticalApplyModel>) {
    return plainToClass(PracticalApplyModel, data, { excludeExtraneousValues: true });
  }

  static setModelFromData(data: PracticalType[]) {
    const practicalApply = data?.sort();
    return practicalApply;
  }
}
