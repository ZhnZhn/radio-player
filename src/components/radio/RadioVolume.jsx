import { useEffect, memo } from 'react'
import useInterval from '../hooks/useInterval'

import InputSlider from '../zhn/InputSlider'
import BtMinus from '../zhn/BtMinus'
import BtPlus from '../zhn/BtPlus'
import HeaderDrawer from '../drawer/HeaderDrawer'

const S = {
  ROW: {
    height: 35,
    transition: 'height 0.3s ease-out'
  },
  SLIDER: {
    display: 'inline-block',
    width: 200,
    maxWidth: 'calc(100vw - 210px)',
    marginRight: 16
  },

  VOLUME: {
    position: 'relative',
    top: -10,
    display: 'inline-block',
    color: '#00bcd4',
    width: 46,
    paddingLeft: 5,
    fontSize: 22,
    fontWeight: 400
  },
  GAP: {
    display: 'inline-block',
    width: 12
  }
}

const C = {
  NEAR_MAX: 0.8,
  NEAR_MIN: 0.2
};

const _isNumber = n => typeof n === 'number'
 && Number.isFinite(n);

const _toVolume = v => _isNumber(v)
 ? Math.round(v*100)
 : '';

const _crBtHandlers = ( run, stop ) => ({
  onMouseDown: run,
  onMouseUp: stop,
  onTouchStart: run,
  onTouchEnd: stop
});

const RadioVolume = ({ volume, setVolume, onIncrease, onDecrease }) => {
  const _isNearMax = v  => v > C.NEAR_MAX;
  const _isNearMin = v => v < C.NEAR_MIN;
  const [ runIncrease, stopIncrease ] = useInterval(onIncrease, _isNearMax, volume)
  const [ runDecrease, stopDecrease ] = useInterval(onDecrease, _isNearMin, volume)
  , _runDecrease = () => {
    if (volume !== 0) { runDecrease() }
  }
  , _runIncrease = () => {
    if (volume !== 100) { runIncrease() }
  }
  , _minusHandlers = _crBtHandlers(_runDecrease, stopDecrease)
  , _plusHandlers = _crBtHandlers(_runIncrease, stopIncrease);

  useEffect(() => {
      if (volume === 0) { stopDecrease() }
      if (volume === 100) { stopIncrease() }
  })

  return (
    <div id="volume" style={S.ROW} >
      <div style={S.VOLUME}>
        {_toVolume(volume)}
      </div>
      <InputSlider
        style={S.SLIDER}
        initValue={volume}
        onChange={setVolume}
      />
      <BtMinus
        accessKey="-"
        {..._minusHandlers}
        onClick={onDecrease}
      />
      <div style={S.GAP} />
      <BtPlus
        accessKey="+"
        {..._plusHandlers}
        onClick={onIncrease}
      />
      <HeaderDrawer />
    </div>
  );
}

export default memo(RadioVolume)
