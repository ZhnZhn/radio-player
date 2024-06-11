import type { AudioPlayerStateType, TimeoutIdType } from './types';
import type { MutableRefObject } from '../uiApi';

import { 
  useRef, useReducer, useCallback,
  useEffect, useContext   
} from '../uiApi';

import { HAS_MEDIA_SESSION } from '../has';
import AppContext from '../AppContext';

import sound from '../../sound/sound';
import Radio from './Radio';
import Title from './Title';
import Equalizer from './Equalizer';

import reducer from './playerReducer';
import { 
  DF_TITLE, 
  DF_VOLUME, 
  MSG_NO_STATION, 
  PAUSE_TIMEOUT_MLS 
} from './AudioPlayerDf';
import { CSSProperties } from '../types';

const A = reducer.A;

const CL_AUDIO_PLAYER = 'audio-player';

const S_TITLE_CONT: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: 4
};

const _setMediaMetadata = (artist='') => {
  if (HAS_MEDIA_SESSION) {    
    /*eslint-disable no-undef*/      
    navigator.mediaSession.metadata = new MediaMetadata({
      title: DF_TITLE,
      artist
    });    
    /*eslint-enable no-undef*/
  }
};

const _clearTimeout = (ref: MutableRefObject<TimeoutIdType>) => {
  clearTimeout((ref.current as unknown) as number)
  ref.current = null;
};

const initialState: AudioPlayerStateType = {
  msgErr: '',
  title: DF_TITLE,
  isUnloaded: true,
  isPlaying: false,
  volume: DF_VOLUME
};

const AudioPlayer = () => {
  const _refPauseID = useRef<TimeoutIdType>(null)
  , {
    uiThemeImpl,
    sApp, useSelector
  } = useContext(AppContext)
  , uiTheme = useSelector(sApp.uiTheme)
  , station = useSelector(sApp.currentStation)
  , [state, dispatch] = useReducer(reducer, initialState)
  , { isUnloaded, isPlaying,
      volume,
      title, msgErr
    } = state;

  const _setVolume = useCallback((newVolume: number) => dispatch({
    type: A.SET_VOLUME,
    volume: sound.setVolume(newVolume)
  }), []);
  const _increaseVolume = useCallback(() => dispatch({
    type: A.SET_VOLUME,
    volume: sound.increaseVolume(0.01)
  }), []);
  const _decreaseVolume = useCallback(() => dispatch({
    type: A.SET_VOLUME,
    volume: sound.decreaseVolume(0.01)
  }), []);

  const play = () => {
    _clearTimeout(_refPauseID)
    if (!msgErr && sound.play()) {
      dispatch({ type: A.SET_PLAYING })
      _setMediaMetadata(station && station.title || DF_TITLE)      
    } else {
      dispatch({ type: A.SET_TITLE, title: MSG_NO_STATION })
      _setMediaMetadata()      
    }
  };
  const pause = () => {
    sound.stop()    
    _refPauseID.current = setTimeout(
       () => dispatch({ type: A.UNLOAD }),
       PAUSE_TIMEOUT_MLS
    )
    dispatch({ type: A.PAUSE })
  };

  const _unload = () => {
    sound.unload()
    dispatch({ type: A.UNLOAD })
    _setMediaMetadata()
  };

  const stop = useCallback(() => {
    sound.stop()
    sound.unload()
    dispatch({ type: A.STOP })
  }, [])

  const _onError = (msg: string) => {
    dispatch({ type: A.SET_ERROR, msgErr: msg })
    _setMediaMetadata()
  };

  /*eslint-disable react-hooks/exhaustive-deps */ 
  useEffect( () => {
    if (HAS_MEDIA_SESSION) {            
      navigator.mediaSession.setActionHandler('pause', stop)
    }
  }, [])
  // stop
  /*eslint-enable react-hooks/exhaustive-deps */
 
  useEffect(()=>{
    if (station && station.src
      && sound.init(station.src,
          _onError.bind(null, 'Load Error'),
          _onError.bind(null, 'Play Error'),
      )) {
        dispatch({ type: A.SET_LOADING })
    }
    return () => { sound.unload() };
  }, [station])

  const _style = uiThemeImpl.toBg(uiTheme);

  return (
    <div className={CL_AUDIO_PLAYER} style={_style}>
      <Radio.Volume
        volume={volume}
        setVolume={_setVolume}
        onIncrease={_increaseVolume}
        onDecrease={_decreaseVolume}
      />
      <div style={S_TITLE_CONT}>
        <Radio.Command
          isPlaying={isPlaying}
          onPlay={play}
          onStop={pause}
        />
        <Title
          station={station}
          msgErr={msgErr}
          title={title}
        />
        <Equalizer
          isPlaying={isPlaying}
          isUnloaded={isUnloaded}
          unload={_unload}
        />
      </div>
    </div>
  );
}

export default AudioPlayer
