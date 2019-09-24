'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DF_DELTA = 30;
var _state = {
  fromClientX: void 0
};

var _getClientX = function _getClientX(event) {
  var _ref = event || {},
      _ref$changedTouches = _ref.changedTouches,
      changedTouches = _ref$changedTouches === undefined ? [] : _ref$changedTouches;

  return changedTouches[0] ? changedTouches[0].clientX : void 0;
};

var _isSwipeGesture = function _isSwipeGesture(dir, delta, toClientX) {
  return dir === 'L' || dir === 'U' ? _state.fromClientX - toClientX > delta : toClientX - _state.fromClientX > delta;
};

var useSwipeGesture = function useSwipeGesture(_ref2) {
  var onSwipeGesture = _ref2.onSwipeGesture,
      _ref2$dir = _ref2.dir,
      dir = _ref2$dir === undefined ? 'L' : _ref2$dir,
      _ref2$delta = _ref2.delta,
      delta = _ref2$delta === undefined ? DF_DELTA : _ref2$delta;

  if (!_has2.default.TOUCH) {
    return void 0;
  }

  var onTouchStart = (0, _react.useCallback)(function (event) {
    _state.fromClientX = _getClientX(event);
  }, []),
      onTouchEnd = (0, _react.useCallback)(function (event) {
    if (_state.fromClientX && _isSwipeGesture(dir, delta, _getClientX(event))) {
      onSwipeGesture();
      _state.fromClientX = void 0;
    }
  }, []);

  return {
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd
  };
};

exports.default = useSwipeGesture;
//# sourceMappingURL=useSwipeGesture.js.map