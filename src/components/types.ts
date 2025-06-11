export type { 
  CSSProperties,
  MouseEvent,   
  TouchEvent, 
  KeyboardEventHandler, 
  KeyboardEvent,
  RefObject,  
  MutableRefObject,
  PropsWithChildren,
  ComponentPropsWithoutRef 
} from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent
export type TabIndexType = -1 | 0
export type TimeoutIdType = NodeJS.Timeout | null

import {
  Dispatch,
  SetStateAction
} from 'react';

export type DispatchSetStateAction<T> = Dispatch<SetStateAction<T>>