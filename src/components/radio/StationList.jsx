import React from 'react'

import HAS from '../has'

const CL = {
  LIST: 'item-list',
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};

const _calcAccessKey = index => index < 6 && index !== 0
  ? index
  : void 0;

const StationList = ({ radioStations, onClick }) => (
  <div className={CL.LIST}>
    {
      radioStations.map((station, index) => {
        const accessKey = HAS.TOUCH
          ? void 0
          : _calcAccessKey(index);
        return (
          <button
            className={CL.ITEM}
            key={station.title}
            accessKey={accessKey}
            onClick={onClick.bind(null, station, index)}
          >
            <span>{station.title}</span>
            {
              Boolean(accessKey) && <span
                className={CL.ACCESS_KEY}>
                {accessKey}
              </span>
            }
          </button>
      )}
     )
   }
  </div>
);

export default StationList
