import { CSSProperties, TabIndexType, WithChildren } from '../types';
import React, { useRef, useCallback, useImperativeHandle } from 'react';

import CaptionInput from './CaptionInput';

type FocusElementType = { focus: () => void }

interface FlatButtonProps {
  innerRef?: React.Ref<FocusElementType>,
  timeout?: number,
  className?: string,
  style?: CSSProperties,
  clDiv?: string,
  clCaption?: string,
  isPrimary?: boolean,
  title?: string, 
  caption?: string, 
  accessKey?: string,
  tabIndex?: TabIndexType,
  onClick: (event: React.MouseEvent) => void,
}

type FlatButtonType = WithChildren<FlatButtonProps>

const CL = {
  BT: 'bt-flat',
  BT_DIV: 'bt-flat__div',
  BT_SPAN: 'bt-flat__span'
};
const S_PRIMARY: CSSProperties = {  
  color: '#607d8b'  
};

const FlatButton = ({
  innerRef,
  timeout=500,
  className,
  style,
  clDiv=CL.BT_DIV,
  clCaption,
  isPrimary,
  title='', caption, accessKey,
  tabIndex,
  onClick,
  children
}: FlatButtonType) => {
  const _refBt = useRef<HTMLButtonElement>(null)
  , _refTimeStamp = useRef<number>(0)  
  , _hClick = useCallback((event: React.MouseEvent) => {        
    if (timeout !== 0) {
      const _timeStamp = _refTimeStamp.current
      , { timeStamp } = event;
      if (_timeStamp && timeStamp - _timeStamp > timeout) {
        onClick(event)  
      }
      _refTimeStamp.current = timeStamp      
    } else {
      onClick(event)
    }  
  }, [timeout, onClick])

  useImperativeHandle(innerRef, () => ({
    focus: () => {
      if (_refBt.current) {
        _refBt.current.focus()
      }
   }
  }))

  const _style = isPrimary
       ? {...style, ...S_PRIMARY}
       : style
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
      tabIndex={tabIndex}
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
