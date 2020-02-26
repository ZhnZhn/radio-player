import React, { useRef, useCallback, useImperativeHandle } from 'react'

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

const FlatButton = ({
  innerRef,
  timeout=500,
  className,
  rootStyle,
  clDiv=CL.BT_DIV,
  clCaption,
  isPrimary,
  title='', caption, accessKey,
  onClick,
  children
}) => {
  const _refBt = useRef()
  , _setPointerEvents = useCallback((value='auto') => {
    if (_refBt.current) {
       _refBt.current.style[POINTER_EVENTS] = value
    }
  }, [])
  , _hClick = useCallback((event) => {
    if (timeout !== 0) {
      _setPointerEvents('none')
      setTimeout(_setPointerEvents, timeout)
    }
    onClick(event)
  }, [timeout, onClick])

  useImperativeHandle(innerRef, () => ({
    focus: () => {
      if (_refBt.current) {
        _refBt.current.focus()
      }
   }
  }))

  const _style = isPrimary
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
      ref = {_refBt}
      className={_className}
      style={_style}
      accessKey={accessKey}
      tabIndex={0}
      title={_title}
      onClick={_hClick}
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

export default FlatButton
