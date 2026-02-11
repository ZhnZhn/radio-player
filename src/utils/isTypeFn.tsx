
/*eslint-disable @typescript-eslint/no-unsafe-function-type */
export const isFn = (v: unknown): v is Function => 
  typeof v === 'function'
/*eslint-enable @typescript-eslint/no-unsafe-function-type */

export const isNumber = (n: unknown): n is number => 
  typeof n === 'number' && n-n === 0

export const isNotEmptyStr = (str?: string) => str
  && typeof str === 'string'
