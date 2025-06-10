import type { 
  RefObject 
} from '../types';
import type { 
  PropsWithChildren, 
  CircleButtonProps 
} from './types';

import { HAS_TOUCH_EVENT } from '../has';
import useHotKey from '../hotkeys/useHotKey';
import Svg from './Svg';

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
}: PropsWithChildren<CircleButtonProps>) => {
  const _handlers = HAS_TOUCH_EVENT && onTouchStart
    ? { onTouchStart, onTouchEnd }
    : { onMouseDown, onMouseUp }  
  , _refBt = useHotKey(hotKey, onClick);
  return (
    <button    
      type="button"
      ref={_refBt as RefObject<HTMLButtonElement>}      
      className={CL}      
      aria-label={ariaLabel}
      {..._handlers}
      onClick={onClick}
    >      
      <Svg w="34" width="100%" height="100%">
        <g>
          {children}
        </g>
      </Svg>
    </button>
   );
};

export default CircleButton
