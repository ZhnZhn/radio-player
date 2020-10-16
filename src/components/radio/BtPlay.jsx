import { Fragment } from 'react'

const S = {
  BT: {
    width: 34,
    height: 34
  },
  SVG: {
    fill: '#fff',
    width: 34,
    height: 34
  }
};

const IconPlay = () => (
  <path d="M12.458 22.667l10-6.5-10-6.5z" />
);
const IconStop = () => (
  <Fragment>
    <path d="M11.5 10h3v13h-3v-13z" />
    <path d="M17.5 10h3v13h-3v-13z" />
  </Fragment>
)

const BtPlay = ({ isPlaying, onPlay, onStop }) => (
  <button style={S.BT} onClick={isPlaying ? onStop : onPlay}>
    <svg viewBox="0 0 32 32" width="100%" height="100%" style={S.SVG}>
      <g>
        { isPlaying ? <IconStop /> : <IconPlay />}
        <path fill="#64e346" d="M16 32c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zM16 2c-7.719 0-14 6.28-14 14s6.281 14 14 14c7.721 0 14-6.28 14-14s-6.279-14-14-14z" />
      </g>
    </svg>
  </button>
);

export default BtPlay
