import type { CSSProperties as CSSProps, ReactNode } from 'react';

export type CSSProperties = CSSProps
export type StyleSheet<T extends string> = Record<T, CSSProperties> 

export type TabIndexType = -1 | 0

export type WithChildren<T> = 
  T & { children?: ReactNode } 

export type TimeoutIdType = NodeJS.Timeout | null