import React from 'react'

import BtPlay from '../zhn/BtPlay'

const RadioCommand = ({ isPlaying, onPlay, onStop }) => (
  <div>
    <BtPlay
      isPlaying={isPlaying}
      onPlay={onPlay}
      onStop={onStop}
    />
  </div>
)

export default RadioCommand
