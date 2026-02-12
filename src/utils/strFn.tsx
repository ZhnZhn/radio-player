import { isNotEmptyStr } from "./isTypeFn";

export const toFirstUpperCase = (str: unknown) => isNotEmptyStr(str) 
  ? str[0].toUpperCase() + str.slice(1)
  : "";