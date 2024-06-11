import type { CSSProperties } from './types';
import Svg from './Svg';

interface SvgCheckedProps {
  style?: CSSProperties,
  color?: string
}

const CL_CHECK_IN = "check-in"
, DF_COLOR = '#64e346';

const S_SPAN: CSSProperties = {
  display: 'inline-block',
  width: 16,
  height: 16
};

const SvgChecked = ({ 
  style, 
  color=DF_COLOR
}: SvgCheckedProps) => (
  <span style={{ ...S_SPAN, ...style }}>
    <Svg w="16">
      <path
        className={CL_CHECK_IN}
        d="M 2,5 L 8,14 14,1"
        stroke={color}
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  </span>
);

export default SvgChecked
