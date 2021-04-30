"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useBool3 = _interopRequireDefault(require("../hooks/useBool"));

var _has = _interopRequireDefault(require("../has"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var S = {
  ROOT: {
    position: 'relative',
    width: '100%',
    height: 18,
    marginTop: 8,
    marginBottom: 8,
    userSelect: 'none',
    cursor: 'default'
  },
  ROOT_LINE: {
    position: 'absolute',
    top: 8,
    left: 0,
    width: '100%',
    height: 2
  },
  LINE_BEFORE: {
    position: 'absolute',
    left: 0,
    width: 'calc(15%)',
    height: '100%',
    marginRight: 6,
    backgroundColor: 'rgb(0, 188, 212)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  LINE_AFTER: {
    position: 'absolute',
    right: 0,
    width: 'calc(85%)',
    height: '100%',
    marginLeft: 6,
    backgroundColor: 'rgb(189, 189, 189)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  LINE_HOVERED: {
    backgroundColor: 'rgb(158, 158, 158)'
  },
  ROOT_CIRCLE: {
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
  CIRCLE_DRAGGED: {
    width: 20,
    height: 20
  },
  CIRCLE_INNER: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 12,
    height: 12,
    overflow: 'visible'
  },
  CIRCLE_INNER_EL: {
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
  EMBER: {
    top: -12,
    left: -12,
    width: '220%',
    height: 44,
    border: '1px solid #4caf50'
  }
};

var _isNaN = Number.isNaN,
    _noopFn = function _noopFn() {},
    EVENT_NAME_MOVE = hasTouch ? 'touchmove' : 'mousemove',
    EVENT_NAME_UP = hasTouch ? 'touchend' : 'mouseup',
    _checkValueInMinMax = function _checkValueInMinMax(min, max, value) {
  return value > max ? max : value < min ? min : value;
},
    _toPercent = function _toPercent(value, min, max) {
  var _percent = (value - min) / (max - min);

  return _isNaN(_percent) ? 0 : Math.round(_percent * 100);
},
    _crWidthStyle = function _crWidthStyle(percent) {
  return {
    width: "calc(" + percent + "%)"
  };
},
    _crLeftStyle = function _crLeftStyle(percent) {
  return {
    left: percent + "%"
  };
},
    hasTouch = _has["default"].touch,
    _getClienX = hasTouch ? function (evt) {
  return (((evt || {}).touches || [])[0] || {}).clientX || 0;
} : function (evt) {
  return evt.clientX;
},
    _isUp = function _isUp(keyCode) {
  return keyCode === 39 || keyCode === 38;
},
    _isDown = function _isDown(keyCode) {
  return keyCode === 37 || keyCode === 40;
},
    _calcNewValueByKeyCode = function _calcNewValueByKeyCode(value, step, keyCode) {
  return _isUp(keyCode) ? value + step : _isDown(keyCode) ? value - step : void 0;
};

var _useMouseDown = function _useMouseDown(setValueFromPosition) {
  var _useBool = (0, _useBool3["default"])(false),
      dragged = _useBool[0],
      setDraggedTrue = _useBool[1],
      setDraggedFalse = _useBool[2],
      _refDragRunning = (0, _react.useRef)(false),
      _hDragMouseMove = function _hDragMouseMove(event) {
    if (_refDragRunning.current) {
      return;
    }

    _refDragRunning.current = true;
    requestAnimationFrame(function () {
      _refDragRunning.current = false;
      setValueFromPosition(event);
    });
  },
      _hDragMouseUp = function _hDragMouseUp() {
    document.removeEventListener(EVENT_NAME_MOVE, _hDragMouseMove);
    document.removeEventListener(EVENT_NAME_UP, _hDragMouseUp);
    setDraggedFalse();
  },
      _hMouseDown = function _hMouseDown(event) {
    // Cancel text selection
    if (!hasTouch) {
      event.preventDefault();
    }

    document.addEventListener(EVENT_NAME_MOVE, _hDragMouseMove);
    document.addEventListener(EVENT_NAME_UP, _hDragMouseUp);
    setDraggedTrue();
  };

  return [dragged, _hMouseDown];
};

var InputSlider = function InputSlider(_ref) {
  var style = _ref.style,
      initValue = _ref.initValue,
      step = _ref.step,
      min = _ref.min,
      max = _ref.max,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? _noopFn : _ref$onChange;

  var _refTrack = (0, _react.useRef)(),
      _useBool2 = (0, _useBool3["default"])(false),
      hovered = _useBool2[0],
      setHoveredTrue = _useBool2[1],
      setHoveredFalse = _useBool2[2],
      _useState = (0, _react.useState)(initValue),
      value = _useState[0],
      setValue = _useState[1],
      _updateValue = function _updateValue(newValue) {
    var _newValue = _checkValueInMinMax(min, max, newValue);

    setValue(_newValue);
    onChange(_newValue);
  },
      _hKeyDown = function _hKeyDown(evt) {
    var keyCode = evt.keyCode,
        _newValue = _calcNewValueByKeyCode(value, step, keyCode);

    if (_newValue != null) {
      evt.preventDefault();

      _updateValue(_newValue);
    }
  },
      _calcPositionFromEvent = function _calcPositionFromEvent(event) {
    var _trackOffset = _refTrack.current.getBoundingClientRect()['left'];

    return _getClienX(event) - _trackOffset;
  },
      _setValueFromPosition = function _setValueFromPosition(event) {
    var positionMax = _refTrack.current.clientWidth;

    var position = _calcPositionFromEvent(event);

    if (position < 0) {
      position = 0;
    } else if (position > positionMax) {
      position = positionMax;
    }

    var v;
    v = position / positionMax * (max - min);
    v = Math.round(v / step) * step + min;
    v = parseFloat(v.toFixed(2));

    _updateValue(v);
  },
      _useMouseDown2 = _useMouseDown(_setValueFromPosition),
      dragged = _useMouseDown2[0],
      _hMouseDown = _useMouseDown2[1];

  (0, _react.useEffect)(function () {
    return setValue(initValue);
  }, [initValue]);

  var _sliderHandlers = hasTouch ? {
    onTouchStart: _hMouseDown
  } : {
    onMouseDown: _hMouseDown,
    onMouseEnter: setHoveredTrue,
    onMouseLeave: setHoveredFalse
  },
      _btHandlers = hasTouch ? void 0 : {
    onFocus: setHoveredTrue,
    onKeyDown: _hKeyDown,
    onBlur: setHoveredFalse
  },
      _lineAfterStyle = hovered ? (0, _extends2["default"])({}, S.LINE_AFTER, S.LINE_HOVERED) : S.LINE_AFTER,
      _circleStyle = dragged ? S.CIRCLE_DRAGGED : null,
      _emberStyle = dragged ? S.EMBER : null,
      _circleInnerEl = hovered || dragged ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: (0, _extends2["default"])({}, S.CIRCLE_INNER_EL, _emberStyle)
  }) : null,
      _percent = _toPercent(value, min, max),
      _widthBeforeStyle = _crWidthStyle(_percent),
      _widthAfterStyle = _crWidthStyle(100 - _percent),
      _leftStyle = _crLeftStyle(_percent);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    style: (0, _extends2["default"])({}, S.ROOT, style)
  }, _sliderHandlers, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: _refTrack,
      style: S.ROOT_LINE,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: (0, _extends2["default"])({}, S.LINE_BEFORE, _widthBeforeStyle)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: (0, _extends2["default"])({}, _lineAfterStyle, _widthAfterStyle)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "hidden",
        step: step,
        min: min,
        max: max,
        value: value,
        required: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
        role: "slider",
        tabIndex: 0,
        "aria-valuenow": value,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-orientation": "horizontal",
        "aria-labelledby": "discrete-slider-custom",
        style: (0, _extends2["default"])({}, S.ROOT_CIRCLE, _circleStyle, _leftStyle)
      }, _btHandlers, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: (0, _extends2["default"])({}, S.CIRCLE_INNER, _circleStyle),
          children: _circleInnerEl
        })
      }))]
    })
  }));
};
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


var _default = InputSlider;
exports["default"] = _default;
//# sourceMappingURL=InputSlider.js.map