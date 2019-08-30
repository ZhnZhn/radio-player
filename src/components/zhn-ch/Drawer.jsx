import React, { Component } from 'react'

//import withTheme from '../hoc/withTheme'
//import styleConfig from '../style/Comp.Style'

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
    top: 4,
    right: 16
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

class Drawer extends Component {
  state = { isOpen: false }

  _setBodyOverflowY = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }

  _hToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }), this._setBodyOverflowY)
  }

  render(){
    const {
       btStyle,
       //theme,
       children
     } = this.props
    , { isOpen } = this.state
    , _drawerStyle = isOpen
         ? S.DRAWER_ON
         : S.DRAWER_OFF
    , _drawerModalStyle = isOpen
         ? S.MODAL_ON
         : S.MODAL_OFF
    , _onClickWrapper = isOpen
         ? this._hToggle
         : undefined;
    //, TS = theme.createStyle(styleConfig);    
    return [
        <button
          key="bt-drawer"
          className={CL.DRAWER_BT}
          style={{ ...S.BT_DRAWER, ...btStyle }}
          aria-label="Open Drawer"
          onClick={this._hToggle}
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
          aria-hidden={!isOpen}
          className={CL.DRAWER_MODAL}
          style={_drawerModalStyle}
          onClick={_onClickWrapper}
        />,
        <aside
          key="aside"
          className={CL.DRAWER}
          //style={{ ..._drawerStyle, ...TS.COMP }}
          style={_drawerStyle}
         >
          {
            React.cloneElement(children, {
              onCloseDrawer: this._hToggle
            })
           }
        </aside>
      ];
  }
}

export default Drawer
//export default withTheme(Drawer)
