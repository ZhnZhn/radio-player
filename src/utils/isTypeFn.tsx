
/*eslint-disable @typescript-eslint/no-unsafe-function-type */
export const isFn = (v: unknown): v is Function => 
  typeof v === 'function'
/*eslint-enable @typescript-eslint/no-unsafe-function-type */

export const isNumber = (n: unknown): n is number => 
  typeof n === 'number' && n-n === 0

export const isStr = (v: unknown): v is string => 
  typeof v === 'string'

export const isNotEmptyStr = (str?: string) => str
  && isStr(str)
