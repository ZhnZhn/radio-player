
/*eslint-disable @typescript-eslint/no-unsafe-function-type */
export const isFn = (fn: unknown): fn is Function => 
  typeof fn === 'function'
/*eslint-enable @typescript-eslint/no-unsafe-function-type */

export const isNumber = (n: unknown): n is number => 
  typeof n === 'number' && n-n === 0

export const isStr = (str: unknown): str is string => 
  typeof str === 'string'

export const isNotEmptyStr = (str: unknown): str is string => isStr(str)
  && !!str
