import { useEffect } from '../uiApi';
import useInterval from '../hooks/useInterval';

import { HK_INCREASE_VOLUME, HK_DECREASE_VOLUME } from '../hotkeys/hotkeys';

import InputSlider from '../zhn/InputSlider';
import BtMinus from '../zhn/BtMinus';
import BtPlus from '../zhn/BtPlus';
import HeaderDrawer from '../drawer/HeaderDrawer';
import S from './RadioVolumeStyle';

export interface RadioVolumeProps {
  volume: number,
  setVolume: (volume: number) => void,
  onIncrease: () => void, 
  onDecrease: () => void
}

const NEAR_MAX = 0.8
, NEAR_MIN = 0.2;


const _isNumber = (n: unknown): n is number => typeof n === 'number'
 && n-n === 0;

const _toVolume = (v: unknown) => _isNumber(v)
 ? Math.round(v*100)
 : '';

const _crBtHandlers = (
  run: () => void, 
  stop: () => void
) => ({
  onMouseDown: run,
  onMouseUp: stop,
  onTouchStart: run,
  onTouchEnd: stop
});

const _isNearMax = (v: number)  => v > NEAR_MAX;
const _isNearMin = (v: number) => v < NEAR_MIN;

const RadioVolume = ({ 
  volume, 
  setVolume, 
  onIncrease, 
  onDecrease 
}: RadioVolumeProps) => {  
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
        hotKey={HK_DECREASE_VOLUME}
        ariaLabel="Increase Volume"
        {..._minusHandlers}
        onClick={onDecrease}
      />
      <div style={S.GAP} />
      <BtPlus
        hotKey={HK_INCREASE_VOLUME}
        ariaLabel="Decrease Volume"
        {..._plusHandlers}
        onClick={onIncrease}
      />
      <HeaderDrawer />
    </div>
  );
}

export default RadioVolume
