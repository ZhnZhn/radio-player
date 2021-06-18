import type { CSSProperties } from './types';
import type { MouseEvent, KeyboardEvent } from '../uiApi';

import { useRef, useState, useEffect } from '../uiApi';

import useBool from '../hooks/useBool';
import has from '../has';
import S from './InputSliderStyle';

interface InputSliderProps {
  style?: CSSProperties
  initValue: number,
  step: number,
  min: number,
  max: number,
  onChange?: (value: number) => void
}

type SetValueFromPositionType = (event: MouseEvent) => void

const _isNaN = Number.isNaN
, _noopFn = () => {}
, hasTouch = has.TOUCH
, EVENT_NAME_MOVE = hasTouch ? 'touchmove' : 'mousemove'
, EVENT_NAME_UP = hasTouch ? 'touchend' : 'mouseup'
, _checkValueInMinMax = (
    min: number, 
    max: number, 
    value: number
  ) => value > max
    ? max
    : value < min ? min : value
, _toPercent = (value: number, min: number, max: number) => {
    const _percent = (value - min) / (max - min);
    return _isNaN(_percent) ? 0 : Math.round(_percent*100);
}
, _crWidthStyle = (percent: number): CSSProperties => ({
    width: `calc(${percent}%)`
})
, _crLeftStyle = (percent: number): CSSProperties => ({
   left: `${percent}%`
})
, _getClienX = hasTouch
  ? evt => (((evt || {}).touches || [])[0] || {}).clientX || 0
  : evt => evt.clientX
, _isUp = (keyCode: number) => keyCode === 39 || keyCode === 38
, _isDown = (keyCode: number) => keyCode === 37 || keyCode === 40
, _calcNewValueByKeyCode = (
  value: number, 
  step: number, 
  keyCode: number
  ) => _isUp(keyCode)
    ? value + step
    : _isDown(keyCode) ? value - step : void 0;

const _useMouseDown = (setValueFromPosition: SetValueFromPositionType) => {
  const [dragged, setDraggedTrue, setDraggedFalse] = useBool(false)
  , _refDragRunning = useRef(false)
  , _hDragMouseMove = (event: MouseEvent) => {
    if (_refDragRunning.current) {
      return;
    }
    _refDragRunning.current = true;
    requestAnimationFrame(() => {
      _refDragRunning.current = false;
      setValueFromPosition(event)
    })
  }
  , _hDragMouseUp = () => {
     document.removeEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
     document.removeEventListener(EVENT_NAME_UP, _hDragMouseUp)
     setDraggedFalse()
  },
  _hMouseDown = (event: MouseEvent) => {
    // Cancel text selection
    if (!hasTouch) {
      event.preventDefault()
    }
    document.addEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
    document.addEventListener(EVENT_NAME_UP, _hDragMouseUp)
    setDraggedTrue()
  };
  return [dragged, _hMouseDown];
}
, _calcPositionFromEvent = (
  event: MouseEvent, 
  trackElement: HTMLDivElement
) => {
  const _trackOffset = trackElement.getBoundingClientRect()['left']
  return _getClienX(event) - _trackOffset;
};

const InputSlider = ({
  style,
  initValue,
  step,
  min,
  max,
  onChange=_noopFn
}: InputSliderProps) => {
  const _refTrack = useRef<HTMLDivElement>(null)
  , [hovered, setHoveredTrue, setHoveredFalse] = useBool(false)
  , [value, setValue] = useState(initValue)

  , _updateValue = (newValue: number) => {
    const _newValue = _checkValueInMinMax(min, max, newValue);
    setValue(_newValue)
    onChange(_newValue)
  }
  , _hKeyDown = (evt: KeyboardEvent) => {
    const { keyCode } = evt
    , _newValue = _calcNewValueByKeyCode(value, step, keyCode);
    if (_newValue != null) {
      evt.preventDefault()
      _updateValue(_newValue)
    }
  }  
  , _setValueFromPosition: SetValueFromPositionType = (event) => {
    const _trackEl = _refTrack.current
    if (_trackEl) {
     const positionMax = _trackEl.clientWidth;
     let position = _calcPositionFromEvent(event, _trackEl);
     if (position < 0) {
       position = 0;
     } else if (position > positionMax) {
       position = positionMax
     }
 
     let v;
     v = position/positionMax * (max - min)
     v = Math.round(v / step) * step + min
     v = parseFloat(v.toFixed(2))
 
     _updateValue(v)
    }
  }
  , [dragged, _hMouseDown] = _useMouseDown(_setValueFromPosition);

  useEffect(() => setValue(initValue), [initValue])

  const _sliderHandlers = hasTouch ? {
     onTouchStart: _hMouseDown
  } : {
    onMouseDown: _hMouseDown,
    onMouseEnter: setHoveredTrue,
    onMouseLeave: setHoveredFalse
  }, _btHandlers = hasTouch ? void 0 : {
      onFocus: setHoveredTrue,
      onKeyDown: _hKeyDown,
      onBlur: setHoveredFalse
  }, _lineAfterStyle = hovered
        ? {...S.LINE_AFTER, ...S.LINE_HOVERED}
        : S.LINE_AFTER
  , _circleStyle = dragged ? S.CIRCLE_DRAGGED : null
  , _emberStyle = dragged ? S.EMBER : null
  , _circleInnerEl = (hovered || dragged)
        ? <div style={{ ...S.CIRCLE_INNER_EL, ..._emberStyle }} />
        : null
  , _percent = _toPercent(value, min, max)
  , _widthBeforeStyle = _crWidthStyle(_percent)
  , _widthAfterStyle = _crWidthStyle(100 - _percent)
  , _leftStyle = _crLeftStyle(_percent);

  return (
    <div
      style={{...S.ROOT, ...style}}
      {..._sliderHandlers}      
    >
      <div
         ref={_refTrack}
         style={S.ROOT_LINE}
      >
        <div style={{...S.LINE_BEFORE, ..._widthBeforeStyle }} />
        <div style={{..._lineAfterStyle, ..._widthAfterStyle }} />
        <input
          type="hidden"
          step={step}
          min={min}
          max={max}
          value={value}
          required={true}
        />
        <div
           role="slider"
           tabIndex={0}
           aria-valuenow={value}
           aria-valuemin={min}
           aria-valuemax={max}
           aria-orientation="horizontal"
           aria-labelledby="discrete-slider-custom"
           style={{...S.ROOT_CIRCLE, ..._circleStyle, ..._leftStyle }}
           {..._btHandlers}
        >
          <div style={{ ...S.CIRCLE_INNER, ..._circleStyle}} >
            {_circleInnerEl}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputSlider
