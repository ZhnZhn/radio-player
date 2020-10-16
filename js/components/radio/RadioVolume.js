"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _useInterval3 = _interopRequireDefault(require("../hooks/useInterval"));

var _InputSlider = _interopRequireDefault(require("../zhn/InputSlider"));

var _BtMinus = _interopRequireDefault(require("../zhn/BtMinus"));

var _BtPlus = _interopRequireDefault(require("../zhn/BtPlus"));

var _HeaderDrawer = _interopRequireDefault(require("../drawer/HeaderDrawer"));

var S = {
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
};
var C = {
  NEAR_MAX: 0.8,
  NEAR_MIN: 0.2
};

var _isNumber = function _isNumber(n) {
  return typeof n === 'number' && Number.isFinite(n);
};

var _toVolume = function _toVolume(v) {
  return _isNumber(v) ? Math.round(v * 100) : '';
};

var _crBtHandlers = function _crBtHandlers(run, stop) {
  return {
    onMouseDown: run,
    onMouseUp: stop,
    onTouchStart: run,
    onTouchEnd: stop
  };
};

var RadioVolume = function RadioVolume(_ref) {
  var volume = _ref.volume,
      setVolume = _ref.setVolume,
      onIncrease = _ref.onIncrease,
      onDecrease = _ref.onDecrease;

  var _isNearMax = function _isNearMax(v) {
    return v > C.NEAR_MAX;
  };

  var _isNearMin = function _isNearMin(v) {
    return v < C.NEAR_MIN;
  };

  var _useInterval = (0, _useInterval3["default"])(onIncrease, _isNearMax, volume),
      runIncrease = _useInterval[0],
      stopIncrease = _useInterval[1];

  var _useInterval2 = (0, _useInterval3["default"])(onDecrease, _isNearMin, volume),
      runDecrease = _useInterval2[0],
      stopDecrease = _useInterval2[1],
      _runDecrease = function _runDecrease() {
    if (volume !== 0) {
      runDecrease();
    }
  },
      _runIncrease = function _runIncrease() {
    if (volume !== 100) {
      runIncrease();
    }
  },
      _minusHandlers = _crBtHandlers(_runDecrease, stopDecrease),
      _plusHandlers = _crBtHandlers(_runIncrease, stopIncrease);

  (0, _react.useEffect)(function () {
    if (volume === 0) {
      stopDecrease();
    }

    if (volume === 100) {
      stopIncrease();
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "volume",
    style: S.ROW,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S.VOLUME,
      children: _toVolume(volume)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSlider["default"], {
      style: S.SLIDER,
      initValue: volume,
      onChange: setVolume
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtMinus["default"], (0, _extends2["default"])({
      accessKey: "-"
    }, _minusHandlers, {
      onClick: onDecrease
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S.GAP
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtPlus["default"], (0, _extends2["default"])({
      accessKey: "+"
    }, _plusHandlers, {
      onClick: onIncrease
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderDrawer["default"], {})]
  });
};

var _default = /*#__PURE__*/(0, _react.memo)(RadioVolume);

exports["default"] = _default;
//# sourceMappingURL=RadioVolume.js.map