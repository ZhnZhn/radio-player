export type { CSSProperties } from 'react';
import type { ReactNode } from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent

export type TabIndexType = -1 | 0

export type WithChildren<T> = 
  T & { children?: ReactNode } 

export type TimeoutIdType = NodeJS.Timeout | null

export type { StateUpdater } from 'preact/hooks';