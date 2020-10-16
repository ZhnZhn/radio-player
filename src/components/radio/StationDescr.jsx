import { useState } from 'react'

import ShowHide from '../zhn/ShowHide'
import StationProtocol from './StationProtocol'

const CL = {
  DESCR: 'station-descr',
  DESCR_BT: 'station-descr__bt',
  BT_MORE: 'item-descr__bt-more',
  INFO: 'station-descr__info'
};

const S = {
  ARROW_OPEN: {
    transform: 'rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)'
  },
  LINK: {
    color: '#04477b',
    fontSize: '17px',
    display: 'inline-block',
    maxWidth: 340,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  TITLE: {
    color: 'darkgray'
  },
  CATEGORY: {
    color: '#1b2836'
  }
};


const _isStrNotEmpty = str => str
  && typeof str === 'string';
const _toFirstUpperCase = str => str[0].toUpperCase()
  + str.substring(1);

const Category = ({ category, br }) => {
  if (!_isStrNotEmpty(category)) return null;
  const _kbps = br ? ` (${br} Kbps)` : '';
  return (
    <div>
      <span style={S.TITLE}>
        Category:
      </span>&nbsp;
      <span style={S.CATEGORY}>
       {_toFirstUpperCase(category)}{_kbps}
      </span>
    </div>
  );
}

const SiteUrl = ({ siteUrl }) => {
  if (!siteUrl) return null;
  return (
    <a href={siteUrl}
       style={S.LINK}
       target="_blank"
       rel="noreferrer noopener"
    >
      {siteUrl}
    </a>
  );
}


const StationDescr = ({ station }) => {
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
        <span className={CL.BT_MORE} style={_arrowStyle}>></span>
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
