import type { 
  CSSProperties, 
  TabIndexType, 
  WithChildren, 
  MouseEvent 
} from '../types';

import useThrottleClick from '../hooks/useThrottleClick';
import crCn from '../crCn';
import CaptionInput from './CaptionInput';

interface FlatButtonProps {  
  timeout?: number,
  className?: string,
  style?: CSSProperties,
  clDiv?: string,
  clCaption?: string,
  isPrimary?: boolean,  
  caption?: string,   
  tabIndex?: TabIndexType,
  onClick: (event: MouseEvent) => void,
}

type FlatButtonType = WithChildren<FlatButtonProps>

const CL_BT_FLAT = 'bt-flat'
, CL_BT_FLAT_DIV = 'bt-flat__div'
, CL_BT_FLAT_SPAN = 'bt-flat__span'

, S_PRIMARY: CSSProperties = {  
  color: '#607d8b'  
};

const FlatButton = ({  
  timeout=500,
  className,
  style,
  clDiv=CL_BT_FLAT_DIV,
  clCaption,
  isPrimary,  
  caption, 
  tabIndex,
  onClick,
  children
}: FlatButtonType) => {  
  const _hClick = useThrottleClick(timeout, onClick);
    
  const _style = isPrimary
       ? {...style, ...S_PRIMARY}
       : style
  , _className = crCn(CL_BT_FLAT, className) 
  , _clCaption = crCn(CL_BT_FLAT_SPAN, clCaption); 
  
  return (
    <button      
      type="button"
      className={_className}
      style={_style}      
      tabIndex={tabIndex}      
      onClick={_hClick}
    >
      <div className={clDiv}>
        <CaptionInput
          className={_clCaption}
          caption={caption}          
        />
        {children}
      </div>
    </button>
  );
};

export default FlatButton
