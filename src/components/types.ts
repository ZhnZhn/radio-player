export type { 
  CSSProperties,
  MouseEvent,   
  TouchEvent, 
  KeyboardEventHandler, 
  KeyboardEvent,
  LegacyRef 
} from 'react';
import type { ReactNode } from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent

export type TabIndexType = -1 | 0

export type WithChildren<T> = 
  T & { children?: ReactNode } 

export type TimeoutIdType = NodeJS.Timeout | null

export type { 
  Dispatch,
  StateUpdater 
} from 'preact/hooks';

export type { Ref } from 'preact';
import { RefObject } from 'preact';
export type MutableRefObject<T> = RefObject<T>