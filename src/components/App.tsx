import useHotKeysHandler from './hotkeys/useHotKeysHandler'

import Radio from './radio/Radio';
import AudioPlayer from './radio/AudioPlayer';

const CL = "app-radio-player";

const App = () => {      
  useHotKeysHandler(true)
      
  return (          
    <div className={CL}>
      <AudioPlayer />
      <Radio.List  />
    </div>          
  );
}

export default App
