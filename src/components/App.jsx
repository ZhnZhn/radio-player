import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { addCategory, moveToTop } from '../flux/stations/actions'

import Radio from './radio/Radio'
import AudioPlayer from './radio/AudioPlayer'

const S = {
  APP: {
    width: 380,
    maxWidth: 'calc(100vw - 32px)',
    marginTop: 84,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 12
  }
};

const App = ({ stations, addCategory, moveToTop }) => {

  const [station, setStation] = useState('')
  , _onStation = (station, index) => {
    moveToTop(station, index)
    setStation(station)
  };
  useEffect(() => {
    addCategory('classical')
    addCategory('piano')
  }, [])

  return (
     <div style={S.APP}>
       <AudioPlayer
         station={station}
       />
       <Radio.List
          radioStations={stations}
          onClick={_onStation}
        />
      </div>
   );
}

const mapStateToProps = state => ({
  stations: state.stations
})
const mapDispatchToProps = {
  addCategory,
  moveToTop
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
