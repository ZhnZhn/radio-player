"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

var DF_DELTA = 30;
var _state = {
  fromClientX: void 0
};

var _getClientX = function _getClientX(event) {
  var _ref = event || {},
      _ref$changedTouches = _ref.changedTouches,
      changedTouches = _ref$changedTouches === void 0 ? [] : _ref$changedTouches;

  return changedTouches[0] ? changedTouches[0].clientX : void 0;
};

var _isSwipeGesture = function _isSwipeGesture(dir, delta, toClientX) {
  return dir === 'L' || dir === 'U' ? _state.fromClientX - toClientX > delta : toClientX - _state.fromClientX > delta;
};

var useSwipeGesture = function useSwipeGesture(_ref2) {
  var onSwipeGesture = _ref2.onSwipeGesture,
      _ref2$dir = _ref2.dir,
      dir = _ref2$dir === void 0 ? 'L' : _ref2$dir,
      _ref2$delta = _ref2.delta,
      delta = _ref2$delta === void 0 ? DF_DELTA : _ref2$delta;
  var onTouchStart = (0, _react.useCallback)(function (event) {
    _state.fromClientX = _getClientX(event);
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  ,
      onTouchEnd = (0, _react.useCallback)(function (event) {
    if (_state.fromClientX && _isSwipeGesture(dir, delta, _getClientX(event))) {
      onSwipeGesture();
      _state.fromClientX = void 0;
    }
  }, []);
  /*eslint-enable react-hooks/exhaustive-deps */

  if (!_has["default"].TOUCH) {
    return void 0;
  }

  return {
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd
  };
};

var _default = useSwipeGesture;
exports["default"] = _default;
//# sourceMappingURL=useSwipeGesture.js.map