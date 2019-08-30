import React, { Component } from 'react'

import CaptionInput from './CaptionInput'

const CL = {
  BT: 'bt-flat',
  BT_DIV: 'bt-flat__div',
  BT_SPAN: 'bt-flat__span'
};
const S = {
  PRIMARY: {
    color: '#607d8b'
  }
};
const POINTER_EVENTS = 'pointer-events';

class FlatButton extends Component {

  static defaultProps = {
    timeout: 500
  }

  _setPointerEvents = (value='auto') => {
    if (this && this.rootNode && this.rootNode.style) {
       this.rootNode.style[POINTER_EVENTS] = value
    }
  }

  _hClick = (event) => {
    this._setPointerEvents('none')
    const { timeout, onClick } = this.props;
    setTimeout(this._setPointerEvents, timeout)
    onClick(event)
  }

  _refNode = node => this.rootNode = node

  render() {
    const {
           className,
           rootStyle,
           clDiv=CL.BT_DIV,
           clCaption,
           isPrimary,
           title='', caption, accessKey,
           children
          } = this.props
        , _style = isPrimary
             ? {...rootStyle, ...S.PRIMARY }
             : rootStyle
        , _className = className
             ? `${CL.BT} ${className}`
             : CL.BT
        , _clCaption = clCaption
              ? `${CL.BT_SPAN} ${clCaption}`
              : CL.BT_SPAN
        , _title = accessKey
             ? `${title} [${accessKey}]`
             : title;
  return (
    <button
      ref = {this._refNode}
      className={_className}
      style={_style}
      accessKey={accessKey}
      tabIndex={0}
      title={_title}
      onClick={this._hClick}
    >
      <div className={clDiv}>
        <CaptionInput
          className={_clCaption}
          caption={caption}
          accessKey={accessKey}
        />
        {children}
      </div>
    </button>
  );
 }

 focus(){
   this.rootNode.focus()
 }

}

export default FlatButton
