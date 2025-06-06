import type { 
  PropsWithChildren, 
  CSSProperties 
} from './types';
import crCn from '../crCn';

interface ShowHideProps {
  isShow?: boolean, 
  className?: string, 
  style?: CSSProperties
}

const CL_SHOW_POPUP = 'show-popup'
, S_SHOW: CSSProperties = { display: 'block' }
, S_HIDE: CSSProperties = { display: 'none' };

const ShowHide = ({ 
  isShow, 
  className, 
  style, 
  children 
}: PropsWithChildren<ShowHideProps>) => {
    const _styleShow = isShow ? S_SHOW : S_HIDE    
    , _className = crCn(className, [isShow, CL_SHOW_POPUP]);
    
    return (
      <div
        className={_className}
        style={{...style, ..._styleShow}}
      >
        {children}
      </div>
    );
 }

 export default ShowHide
