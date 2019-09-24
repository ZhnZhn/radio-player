import React, { Component } from 'react'

import { connect } from 'react-redux'
import { sApp } from '../../flux/selectors'
import { toggleDrawer } from '../../flux/app/actions'

import uiThemeImpl from '../ui-theme/uiTheme'
import HAS from '../has'

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

class Drawer extends Component {

  componentDidMount(){
    if (HAS.TRANSITION) {
      this._asideNode.addEventListener('transitionend', this._hTransitionEnd)
    }
  }
  componentWillUnmount(){
    if (HAS.TRANSITION) {
      this._asideNode.removeEventListener('transitionend', this._hTransitionEnd)
    }
  }

  _hTransitionEnd = () => {
    if (!this.props.isOpen) {
      this._wrapperNode.style.display = 'none'
    }
  }

  _setBodyOverflowY = () => {
    const { isOpen } = this.props;
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }

  _setWrapperStyleToBlock = () => {
    if (this.props.isOpen && this._wrapperNode) {
      this._wrapperNode.style.display = 'block'
    }
  }

  componentDidUpdate(){
    this._setBodyOverflowY()
  }

  _refAside = node => this._asideNode = node
  _refWrapper = node => this._wrapperNode = node

  render(){
    const {
       isOpen,
       uiTheme,
       btStyle,
       toggleDrawer,
       children
     } = this.props
    , _asideStyle = {
        ...(isOpen ? S.DRAWER_ON : S.DRAWER_OFF),
        ...uiThemeImpl.toBg(uiTheme)
      }
    , _drawerModalStyle = isOpen
         ? S.MODAL_ON
         : S.MODAL_OFF
    , _onClickWrapper = isOpen
         ? toggleDrawer
         : void 0;
    this._setWrapperStyleToBlock()
    return [
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
          aria-hidden={!isOpen}
          className={CL.DRAWER_MODAL}
          style={_drawerModalStyle}
          onClick={_onClickWrapper}
        />,
        <aside
          ref={this._refAside}
          key="aside"
          className={CL.DRAWER}
          style={_asideStyle}
         >
           <div ref={this._refWrapper}>
             {children}
           </div>
        </aside>
      ];
  }
}

const mapStateToProps = state => ({
  isOpen: sApp.isDrawer(state),
  uiTheme: sApp.uiTheme(state)
});

const mapDispatchToProps = {
  toggleDrawer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer)
