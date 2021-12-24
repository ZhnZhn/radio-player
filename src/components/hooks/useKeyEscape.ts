
import type { KeyboardEventHandler, KeyboardEvent } from 'react';
import { useCallback } from '../uiApi';

type UseKeyEscapeType = (
   handler?: () => void,
   deps?: Array<unknown>
) => KeyboardEventHandler<HTMLElement>  
//) => (event: KeyboardEvent) => void


const _isKeyEscape = (evt: KeyboardEvent) => 
  evt.keyCode === 27 || evt.key === 'Escape';



/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEscape: UseKeyEscapeType = 
 (handler, deps) => useCallback((event: KeyboardEvent<HTMLElement>) => {
     if (typeof handler === 'function' && _isKeyEscape(event)) {
       event.preventDefault()
       event.stopPropagation()
       handler() 
     }
  }, deps || [])         
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyEscape