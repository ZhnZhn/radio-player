import React from 'react'

import HAS from '../has'

import StationDescr from './StationDescr'
import StationItem from './StationItem'

const CL = {
  LIST: 'item-list',
};

const _calcAccessKey = index => index < 5
  ? index + 1
  : void 0;

const StationList = ({ currentStation, radioStations, onClick }) => (
  <div className={CL.LIST}>
      <StationDescr
        station={currentStation}
      />
    {
      radioStations.map((station, index) => {
        return (
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
