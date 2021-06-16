import { FnVoidType } from './types';

import { useEffect, memo } from 'react';
import useInterval from '../hooks/useInterval';

import InputSlider from '../zhn/InputSlider';
import BtMinus from '../zhn/BtMinus';
import BtPlus from '../zhn/BtPlus';
import HeaderDrawer from '../drawer/HeaderDrawer';
import S from './RadioVolumeStyle';

export interface RadioVolumeProps {
  volume: number,
  setVolume: (volume: number) => void,
  onIncrease: FnVoidType, 
  onDecrease: FnVoidType
}

const C = {
  NEAR_MAX: 0.8,
  NEAR_MIN: 0.2
};

const _isNumber = (n: any) => typeof n === 'number'
 && Number.isFinite(n);

const _toVolume = (v: any) => _isNumber(v)
 ? Math.round(v*100)
 : '';

const _crBtHandlers = (run: FnVoidType, stop: FnVoidType) => ({
  onMouseDown: run,
  onMouseUp: stop,
  onTouchStart: run,
  onTouchEnd: stop
});

const _isNearMax = (v: number)  => v > C.NEAR_MAX;
const _isNearMin = (v: number) => v < C.NEAR_MIN;

const RadioVolume = ({ volume, setVolume, onIncrease, onDecrease }: RadioVolumeProps) => {  
  const [runIncrease, stopIncrease] = useInterval(onIncrease, _isNearMax, volume)
  const [runDecrease, stopDecrease] = useInterval(onDecrease, _isNearMin, volume)
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
        step={0.05}
        min={0}
        max={1}        
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
