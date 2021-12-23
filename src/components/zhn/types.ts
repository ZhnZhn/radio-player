export * from '../types';

export interface CircleButtonProps  {  
  hotKey?: string,
  onMouseDown?: () => void,
  onMouseUp?: () => void,
  onTouchStart?: () => void,
  onTouchEnd?: () => void,
  onClick?: () => void  
}