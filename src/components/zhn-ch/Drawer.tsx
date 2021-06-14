import { CSSProperties, WithChildren } from '../types';
import { useContext, useEffect } from 'react';

import AppContext from '../AppContext';
import uiThemeImpl from '../ui-theme/uiTheme';
import S from './DrawerStyle';

interface DrawerProps {
  btStyle?: CSSProperties
}
type DrawerType = WithChildren<DrawerProps>

const CL = {
  DRAWER_BT: 'drawer-bt',
  DRAWER_SPAN: 'drawer-span',
  DRAWER_SVG: 'drawer-svg',
  DRAWER: 'drawer',
  DRAWER_MODAL: 'drawer-modal',
};

const Drawer = ({
  btStyle,
  children
}: DrawerType) => {
  const {
    toggleDrawer,
    sApp, useSelector
  } = useContext(AppContext)
  , isOpen = useSelector(sApp.isDrawer)
  , uiTheme = useSelector(sApp.uiTheme);

  useEffect(()=>{
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  })


  const _asideStyle = {
      ...(isOpen ? S.DRAWER_ON : S.DRAWER_OFF),
      ...uiThemeImpl.toBg(uiTheme)
    }
  , _drawerModalStyle = isOpen
       ? S.MODAL_ON
       : S.MODAL_OFF
  , _onClickWrapper = isOpen
       ? toggleDrawer
       : void 0;
  return (
    <>
      <button          
        className={CL.DRAWER_BT}
        style={{ ...S.BT_DRAWER, ...btStyle }}
        aria-label="Open Drawer"
        onClick={toggleDrawer}
      >
        <span className={CL.DRAWER_SPAN}>
          <svg
             className={CL.DRAWER_SVG}
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
        className={CL.DRAWER_MODAL}
        style={_drawerModalStyle}
        onClick={_onClickWrapper}
      />
      <aside          
        className={CL.DRAWER}
        style={_asideStyle}
       >
         <div>
           {children}
         </div>
      </aside>
    </>
  );
}

export default  Drawer
