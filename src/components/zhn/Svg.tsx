
import type { 
  ComponentPropsWithoutRef,
  PropsWithChildren 
} from "../types";

interface SvgProps extends ComponentPropsWithoutRef<"svg"> {
    w: number | string;
    h?: number | string;
}

const Svg = ({
    w,
    h=w,
    children,
    ...restProps
}: PropsWithChildren<SvgProps>) => (
    <svg
      aria-hidden="true" 
      viewBox={`0 0 ${w} ${h}`}
      {...restProps} 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"      
    >
      {children}
    </svg>
);

export default Svg