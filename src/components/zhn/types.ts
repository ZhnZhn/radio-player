export * from '../types';

export interface CircleButtonProps  {
  accessKey?: string,
  onMouseDown?: () => void,
  onMouseUp?: () => void,
  onTouchStart?: () => void,
  onTouchEnd?: () => void,
  onClick?: () => void  
}