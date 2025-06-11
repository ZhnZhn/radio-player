import { StationType } from '../../sound/types';

import { useState } from '../uiApi';

import ShowHide from '../zhn/ShowHide';
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
, CL_DESCR_BT = `${CL_DESCR}__bt black`
, CL_ITEM_DESCR_MORE = 'item-descr__more'
, CL_INFO = `${CL_DESCR}__info`;

const StationDescr = ({
  isHttp,
  station
}: StationDescrProps) => {
  const [
    isMore, 
    setMore
  ] = useState(!0)
  , _onClick = () => setMore(isMore => !isMore)
  , _arrowStyle = isMore
       ? S_ARROW_OPEN
       : void 0
  , {
    title,
    siteUrl,
    category,
    br
  } = station || {};
  
  return station ? (
    <div className={CL_DESCR}>
      <button
         type="button"
         className={CL_DESCR_BT}
         onClick={_onClick}
      >
        <span>{title}</span>        
        <span className={CL_ITEM_DESCR_MORE} style={_arrowStyle}>{'>'}</span>
      </button>
      <ShowHide className={CL_INFO} isShow={isMore}>
        <div>
          <Category category={category} br={br} />
          <SiteUrl isHttp={isHttp} siteUrl={siteUrl} />
        </div>
      </ShowHide>
    </div>
  ) : null;
};

export default StationDescr
