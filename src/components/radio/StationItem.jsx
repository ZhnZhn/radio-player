import StationProtocol from './StationProtocol'

const CL = {
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};

const StationItem = ({ station, accessKey, onClick }) => {
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
