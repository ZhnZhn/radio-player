import type { StationType } from '../../sound/types';

import useHotKey from '../hotkeys/useHotKey';

interface StationItemProps {
  station: StationType,
  hotKey?: string,
  onClick: () => void
}

const CL_ITEM = 'item-station'
, CL_HOT_KEY = `${CL_ITEM}__access`;

const StationItem = ({ 
  station, 
  hotKey, 
  onClick 
}: StationItemProps) => {
  const { title } = station
  , _refBt = useHotKey(hotKey);
  return (
    <button
      type="button"
      ref={_refBt}      
      className={CL_ITEM}      
      onClick={onClick}
    >
      <span>{title}</span>      
      {
        Boolean(hotKey) && <span className={CL_HOT_KEY}>
          {hotKey}
        </span>
      }
   </button>
 );
};

export default StationItem
