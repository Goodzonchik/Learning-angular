export const initSortedArray = (length: number = 0): number[] =>
  Array(length)
    .fill(0)
    .map((item, index) => index + 1);
