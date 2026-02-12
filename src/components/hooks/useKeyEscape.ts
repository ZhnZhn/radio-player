import type { 
  KeyboardEventHandler, 
  KeyboardEvent 
} from '../types';

import { isFn } from '../../utils/isTypeFn';
import { useCallback } from '../uiApi';

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
  if (_isKeyEscape(evt) && isFn(handler)) {
    evt.preventDefault()
    evt.stopPropagation()
    handler() 
  }
}, deps || []);         
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyEscape