import { CSSProperties, TabIndexType } from "./types";

interface SvgCloseProps {
  className?: string, 
  style?: CSSProperties, 
  tabIndex?: TabIndexType, 
  onClick: () => void
}

const CL = "svg-close"
, STROKE_COLOR = '#f44336'
, S_SVG: CSSProperties = {
    padding: 3,
};

const SvgClose = ({ 
  className=CL, 
  style, 
  tabIndex=-1, 
  onClick 
}: SvgCloseProps) => (
   <button
      className={className}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
   >
     <svg viewBox="0 0 12 12" width="100%" height="100%"
          style={S_SVG} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          strokeWidth="2"
          stroke={STROKE_COLOR}
          strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </svg>
   </button>
)

export default SvgClose
