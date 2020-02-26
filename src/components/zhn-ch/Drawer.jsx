import React, { useContext, useEffect } from 'react'

import AppContext from '../AppContext'
import uiThemeImpl from '../ui-theme/uiTheme'

const CL = {
  DRAWER_BT: 'drawer-bt',
  DRAWER_SPAN: 'drawer-span',
  DRAWER_SVG: 'drawer-svg',
  DRAWER: 'drawer',
  DRAWER_MODAL: 'drawer-modal',
};

const S = {
  BT_DRAWER: {
    position: 'absolute',
    top: 8,
    right: 18
  },
  DRAWER_OFF: {
    //transform: 'translateX(-264px)',
    transform: 'translateX(264px)',
    pointerEvents: 'none'
  },
  DRAWER_ON: {
    transform: 'translate(0px, 0px)',
  },
  MODAL_OFF: {
    display: 'none',
    opacity: 0,
    zIndex: -1,
    transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  MODAL_ON: {
    display: 'block',
    opacity: 1,
    zIndex: 1000,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
}

const Drawer = ({
  btStyle,
  children
}) => {
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
    [
        <button
          key="bt-drawer"
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
        </button>,
        <div
          key="wrapper"
          role="presentation"
          aria-hidden={!isOpen}
          className={CL.DRAWER_MODAL}
          style={_drawerModalStyle}
          onClick={_onClickWrapper}
        />,
        <aside
          key="aside"
          className={CL.DRAWER}
          style={_asideStyle}
         >
           <div>
             {children}
           </div>
        </aside>
      ]
  );
}

export default  Drawer
