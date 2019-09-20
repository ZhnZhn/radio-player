import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { addCategory, setCurrentStation } from '../flux/stations/actions'


import AppContext from './AppContext'

import Radio from './radio/Radio'
import AudioPlayer from './radio/AudioPlayer'

const CL = "app-radio-player";

const { sApp } = AppContext.value;

const App = ({
  currentStation, stations,
  addCategory, setCurrentStation
}) => {
  useEffect(() => {
    addCategory('classical')
    addCategory('piano')
  }, [])
  return (
     <AppContext.Provider value={AppContext.value}>
        <div className={CL}>
         <AudioPlayer
           station={currentStation}
         />
         <Radio.List
            currentStation={currentStation}
            radioStations={stations}
            onClick={setCurrentStation}
          />
        </div>
     </AppContext.Provider>
   );
}

const mapStateToProps = state => ({
  currentStation: sApp.currentStation(state),
  stations: sApp.stations(state)
})
const mapDispatchToProps = {
  addCategory,
  setCurrentStation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
