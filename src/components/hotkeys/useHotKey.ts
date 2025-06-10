
import type { RefObject } from '../types';

import { 
  useContext, 
  useRef, 
  useEffect 
} from '../uiApi';
import { HAS_TOUCH_EVENT } from '../has';

import HotKeysContext from './HotKeysContext';

type UseHotKeyType = (  
  hotKey?: string,
  onKeyDown?: () => void  
) => RefObject<HTMLElement>

const useHotKey: UseHotKeyType = (hotKey, onKeyDown) => {
  const hmHotKeys = useContext(HotKeysContext)
  , ref = useRef<HTMLElement>(null);  
  
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