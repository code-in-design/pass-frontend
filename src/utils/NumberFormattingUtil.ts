class NumberFormattingUtil {
  formattingPercentage = (min: number, max?: number) => {
    if (max) return min + '~' + max + '%';
    if (!max) return min + '%';
  };
}

export const numberFormattingUtil = new NumberFormattingUtil();
