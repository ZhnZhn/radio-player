import { AudioPlayerStateType, TimeoutIdType } from './types';

import React, { useRef, useReducer, useEffect, useCallback, useContext } from 'react';

import HAS from '../has';
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

const A = reducer.A;

const CL_AUDIO_PLAYER = 'audio-player';


const S = {
  TITLE_CONT: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 4
  }
};

/*
const _setPlaybackState = (state) => {
  if (HAS.MEDIA_SESSION) {
    navigator.mediaSession.playbackState = state
  }
}
const _setPlaybackPlaying = _setPlaybackState.bind(null, 'playing')
const _setPlaybackPaused = _setPlaybackState.bind(null, 'paused')
const _setPlaybackNone = _setPlaybackState.bind(null, 'none')
*/

const _setMediaMetadata = (artist='') => {
  if (HAS.MEDIA_SESSION) {
    /*
    if (!artist || artist === DF_TITLE) {
      _setPlaybackNone()
    } else {
      _setPlaybackPlaying()
    }
    */

    /*eslint-disable no-undef*/  
    // @ts-expect-error
    // 1) Property mediaSession does not exist on type Navigator  
    // 2) Cannot find name MediaMetadata
    navigator.mediaSession.metadata = new MediaMetadata({
      title: DF_TITLE,
      artist
    });
    /*eslint-enable no-undef*/
  }
};

/*
const _setMediaSessionHandlers = (onPlay=null, onPause=null) => {
  const _mediaSession = navigator.mediaSession;
  _mediaSession.setActionHandler('play', onPlay)
  _mediaSession.setActionHandler('pause', onPause)
  if (onPlay) {
    _mediaSession.playbackState ='paused'
  } else if (onPause) {
    _mediaSession.playbackState = 'playing'
  } else {
    _mediaSession.playbackState = 'none'
  }
};
*/

const _clearTimeout = (ref: React.MutableRefObject<TimeoutIdType>) => {
  clearTimeout((ref.current as unknown) as number)
  ref.current = null;
};

//const PAUSE_TIMEOUT_MLS = 1000*60;

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

  const _setVolume = useCallback(newVolume => dispatch({
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
      //_setMediaSessionHandlers(null, pause)
    } else {
      dispatch({ type: A.SET_TITLE, title: MSG_NO_STATION })
      _setMediaMetadata()
      //_setMediaSessionHandlers()
    }
  };
  const pause = () => {
    sound.stop()
    //_setMediaSessionHandlers(play)
    //_setPlaybackPaused()
    _refPauseID.current = setTimeout(
       () => dispatch({ type: A.UNLOAD }),
       PAUSE_TIMEOUT_MLS
    )
    dispatch({ type: A.PAUSE })
  };

  const _unload = () => {
    sound.unload()
    dispatch({ type: A.UNLOAD })
    //_setMediaSessionHandlers()
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

  useEffect( () => {
    if (HAS.MEDIA_SESSION) {
      // @ts-expect-error
      // Property mediaSession does not exist on type Navigator
      navigator.mediaSession.setActionHandler('pause', stop)
    }
  }, [])

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
      <div style={S.TITLE_CONT}>
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
