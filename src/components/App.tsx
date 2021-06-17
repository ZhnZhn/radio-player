import { useContext, useEffect } from 'react';

import AppContext from './AppContext';

import Radio from './radio/Radio';
import AudioPlayer from './radio/AudioPlayer';

const CL = "app-radio-player";

const App = () => {  
  const { setSrcFilter } = useContext(AppContext);
    
  useEffect(() => { setSrcFilter('2') }, [])  

  return (     
     <div className={CL}>
      <AudioPlayer />
      <Radio.List  />
     </div>     
   );
}

export default App
