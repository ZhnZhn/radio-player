import type { 
  KeyboardEventHandler, 
  KeyboardEvent 
} from '../types';
import { 
  isFn,
  useCallback 
} from '../uiApi';

type UseKeyEscapeType = (
   handler?: () => void,
   deps?: Array<unknown>
) => KeyboardEventHandler<HTMLElement>  

const _isKeyEscape = (
  evt: KeyboardEvent
  ) => evt.keyCode === 27 || evt.key === 'Escape';


/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEscape: UseKeyEscapeType = (
  handler, 
  deps
  ) => useCallback((evt: KeyboardEvent<HTMLElement>) => {
     if (isFn(handler) && _isKeyEscape(evt)) {
       evt.preventDefault()
       evt.stopPropagation()
       handler() 
     }
  }, deps || [])         
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyEscape