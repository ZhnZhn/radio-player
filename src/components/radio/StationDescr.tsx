import { StationType } from '../../sound/types';

import { useState } from 'react';

import ShowHide from '../zhn/ShowHide';
import StationProtocol from './StationProtocol';
import Category from './StationDescrCategory';
import SiteUrl from './StationDescrSiteUrl';
import S from './StationDescrStyle';

interface StationDescrProps {
  station?: StationType;
}

const CL = {
  DESCR: 'station-descr',
  DESCR_BT: 'station-descr__bt',
  BT_MORE: 'item-descr__bt-more',
  INFO: 'station-descr__info'
};

const StationDescr = ({ station }: StationDescrProps) => {
  const [isMore, setMore] = useState(true)
  , _onClick = () => setMore(isMore => !isMore)
  , _arrowStyle = isMore
       ? S.ARROW_OPEN
       : void 0
  , {
    title, src, siteUrl,
    category, br
  } = station || {};

  if (!station) { return null; }

  return (
    <div className={CL.DESCR}>
      <button
         className={CL.DESCR_BT}
         onClick={_onClick}
      >
        <span>{title}</span>
        <StationProtocol src={src} />
        <span className={CL.BT_MORE} style={_arrowStyle}>{'>'}</span>
      </button>
      <ShowHide className={CL.INFO} isShow={isMore}>
        <div>
          <Category category={category} br={br} />
          <SiteUrl siteUrl={siteUrl} />
        </div>
      </ShowHide>
    </div>
  );
};

export default StationDescr
