import React from 'react';

export type CSSProperties = React.CSSProperties

export type TabIndexType = -1 | 0

export type WithChildren<T = {}> = 
  T & { children?: React.ReactNode } 

export interface CircleButtonProps  {
  accessKey?: string,
  onMouseDown?: () => void,
  onMouseUp?: () => void,
  onTouchStart?: () => void,
  onTouchEnd?: () => void,
  onClick?: () => void  
}