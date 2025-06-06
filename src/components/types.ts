export type { 
  CSSProperties,
  MouseEvent,   
  TouchEvent, 
  KeyboardEventHandler, 
  KeyboardEvent,
  LegacyRef,
  PropsWithChildren 
} from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent
export type TabIndexType = -1 | 0
export type TimeoutIdType = NodeJS.Timeout | null

export type { 
  Dispatch,
  StateUpdater 
} from 'preact/hooks';

export type { Ref } from 'preact';
import { RefObject } from 'preact';
export type MutableRefObject<T> = RefObject<T>