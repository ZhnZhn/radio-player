import { useRef, useState, useEffect } from 'react';

import useBool from '../hooks/useBool';
import has from '../has';

//import PropTypes from "prop-types";

const S = {
  ROOT: {
    position: 'relative',
    width: '100%',
    height: 18,
    marginTop: 8,
    marginBottom: 8,
    userSelect : 'none',
    cursor: 'default'
  },
  ROOT_LINE : {
    position: 'absolute',
    top: 8,
    left: 0,
    width: '100%',
    height: 2
  },
  LINE_BEFORE : {
    position: 'absolute',
    left: 0,
    width: 'calc(15%)',
    height: '100%',
    marginRight: 6,
    backgroundColor: 'rgb(0, 188, 212)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  LINE_AFTER : {
    position: 'absolute',
    right: 0,
    width: 'calc(85%)',
    height: '100%',
    marginLeft: 6,
    backgroundColor: 'rgb(189, 189, 189)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  LINE_HOVERED : {
    backgroundColor: 'rgb(158, 158, 158)',
  },
  ROOT_CIRCLE : {
    boxSizing: 'borderBox',
    zIndex: '1',
    position: 'absolute',
    top: 0,
    left: '15%',
    width: 12,
    height: 12,
    cursor: 'pointer',
    pointerEvents: 'inherit',
    margin: '1px 0px 0px',
    backgroundColor: 'rgb(0, 188, 212)',
    backgroundClip: 'padding-box',
    border: '0px solid transparent',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    outline: 'none',
    transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  CIRCLE_DRAGGED : {
    width: 20,
    height: 20
  },
  CIRCLE_INNER : {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 12,
    height: 12,
    overflow: 'visible'
  },
  CIRCLE_INNER_EL : {
    position: 'absolute',
    top: -12,
    left: -12,
    width: '300%',
    height: 36,
    borderRadius: '50%',
    //opacity: '0.16',
    backgroundColor: 'rgba(0, 188, 212, 0.16)',
    transform: 'scale(1)'
  },
  EMBER : {
    top: -12,
    left: -12,
    width: '220%',
    height: 44,
    border: '1px solid #4caf50'
  }
};

const _isNaN = Number.isNaN
, _noopFn = () => {}
, EVENT_NAME_MOVE = hasTouch ? 'touchmove' : 'mousemove'
, EVENT_NAME_UP = hasTouch ? 'touchend' : 'mouseup'
, _checkValueInMinMax = (min, max, value) => value > max
    ? max
    : value < min ? min : value
, _toPercent = (value, min, max) => {
    const _percent = (value - min) / (max - min);
    return _isNaN(_percent) ? 0 : Math.round(_percent*100);
}
, _crWidthStyle = percent => ({
    width: `calc(${percent}%)`
})
, _crLeftStyle = percent => ({
   left: `${percent}%`
})
, hasTouch = has.touch
, _getClienX = hasTouch
  ? evt => (((evt || {}).touches || [])[0] || {}).clientX || 0
  : evt => evt.clientX
, _isUp = keyCode => keyCode === 39 || keyCode === 38
, _isDown = keyCode => keyCode === 37 || keyCode === 40
, _calcNewValueByKeyCode = (value, step, keyCode) => _isUp(keyCode)
    ? value + step
    : _isDown(keyCode) ? value - step : void 0;

const _useMouseDown = (setValueFromPosition) => {
  const [dragged, setDraggedTrue, setDraggedFalse] = useBool(false)
  , _refDragRunning = useRef(false)
  , _hDragMouseMove = (event) => {
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
  _hMouseDown = (event) => {
    // Cancel text selection
    if (!hasTouch) {
      event.preventDefault()
    }
    document.addEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
    document.addEventListener(EVENT_NAME_UP, _hDragMouseUp)
    setDraggedTrue()
  };
  return [dragged, _hMouseDown];
};

const InputSlider = ({
  style,
  initValue,
  step,
  min,
  max,
  onChange=_noopFn
}) => {
  const _refTrack = useRef()
  , [hovered, setHoveredTrue, setHoveredFalse] = useBool(false)
  , [value, setValue] = useState(initValue)

  , _updateValue = (newValue) => {
    const _newValue = _checkValueInMinMax(min, max, newValue);
    setValue(_newValue)
    onChange(_newValue)
  }
  , _hKeyDown = (evt) => {
    const { keyCode } = evt
    , _newValue = _calcNewValueByKeyCode(value, step, keyCode);
    if (_newValue != null) {
      evt.preventDefault()
      _updateValue(_newValue)
    }
  }
  , _calcPositionFromEvent = (event) => {
    const _trackOffset = _refTrack.current.getBoundingClientRect()['left']
    return _getClienX(event) - _trackOffset;
  }
  , _setValueFromPosition = (event) => {
    const positionMax = _refTrack.current.clientWidth;
    let position = _calcPositionFromEvent(event);
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

/*
static propTypes = {
  style: PropTypes.object,
  initValue: PropTypes.number.isRequired,
  step : PropTypes.number.isRequired,
  min : PropTypes.number.isRequired,
  max : PropTypes.number.isRequired,
  onChange : PropTypes.func
}
*/

export default InputSlider
