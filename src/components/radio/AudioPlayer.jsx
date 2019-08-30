import React, { useState, useEffect } from 'react'

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


const AudioPlayer = ({ station }) => {
  const [msgErr, setErrMsg] = useState('')
  const [title, setTitle] = useState(DF_TITLE)
  const [isUnloaded, setUnloaded] = useState(true)
  const [isPlaying, setPlaying] = useState(false)
  const [volume, setVolume] = useState(sound.INIT_VOLUME);

  const _setVolume = (volume) => {
    sound.setVolume(volume)
    setVolume(volume)
  }
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
    } else {
      setTitle(MSG_NO_STATION)
    }
  }
  const stop = () => {
    sound.stop()
    setPlaying(false)
  }
  
  const _unload = () => {
    sound.unload()
    setUnloaded(true)
  }

  const _onError = (msg) => {
    setErrMsg(msg)
    setUnloaded(true)
    setPlaying(false)
  }

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
