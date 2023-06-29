class NumberFormattingUtil {
  formattingPercentage = (min: number, max?: number) => {
    // max값이 주어졌을때 (return 10~100%)
    if (max) return min + '~' + max + '%';
    // max값이 안주어졌을때 (return 100%)
    if (!max) return min + '%';
  };
}

export const numberFormattingUtil = new NumberFormattingUtil();
