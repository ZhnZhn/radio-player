import React, { useReducer, useEffect, useCallback } from 'react'

import HAS from '../has'

import sound from '../../sound/sound'
import Radio from './Radio'
import Title from './Title'
import Equalizer from './Equalizer'

import reducer from './playerReducer'

const A = reducer.A;

const DF_TITLE = 'Radio Player v0.1.0'
const MSG_NO_STATION = 'At first, please, choose a radio station.'

const CL = {
  PLAYER: 'audio-player'
};

const S = {
  TITLE_CONT: {
    display: 'flex',
    alignItems: 'center'
  }
};

const _setMediaMetadata = (artist='') => {
  if (HAS.MEDIA_SESSION) {
    /*eslint-disable no-undef*/
    navigator.mediaSession.metadata = new MediaMetadata({
      title: DF_TITLE,
      artist
    });
    /*eslint-enable no-undef*/
  }
};

const initialState = {
  msgErr: '',
  title: DF_TITLE,
  isUnloaded: true,
  isPlaying: false,
  volume: sound.INIT_VOLUME
};

const AudioPlayer = ({ station }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
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
    if (!msgErr && sound.play()) {
      dispatch({ type: A.SET_PLAYING })
      _setMediaMetadata(station && station.title || DF_TITLE)
    } else {
      dispatch({ type: A.SET_TITLE, title: MSG_NO_STATION })
      _setMediaMetadata()
    }
  };
  const stop = () => {
    sound.stop()
    dispatch({ type: A.PAUSE })
  };

  const _unload = () => {
    sound.unload()
    dispatch({ type: A.UNLOAD })
    _setMediaMetadata()
  };

  const _onError = (msg) => {
    dispatch({ type: A.SET_ERROR, msgErr: msg })
    _setMediaMetadata()
  };

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


  return (
    <div className={CL.PLAYER}>
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
          onStop={stop}
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
