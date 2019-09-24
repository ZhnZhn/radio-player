import React, { useContext, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import HAS from '../has'
import AppContext from '../AppContext'
import useSwipeGesture from '../hooks/useSwipeGesture'

import StationDescr from './StationDescr'
import StationItem from './StationItem'

const CL = {
  LIST: 'item-list',
};

const _calcAccessKey = index => index < 5
  ? index + 1
  : void 0;

const StationList = ({ currentStation, radioStations, onClick }) => {
  const { toggleDrawer } = useContext(AppContext)
  , dispatch = useDispatch()
  , onSwipeGesture = useCallback(() => dispatch(toggleDrawer()), [])
  , _handlers = useSwipeGesture({ onSwipeGesture });
  return (
    <div className={CL.LIST} {..._handlers} >
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
}

export default StationList
