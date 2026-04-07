const MYANMAR_DIGIT_MAP: Record<string, string> = {
  "0": "၀",
  "1": "၁",
  "2": "၂",
  "3": "၃",
  "4": "၄",
  "5": "၅",
  "6": "၆",
  "7": "၇",
  "8": "၈",
  "9": "၉",
};

export const changeToMMNumber = (value: number | string) => {
  return String(value).replace(/[0-9]/g, (digit) => MYANMAR_DIGIT_MAP[digit]);
};
