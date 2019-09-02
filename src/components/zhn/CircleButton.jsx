import React from 'react'

import HAS from '../has'

const CL = 'bt-circle';

const CircleButton = ({
  accessKey,
  onMouseDown, onMouseUp,
  onTouchStart, onTouchEnd,
  onClick,
  children
}) => {
  const _handlers = HAS.TOUCH && onTouchStart
    ? { onTouchStart, onTouchEnd }
    : { onMouseDown, onMouseUp };
  return (
    <button
      className={CL}
      accessKey={accessKey}
      {..._handlers}
      onClick={onClick}
    >
      <svg viewBox="0 0 34 34" width="100%" height="100%">
        <g>
          {children}
        </g>
      </svg>
    </button>
   );
};

export default CircleButton
