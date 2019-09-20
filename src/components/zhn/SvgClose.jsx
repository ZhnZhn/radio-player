import React from 'react';
//import PropTypes from "prop-types";

const CL = "svg-close";

const S = {  
  COLOR: '#f44336',
  SVG: {
    padding: 3,
  }
};

const SvgClose = ({ className=CL, style, tabIndex=-1, onClick }) => (
   <button
      className={className}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
   >
     <svg viewBox="0 0 12 12" width="100%" height="100%"
          style={S.SVG} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          strokeWidth="2"
          stroke={S.COLOR}
          strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </svg>
   </button>
)

/*
SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/


export default SvgClose
