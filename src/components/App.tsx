import { useContext, useEffect } from './uiApi';

import AppContext from './AppContext';
import useHotKeysHandler from './hotkeys/useHotKeysHandler'

import Radio from './radio/Radio';
import AudioPlayer from './radio/AudioPlayer';

const CL = "app-radio-player";

const App = () => {  
  const { setSrcFilter } = useContext(AppContext);
  
  useHotKeysHandler(true)

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => { setSrcFilter('2') }, [])  
  // setSrcFilter
  /*eslint-enable react-hooks/exhaustive-deps */
    
  return (          
    <div className={CL}>
      <AudioPlayer />
      <Radio.List  />
    </div>          
  );
}

export default App
