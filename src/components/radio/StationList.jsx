import React from 'react'

const CL = {
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};



const StationList = ({ radioStations, onClick }) => (
  <div>
    {
      radioStations.map((station, index) => {
        const accessKey = index < 6 && index !== 0
          ? index
          : undefined;
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
