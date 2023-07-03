import { plainToClass } from 'class-transformer';

type practicalType = '제자리멀리뛰기' | '서전트' | '좌전굴';

export class PracticalApplyModel {
  id?: number;
  type?: practicalType;

  constructor(data?: Partial<PracticalApplyModel>) {
    return plainToClass(PracticalApplyModel, data, { excludeExtraneousValues: true });
  }

  static setPracticalType(...types: practicalType[]) {
    return types;
  }
}
