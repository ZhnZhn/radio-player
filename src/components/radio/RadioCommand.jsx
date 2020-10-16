import BtPlay from '../zhn/BtPlay'

const RadioCommand = ({ isPlaying, onPlay, onPause }) => (
  <div>
    <BtPlay
      isPlaying={isPlaying}
      onPlay={onPlay}
      onStop={onPause}
    />
  </div>
)

export default RadioCommand
