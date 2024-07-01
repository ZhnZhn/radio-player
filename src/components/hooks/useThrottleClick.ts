import type { MouseEvent } from '../types';
import { 
  useRef, 
  useCallback 
} from '../uiApi';

type UseThrottleClick = (
  timemout: number,
  onClick: (evt: MouseEvent) => void  
) => (evt: MouseEvent<HTMLButtonElement>) => void

const useThrottleClick: UseThrottleClick = (
  timeout, 
  onClick
) => {
  const _refTimeStamp = useRef<number>(0);
  return useCallback((evt: MouseEvent<HTMLButtonElement>) => {        
    if (timeout !== 0) {      
      const { timeStamp } = evt;
      if (timeStamp - _refTimeStamp.current > timeout) {
        onClick(evt)  
      }
      _refTimeStamp.current = timeStamp      
    } else {
      onClick(evt)
    }  
  }, [timeout, onClick]);
};

export default useThrottleClick