export type { 
  JSX,
  CSSProperties,
  MouseEvent,   
  TouchEvent, 
  KeyboardEvent,
  MouseEventHandler,
  TouchEventHandler, 
  KeyboardEventHandler, 
  RefObject,  
  MutableRefObject,
  PropsWithChildren,
  ComponentPropsWithoutRef
} from 'react';

import type {
  MouseEvent,
  TouchEvent
} from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent
export type TabIndexType = -1 | 0
export type TimeoutIdType = ReturnType<typeof setTimeout> | null


import {
  Dispatch,
  SetStateAction
} from 'react';

export type DispatchSetStateAction<T> = Dispatch<SetStateAction<T>>