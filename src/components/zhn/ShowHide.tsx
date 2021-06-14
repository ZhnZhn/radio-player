import { WithChildren, CSSProperties } from './types';

interface ShowHideProps {
  isShow?: boolean, 
  className?: string, 
  style?: CSSProperties
}

type ShowHideType = WithChildren<ShowHideProps>

const CL_SHOW_POPUP = 'show-popup'
, S_SHOW: CSSProperties = { display: 'block' }
, S_HIDE: CSSProperties = { display: 'none' };

const ShowHide = ({ 
  isShow, 
  className, 
  style, 
  children 
}: ShowHideType) => {
    const _styleShow = isShow ? S_SHOW : S_HIDE
    , _classShow = isShow ? CL_SHOW_POPUP : ''
    , _className = className
          ? `${className} ${_classShow}`
          : (_classShow !== '')
               ? _classShow
               : void 0;
    return (
      <div
        className={_className}
        style={{ ...style, ..._styleShow }}
      >
        {children}
      </div>
    );
 }

 export default ShowHide
