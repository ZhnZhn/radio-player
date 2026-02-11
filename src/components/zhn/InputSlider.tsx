import type { 
  CSSProperties,
  MouseEvent, 
  TouchEvent,  
  KeyboardEvent,
  MouseOrTouchEvent,
  MouseEventHandler,
  TouchEventHandler
} from '../types';

import { useRef } from '../uiApi';

import useBool from '../hooks/useBool';
import useInitialValue from '../hooks/useInitialValue';
import { HAS_TOUCH_EVENT } from '../has';
import {
  S_ROOT,
  S_ROOT_CIRCLE,
  S_CIRCLE_DRAGGED,
  S_CIRCLE_INNER,
  S_CIRCLE_INNER_EL,
  S_ROOT_LINE,
  S_LINE_HOVERED,
  S_LINE_AFTER,
  S_LINE_BEFORE,
  S_EMBER
} from './InputSliderStyle';

interface InputSliderProps {
  style?: CSSProperties
  initialValue: number,
  step: number,
  min: number,
  max: number,
  onChange?: (value: number) => void
}

type SetValueFromPositionType = (evt: MouseOrTouchEvent) => void

const _isNaN = Number.isNaN
, _noopFn = () => {}
, EVENT_NAME_MOVE =  HAS_TOUCH_EVENT ? 'touchmove' : 'mousemove'
, EVENT_NAME_UP = HAS_TOUCH_EVENT ? 'touchend' : 'mouseup'
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
, _getClienX = HAS_TOUCH_EVENT
  ? (evt: MouseOrTouchEvent) => (((evt as unknown as TouchEvent || {}).touches || [])[0] || {}).clientX || 0
  : (evt: MouseOrTouchEvent) => (evt as unknown as MouseEvent).clientX
, _isUp = (keyCode: number) => keyCode === 39 || keyCode === 38
, _isDown = (keyCode: number) => keyCode === 37 || keyCode === 40
, _calcNewValueByKeyCode = (
  value: number, 
  step: number, 
  keyCode: number
  ) => _isUp(keyCode)
    ? value + step
    : _isDown(keyCode) ? value - step : void 0;

const useMouseDown = (setValueFromPosition: SetValueFromPositionType) => {
  const [dragged, setDraggedTrue, setDraggedFalse] = useBool(false)
  , _refDragRunning = useRef(false)
  , _hDragMouseMove = (evt: MouseOrTouchEvent) => {
    if (_refDragRunning.current) {
      return;
    }
    _refDragRunning.current = true;
    requestAnimationFrame(() => {
      _refDragRunning.current = false;
      setValueFromPosition(evt)
    })
  }
  , _hDragMouseUp = () => {
     document.removeEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
     document.removeEventListener(EVENT_NAME_UP, _hDragMouseUp)
     setDraggedFalse()
  },
  _hMouseDown = (event: MouseEvent) => {
    // Cancel text selection
    if (!HAS_TOUCH_EVENT) {
      event.preventDefault()
    }
    document.addEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
    document.addEventListener(EVENT_NAME_UP, _hDragMouseUp)
    setDraggedTrue()
  };
  return [dragged, _hMouseDown];
}
, _calcPositionFromEvent = (
  event: MouseOrTouchEvent, 
  trackElement: HTMLDivElement
) => {
  const _trackOffset = trackElement.getBoundingClientRect()['left']
  return _getClienX(event) - _trackOffset;
};

const InputSlider = ({
  style,
  initialValue,
  step,
  min,
  max,
  onChange=_noopFn
}: InputSliderProps) => {
  const _refTrack = useRef<HTMLDivElement>(null)
  , [hovered, setHoveredTrue, setHoveredFalse] = useBool(false)
  , [value, setValue] = useInitialValue(initialValue)

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
  , _setValueFromPosition: SetValueFromPositionType = (evt) => {
    const _trackEl = _refTrack.current
    if (_trackEl) {
     const positionMax = _trackEl.clientWidth;
     let position = _calcPositionFromEvent(evt, _trackEl);
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
  , [dragged, _hMouseDown] = useMouseDown(_setValueFromPosition);
  
  const _sliderHandlers = HAS_TOUCH_EVENT ? {
     onTouchStart: _hMouseDown as unknown as TouchEventHandler<HTMLDivElement>
  } : {
    onMouseDown: _hMouseDown as unknown as MouseEventHandler<HTMLDivElement>,
    onMouseEnter: setHoveredTrue,
    onMouseLeave: setHoveredFalse
  }, _btHandlers = HAS_TOUCH_EVENT ? void 0 : {
      onFocus: setHoveredTrue,
      onKeyDown: _hKeyDown,
      onBlur: setHoveredFalse
  }, _lineAfterStyle = hovered
        ? {...S_LINE_AFTER, ...S_LINE_HOVERED}
        : S_LINE_AFTER
  , _circleStyle = dragged ? S_CIRCLE_DRAGGED : null
  , _emberStyle = dragged ? S_EMBER : null
  , _circleInnerEl = (hovered || dragged)
        ? <div style={{ ...S_CIRCLE_INNER_EL, ..._emberStyle }} />
        : null
  , _percent = _toPercent(value, min, max)
  , _widthBeforeStyle = _crWidthStyle(_percent)
  , _widthAfterStyle = _crWidthStyle(100 - _percent)
  , _leftStyle = _crLeftStyle(_percent);

  return (
    <div
      style={{...S_ROOT, ...style}}
      {..._sliderHandlers}      
    >
      <div
         ref={_refTrack}
         style={S_ROOT_LINE}
      >
        <div style={{...S_LINE_BEFORE, ..._widthBeforeStyle }} />
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
           style={{...S_ROOT_CIRCLE, ..._circleStyle, ..._leftStyle }}
           {..._btHandlers}
        >
          <div style={{ ...S_CIRCLE_INNER, ..._circleStyle}} >
            {_circleInnerEl}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputSlider
