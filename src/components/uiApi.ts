export { 
  isFn,
  isNumber,
  isNotEmptyStr 
} from '../utils/isTypeFn';
export { 
  toFirstUpperCase 
} from '../utils/strFn';

export {  
  useState, 
  useCallback, 
  useMemo,
  useRef, 
  useReducer,
  useEffect,
  useContext
 } from 'preact/hooks';

export { createContext } from 'preact';

export type { Ref } from 'preact';
import { RefObject } from 'preact';
export type MutableRefObject<T> = RefObject<T>

