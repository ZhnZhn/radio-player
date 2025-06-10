import { 
  useContext, 
  useCallback, 
  useEffect 
} from '../uiApi';

import HotKeysContext from './HotKeysContext';

type UseHotKeysHandlerType = (
  is: boolean
) => void 

const _fnNoop = () => void 0

const HotKeysHandler: UseHotKeysHandlerType = (is) => {
  const hmHotKeys = useContext(HotKeysContext)
  , _hKeyDown = useCallback((event:KeyboardEvent) => {
     if (event.altKey || event.metaKey) {
       const _handlerOption = hmHotKeys[event.key]
       if (_handlerOption) {
          const [ref, onKeyDown=_fnNoop] = _handlerOption
          , _el = (ref || {}).current;
          if (_el && _el.focus) {
             _el.focus()
          }
          onKeyDown()
       }
     }
  }, [hmHotKeys]);

  useEffect(() => {
    if (is) {
       document.addEventListener('keydown', _hKeyDown, false) 
       return () => document.removeEventListener('keydown', _hKeyDown, false)
    }
  }, [is, _hKeyDown])
  
};

export default HotKeysHandler