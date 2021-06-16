import React from 'react';

export type CSSProperties = React.CSSProperties

export type TabIndexType = -1 | 0

export type WithChildren<T = {}> = 
  T & { children?: React.ReactNode } 

export type StyleSheet<T extends string> = Record<T, CSSProperties> 

export type FnVoidType = () => void

export type TimeoutIdType = NodeJS.Timeout | null