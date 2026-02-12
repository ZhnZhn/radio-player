export interface CircleButtonProps  {  
  hotKey?: string,
  ariaLabel?: string,
  onMouseDown?: () => void,
  onMouseUp?: () => void,
  onTouchStart?: () => void,
  onTouchEnd?: () => void,
  onClick?: () => void  
}