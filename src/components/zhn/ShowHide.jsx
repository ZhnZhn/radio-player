import React from 'react';

const CL_SHOW_POPUP = 'show-popup';
const S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  }
};

const ShowHide = ({ isShow, className, style, children }) => {
    const _styleShow = isShow ? S.SHOW : S.HIDE
        , _classShow = isShow ? CL_SHOW_POPUP : ''
        , _className = className
              ? `${className} ${_classShow}`
              : (_classShow !== '')
                   ? _classShow
                   : void 0;
    return (
      <div
        className={_className}
        style={{ ...style, ..._styleShow }}
      >
        {children}
      </div>
    );
 }

 export default ShowHide
