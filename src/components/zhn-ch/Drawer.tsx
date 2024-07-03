import type { 
  LegacyRef,
  CSSProperties, 
  WithChildren 
} from '../types';

import { 
  useContext, 
  useEffect 
} from '../uiApi';

import { HK_OPEN_DRAWER } from '../hotkeys/hotkeys';
import useHotKey from '../hotkeys/useHotKey';
import useKeyEscape from '../hooks/useKeyEscape';
import AppContext from '../AppContext';
import uiThemeImpl from '../ui-theme/uiTheme';

interface DrawerProps {
  btStyle?: CSSProperties
}
type DrawerType = WithChildren<DrawerProps>

const CL_DRAWER = 'drawer'
, CL_DRAWER_BT = `${CL_DRAWER}-bt`
, CL_DRAWER_SPAN = `${CL_DRAWER}-span`
, CL_DRAWER_SVG = `${CL_DRAWER}-svg`
, CL_DRAWER_MODAL = `${CL_DRAWER}-modal`

, S_BT_DRAWER: CSSProperties = {
  position: 'absolute',
  top: 8,
  right: 18
}
, S_DRAWER_OFF: CSSProperties = {
  transform: 'translateX(264px)'  
}
, S_DRAWER_ON: CSSProperties = {
  transform: 'translate(0px, 0px)'
}
, S_MODAL_OFF: CSSProperties = {
  display: 'none',
  opacity: 0,
  zIndex: -1,
  transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
}
, S_MODAL_ON: CSSProperties = {
  display: 'block',
  opacity: 1,
  zIndex: 1000,
  transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
};

const Drawer = ({
  btStyle,
  children
}: DrawerType) => {
  const {
    toggleDrawer,
    sApp, 
    useSelector
  } = useContext(AppContext)
  , isOpen = useSelector(sApp.isDrawer)
  , uiTheme = useSelector(sApp.uiTheme)    
  , _refBt = useHotKey(HK_OPEN_DRAWER, toggleDrawer)
  , _onClickWrapper = isOpen
      ? toggleDrawer
      : void 0
  , _onKeyDownAside = useKeyEscape(_onClickWrapper, [_onClickWrapper])

  useEffect(()=>{    
    document.body.style.overflowY = isOpen 
      ? 'hidden' 
      : 'auto';         
  })

  const _asideStyle = {
      ...(isOpen ? S_DRAWER_ON : S_DRAWER_OFF),
      ...uiThemeImpl.toBg(uiTheme)
    }
  , _drawerModalStyle = isOpen
       ? S_MODAL_ON
       : S_MODAL_OFF;
  
  return (
    <>
      <button          
        type="button"
        ref={_refBt as LegacyRef<HTMLButtonElement>}
        className={CL_DRAWER_BT}
        style={{...S_BT_DRAWER, ...btStyle}}
        aria-label="Open Drawer"
        onClick={toggleDrawer}        
      >
        <span className={CL_DRAWER_SPAN}>
          <svg
             className={CL_DRAWER_SVG}
             focusable="false"
             viewBox="0 0 24 24"
             aria-hidden="true"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </span>
      </button>
      <div
        role="presentation"
        aria-hidden={!isOpen}
        className={CL_DRAWER_MODAL}
        style={_drawerModalStyle}
        onClick={_onClickWrapper}        
      />
      <aside                  
        role="presentation"
        className={CL_DRAWER}
        style={_asideStyle}
        onKeyDown={_onKeyDownAside}
       >
         <div>
           {children}
         </div>
      </aside>
    </>
  );
};

export default  Drawer
