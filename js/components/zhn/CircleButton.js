"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _has = _interopRequireDefault(require("../has"));

var CL = 'bt-circle';

var CircleButton = function CircleButton(_ref) {
  var accessKey = _ref.accessKey,
      onMouseDown = _ref.onMouseDown,
      onMouseUp = _ref.onMouseUp,
      onTouchStart = _ref.onTouchStart,
      onTouchEnd = _ref.onTouchEnd,
      onClick = _ref.onClick,
      children = _ref.children;

  var _handlers = _has["default"].TOUCH && onTouchStart ? {
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd
  } : {
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  };

  return _react["default"].createElement("button", (0, _extends2["default"])({
    className: CL,
    accessKey: accessKey
  }, _handlers, {
    onClick: onClick
  }), _react["default"].createElement("svg", {
    viewBox: "0 0 34 34",
    width: "100%",
    height: "100%"
  }, _react["default"].createElement("g", null, children)));
};

var _default = CircleButton;
exports["default"] = _default;
//# sourceMappingURL=CircleButton.js.map