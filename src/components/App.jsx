import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import AppContext from './AppContext'

import Radio from './radio/Radio'
import AudioPlayer from './radio/AudioPlayer'

const CL = "app-radio-player";

const App = () => {
  const dispatch = useDispatch()
  , appContextValue = AppContext.getValue(dispatch)
  , { setSrcFilter } = appContextValue;

  useEffect(() => {
    setSrcFilter(2)
  }, [])

  return (
     <AppContext.Provider value={appContextValue}>
        <div className={CL}>
         <AudioPlayer />
         <Radio.List  />
        </div>
     </AppContext.Provider>
   );
}

export default App
