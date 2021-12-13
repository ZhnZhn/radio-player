import type { MouseEvent } from '../uiApi';
import { useRef, useCallback } from '../uiApi';

type UseThrottleClick = (
  timemout: number,
  onClick: (event: MouseEvent) => void  
) => (event: MouseEvent<HTMLButtonElement>) => void

const useThrottleClick: UseThrottleClick = (timeout, onClick) => {
  const _refTimeStamp = useRef<number>(0);
  return useCallback((event: MouseEvent<HTMLButtonElement>) => {        
    if (timeout !== 0) {
      const _timeStamp = _refTimeStamp.current
      , { timeStamp } = event;
      if (timeStamp - _timeStamp > timeout) {
        onClick(event)  
      }
      _refTimeStamp.current = timeStamp      
    } else {
      onClick(event)
    }  
  }, [timeout, onClick]);
};

export default useThrottleClick