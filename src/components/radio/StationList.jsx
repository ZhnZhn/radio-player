import React from 'react'

import HAS from '../has'

import StationDescr from './StationDescr'
import StationItem from './StationItem'

const CL = {
  LIST: 'item-list',
};

const _calcAccessKey = index => index < 6 && index !== 0
  ? index
  : void 0;

const StationList = ({ radioStations, onClick }) => (
  <div className={CL.LIST}>
    {
      radioStations.map((station, index) => {
        return index === 0
          ? (
            <StationDescr
              key={station.title}
              station={station}
            />
          )
          : (
            <StationItem
              key={station.title}
              station={station}
              accessKey={HAS.TOUCH ? void 0 : _calcAccessKey(index)}
              onClick={onClick.bind(null, station, index)}
            />
          );
       })
    }
  </div>
);

export default StationList
