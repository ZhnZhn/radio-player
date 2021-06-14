import CircleButton from './CircleButton';

interface BtPlayProps {
  isPlaying: boolean,
  onPlay: () => void,
  onStop: () => void 
}

const IconPlay = (
  <path d="M12.458 22.667l10-6.5-10-6.5z" />
);
const IconStop = (
  <>
    <path d="M11.5 10h3v13h-3v-13z" />
    <path d="M17.5 10h3v13h-3v-13z" />
  </>
)

const BtPlay = ({ isPlaying, onPlay, onStop }: BtPlayProps) => {
  const _onClick = isPlaying ? onStop : onPlay
  , _svgIconEl = isPlaying ? IconStop : IconPlay
  , accessKey = isPlaying ? 's' : 'p';
  return (
    <CircleButton accessKey={accessKey} onClick={_onClick}>
      {_svgIconEl}
    </CircleButton>
  );
}

export default BtPlay
