class NumberFormattingUtil {
  formatPercentRange = (min: number, max?: number) => {
    /**
   min값과 max값을 퍼센트 범위의 문자열로 출력합니다.

   @params
      min - 최소값
      max - 최대값

   @return
     1. max값이 있을때 0~100%
     2. max값이 없을때 100%
*/

    if (max) return min + '~' + max + '%';
    if (!max) return min + '%';
  };
}

export const numberFormattingUtil = new NumberFormattingUtil();
