'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _useInterval5 = require('../hooks/useInterval');

var _useInterval6 = _interopRequireDefault(_useInterval5);

var _categories = require('../../sound/categories');

var _categories2 = _interopRequireDefault(_categories);

var _InputSlider = require('../zhn/InputSlider');

var _InputSlider2 = _interopRequireDefault(_InputSlider);

var _BtMinus = require('../zhn/BtMinus');

var _BtMinus2 = _interopRequireDefault(_BtMinus);

var _BtPlus = require('../zhn/BtPlus');

var _BtPlus2 = _interopRequireDefault(_BtPlus);

var _HeaderDrawer = require('../drawer/HeaderDrawer');

var _HeaderDrawer2 = _interopRequireDefault(_HeaderDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROW: {
    //display: 'flex',
    //alignItems: 'center',
    //overflow: 'hidden',
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

  var _useInterval = (0, _useInterval6.default)(onIncrease, _isNearMax, volume),
      _useInterval2 = (0, _slicedToArray3.default)(_useInterval, 2),
      runIncrease = _useInterval2[0],
      stopIncrease = _useInterval2[1];

  var _useInterval3 = (0, _useInterval6.default)(onDecrease, _isNearMin, volume),
      _useInterval4 = (0, _slicedToArray3.default)(_useInterval3, 2),
      runDecrease = _useInterval4[0],
      stopDecrease = _useInterval4[1],
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

  return _react2.default.createElement(
    'div',
    { id: 'volume', style: S.ROW },
    _react2.default.createElement(
      'div',
      { style: S.VOLUME },
      _toVolume(volume)
    ),
    _react2.default.createElement(_InputSlider2.default, {
      style: S.SLIDER,
      initValue: volume,
      onChange: setVolume
    }),
    _react2.default.createElement(_BtMinus2.default, (0, _extends3.default)({
      accessKey: '-'
    }, _minusHandlers, {
      onClick: onDecrease
    })),
    _react2.default.createElement('div', { style: S.GAP }),
    _react2.default.createElement(_BtPlus2.default, (0, _extends3.default)({
      accessKey: '+'
    }, _plusHandlers, {
      onClick: onIncrease
    })),
    _react2.default.createElement(_HeaderDrawer2.default, {
      categories: _categories2.default
    })
  );
};

exports.default = _react2.default.memo(RadioVolume);
//# sourceMappingURL=RadioVolume.js.map