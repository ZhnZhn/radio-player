import type { StationType } from '../../sound/types';

import StationProtocol from './StationProtocol';

interface StationItemProps {
  station: StationType,
  accessKey?: string,
  onClick: () => void
}

const CL = {
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};

const StationItem = ({ station, accessKey, onClick }: StationItemProps) => {
  const { title, src } = station;
  return (
    <button
      className={CL.ITEM}
      accessKey={accessKey}
      onClick={onClick}
    >
      <span>{title}</span>
      <StationProtocol src={src} />
      {
        Boolean(accessKey) && <span
          className={CL.ACCESS_KEY}>
          {accessKey}
        </span>
      }
   </button>
 );
}

export default StationItem
