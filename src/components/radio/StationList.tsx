import { useContext } from '../uiApi';
import { HAS_KEYBOARD_FOCUS  } from '../has';

import AppContext from '../AppContext';
import useSwipeGesture from '../hooks/useSwipeGesture';

import StationDescr from './StationDescr';
import StationItem from './StationItem';

const CL_STATION_LIST = 'item-list';

const _crHotKey = (index: number) => index < 5
  ? '' + (index + 1)
  : void 0;

const StationList = () => {
  const {
    toggleDrawer, 
    setCurrentStation,
    sApp, 
    useSelector
  } = useContext(AppContext)
  , currentStation = useSelector(sApp.currentStation)
  , radioStations = useSelector(sApp.stations)  
  , _handlers = useSwipeGesture({
      onSwipeGesture: toggleDrawer
    });
  return (
    <div className={CL_STATION_LIST} {..._handlers} >
        <StationDescr     
          station={currentStation} 
        />
      {
        radioStations.map((station, index) => (
           <StationItem
             key={station.title}
             station={station}
             hotKey={HAS_KEYBOARD_FOCUS ? _crHotKey(index): void 0}
             onClick={setCurrentStation.bind(null, station, index)}
           />
        ))         
      }
    </div>
  );
};

export default StationList
