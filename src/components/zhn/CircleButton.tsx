import type { WithChildren, CircleButtonProps } from './types';
import HAS from '../has';
import useHotKey from '../hotkeys/useHotKey';
import { LegacyRef } from 'react';

type CircleButtonType = WithChildren<CircleButtonProps>

const CL = 'bt-circle';

const CircleButton = ({  
  hotKey,
  ariaLabel,
  onMouseDown, 
  onMouseUp,
  onTouchStart, 
  onTouchEnd,
  onClick,
  children
}: CircleButtonType) => {
  const _handlers = HAS.TOUCH && onTouchStart
    ? { onTouchStart, onTouchEnd }
    : { onMouseDown, onMouseUp }  
  , _refBt = useHotKey(hotKey, onClick);
  return (
    <button    
      ref={_refBt as LegacyRef<HTMLButtonElement>}      
      className={CL}      
      aria-label={ariaLabel}
      {..._handlers}
      onClick={onClick}
    >      
      <svg viewBox="0 0 34 34" width="100%" height="100%">
        <g>
          {children}
        </g>
      </svg>
    </button>
   );
};

export default CircleButton
