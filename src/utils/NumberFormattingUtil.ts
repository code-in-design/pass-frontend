class NumberFormattingUtil {
  formatPercentRange = (min: number, max?: number) => {
    // min값과 max값을 받아서 범위를 퍼센트 문자열로 반환합니다.
    // parameters : min - 최소값, max - 최대값
    // return : max값이 주어졌을때 - min~max% (0~100%)
    // return : max값이 안주어졌을때 - min% (100%)

    if (max) return min + '~' + max + '%';
    if (!max) return min + '%';
  };
}

export const numberFormattingUtil = new NumberFormattingUtil();
