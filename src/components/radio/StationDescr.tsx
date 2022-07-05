import { StationType } from '../../sound/types';

import { useState } from '../uiApi';

import ShowHide from '../zhn/ShowHide';
import StationProtocol from './StationProtocol';
import Category from './StationDescrCategory';
import SiteUrl from './StationDescrSiteUrl';
import {
  S_ARROW_OPEN,  
} from './StationDescrStyle';

interface StationDescrProps {
  isHttp: boolean;
  station?: StationType;
}

const CL_DESCR = 'station-descr'
, CL_DESCR_BT = `${CL_DESCR}__bt`
, CL_BT_MORE = 'item-descr__bt-more'
, CL_INFO = `${CL_DESCR}__info`;

const StationDescr = ({ 
  isHttp,
  station 
}: StationDescrProps) => {
  const [isMore, setMore] = useState(true)
  , _onClick = () => setMore(isMore => !isMore)
  , _arrowStyle = isMore
       ? S_ARROW_OPEN
       : void 0
  , {
    title, 
    src, 
    siteUrl,
    category, 
    br
  } = station || {};

  if (!station) { return null; }

  return (
    <div className={CL_DESCR}>
      <button
         className={CL_DESCR_BT}
         onClick={_onClick}
      >
        <span>{title}</span>
        <StationProtocol src={src} />
        <span className={CL_BT_MORE} style={_arrowStyle}>{'>'}</span>
      </button>
      <ShowHide className={CL_INFO} isShow={isMore}>
        <div>
          <Category category={category} br={br} />
          <SiteUrl isHttp={isHttp} siteUrl={siteUrl} />
        </div>
      </ShowHide>
    </div>
  );
};

export default StationDescr
