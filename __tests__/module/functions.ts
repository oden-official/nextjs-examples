import { CharSet } from "./types";
import { CHAR_SET } from './data';

export const calcCharSet = (charSet: CharSet[]): string => {
  let chars = '';
  if (charSet.includes("lower")) chars += CHAR_SET.LOWER;
  if (charSet.includes("upper")) chars += CHAR_SET.UPPER;
  if (charSet.includes("number")) chars += CHAR_SET.NUMBER;
  if (charSet.includes("special")) chars += CHAR_SET.SPECIAL;
  return chars
}