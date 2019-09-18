import React from 'react'

const CL = {
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};

const StationItem = ({ station, accessKey, onClick }) => (
  <button
    className={CL.ITEM}
    accessKey={accessKey}
    onClick={onClick}
  >
    <span>{station.title}</span>
    {
      Boolean(accessKey) && <span
        className={CL.ACCESS_KEY}>
        {accessKey}
      </span>
    }
  </button>
);

export default StationItem 
