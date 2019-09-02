import React, { useState, useEffect } from 'react'

import HAS from '../has'

import sound from '../../sound/sound'
import Radio from './Radio'
import Title from './Title'
import Equalizer from './Equalizer'

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

const _setMediaMetadata = (artist) => {
  if (HAS.MEDIA_SESSION) {
    /*eslint-disable no-undef*/
    navigator.mediaSession.metadata = new MediaMetadata({
      title: DF_TITLE,
      artist
    });
    /*eslint-enable no-undef*/
  }
};

const AudioPlayer = ({ station }) => {
  const [msgErr, setErrMsg] = useState('')
  , [title, setTitle] = useState(DF_TITLE)
  , [isUnloaded, setUnloaded] = useState(true)
  , [isPlaying, setPlaying] = useState(false)
  , [volume, setVolume] = useState(sound.INIT_VOLUME);

  const _setVolume = (volume) => {
    sound.setVolume(volume)
    setVolume(volume)
  };
  const _increaseVolume = () => setVolume(
    sound.increaseVolume(0.01)
  );
  const _decreaseVolume = () => setVolume(
    sound.decreaseVolume(0.01)
  );

  const play = () => {
    if (!msgErr && sound.play()) {
      setPlaying(true)
      setUnloaded(false)
      _setMediaMetadata(title)
    } else {
      setTitle(MSG_NO_STATION)
      _setMediaMetadata()
    }
  };
  const stop = () => {
    sound.stop()
    setPlaying(false)
  };

  const _unload = () => {
    sound.unload()
    setUnloaded(true)
    _setMediaMetadata()
  };

  const _onError = (msg) => {
    setErrMsg(msg)
    setUnloaded(true)
    setPlaying(false)
    _setMediaMetadata()
  };

  useEffect(()=>{
    if (station && station.src
      && sound.init(station.src,
          _onError.bind(null, 'Load Error'),
          _onError.bind(null, 'Play Error'),
      )) {
      setUnloaded(false)
      setPlaying(false)
      setErrMsg('')
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
