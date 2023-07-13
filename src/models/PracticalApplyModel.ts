import { PracticalType } from '@/components/PracticalIcon';
import { plainToClass } from 'class-transformer';

export class PracticalApplyModel {
  id?: number;
  type?: PracticalType;

  constructor(data?: Partial<PracticalApplyModel>) {
    return plainToClass(PracticalApplyModel, data, { excludeExtraneousValues: true });
  }

  static sortPracticalList(type) {
    const sortedPractical = type.sort();

    return sortedPractical;
  }
}
