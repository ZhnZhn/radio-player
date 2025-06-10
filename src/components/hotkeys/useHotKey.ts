
import type { RefObject } from '../types';

import { 
  useContext, 
  useRef, 
  useEffect 
} from '../uiApi';
import { HAS_TOUCH_EVENT } from '../has';

import HotKeysContext from './HotKeysContext';

const useHotKey= (
  hotKey?: string, 
  onKeyDown?: () => void  
) : RefObject<HTMLButtonElement> => {
  const hmHotKeys = useContext(HotKeysContext)
  , ref = useRef<HTMLButtonElement>(null);  
  
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!HAS_TOUCH_EVENT && hotKey) {  
      hmHotKeys[hotKey] = [ref, onKeyDown] 
      return () => hmHotKeys[hotKey] = void 0
    }  
  }, [hotKey, onKeyDown])
  // hmHotKeys
  /*eslint-enable react-hooks/exhaustive-deps */

  return ref;
};

export default useHotKey