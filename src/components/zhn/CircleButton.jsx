import React from 'react'

const CL = 'bt-circle';

const CircleButton = ({
  accessKey,
  onMouseDown, onMouseUp,
  onClick,
  children
}) => (
  <button
    className={CL}
    accessKey={accessKey}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onClick={onClick}
  >
    <svg viewBox="0 0 34 34" width="100%" height="100%">
      <g>
        {children}
      </g>
    </svg>
  </button>
);

export default CircleButton
