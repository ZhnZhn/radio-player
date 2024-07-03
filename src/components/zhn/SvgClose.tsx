import type { 
  CSSProperties, 
  TabIndexType 
} from "./types";

import Svg from './Svg';

interface SvgCloseProps {
  className?: string, 
  style?: CSSProperties, 
  tabIndex?: TabIndexType, 
  onClick: () => void
}

const CL = "svg-close"
, S_SVG: CSSProperties = {
  padding: 3,
  stroke: 'inherit'
};

const SvgClose = ({ 
  className=CL, 
  style, 
  tabIndex=-1, 
  onClick 
}: SvgCloseProps) => (
   <button
      type="button"
      className={className}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
   >
     <Svg 
        w="12"                
        width="100%" 
        height="100%"
        style={S_SVG}         
        strokeWidth="2"        
        strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </Svg>
   </button>
);

export default SvgClose
