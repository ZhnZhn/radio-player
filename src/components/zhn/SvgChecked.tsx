import type { CSSProperties } from './types';

interface SvgCheckedProps {
  style?: CSSProperties,
  color?: string
}

const CL_CHECK_IN = "check-in";

const S_SPAN: CSSProperties = {
  display: 'inline-block',
  width: 16,
  height: 16
};

const SvgChecked = ({ 
  style, 
  color='#64e346' 
}: SvgCheckedProps) => (
  <span style={{ ...S_SPAN, ...style }}>
    <svg
      viewBox="0 0 16 16" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={CL_CHECK_IN}
        d="M 2,5 L 8,14 14,1"
        stroke={color}
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

export default SvgChecked
