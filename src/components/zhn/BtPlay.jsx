import { Fragment } from 'react'

import Button from './CircleButton'

const IconPlay = (
  <path d="M12.458 22.667l10-6.5-10-6.5z" />
);
const IconStop = (
  <Fragment>
    <path d="M11.5 10h3v13h-3v-13z" />
    <path d="M17.5 10h3v13h-3v-13z" />
  </Fragment>
)

const BtPlay = ({ isPlaying, onPlay, onStop }) => {
  const _onClick = isPlaying ? onStop : onPlay
  , _svgIconEl = isPlaying ? IconStop : IconPlay
  , accessKey = isPlaying ? 's' : 'p';
  return (
    <Button accessKey={accessKey} onClick={_onClick}>
      {_svgIconEl}
    </Button>
  );
}

export default BtPlay
