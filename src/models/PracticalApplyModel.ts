import { plainToClass } from 'class-transformer';

// TODO: 정보가 분산됨
export type PracticalType =
  | '제자리멀리뛰기'
  | '서전트'
  | '좌전굴'
  | '10m왕복달리기'
  | '10m반복달리기'
  | '20m왕복달리기'
  | '25m왕복달리기'
  | '50m달리기'
  | '80m달리기'
  | '80m달리기'
  | '100m달리기'
  | '800m달리기'
  | '농구'
  | '농구레이업'
  | '농구골밑슛'
  | '농구공던지기'
  | '높이뛰기'
  | '매달리기'
  | '메디신볼던지기'
  | '배구'
  | '공벽치기'
  | '배구스킬테스트'
  | '배구브라디'
  | '배구토스'
  | '배근력'
  | '사이드스텝'
  | '셔틀런'
  | '순환식계측'
  | '60m달리기'
  | '십자런'
  | 'Z런(지그재그런)'
  | '싯업'
  | '앉아메디신볼던지기'
  | '전공'
  | '제자리세단뛰기'
  | '중량런'
  | '체전굴'
  | '체조'
  | '축구'
  | '축구장애물드리블'
  | '핸드볼'
  | '핸드볼공던지기'
  | '허들'
  | '턱걸이'
  | '핸드스프링'
  | '물구나무앞구르기';

export class PracticalApplyModel {
  id?: number;
  type?: PracticalType;

  constructor(data?: Partial<PracticalApplyModel>) {
    return plainToClass(PracticalApplyModel, data, { excludeExtraneousValues: true });
  }

  // TODO: 함수 이름 변경, set함수 or 초기화 함수 아닌이상 인자로 외부에서 데이터 받으면 안됨
  static practicalType(types: PracticalType[]) {
    const sortedTypes = types.sort();
    return sortedTypes;
  }
}
