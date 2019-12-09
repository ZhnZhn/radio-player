"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var S = {
  KEY: {
    textDecoration: 'underline'
  }
};

var CaptionInput = function CaptionInput(_ref) {
  var className = _ref.className,
      rootStyle = _ref.rootStyle,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      accessKey = _ref.accessKey,
      children = _ref.children;

  var _index = caption.toLowerCase().indexOf(accessKey);

  if (accessKey && _index !== -1) {
    var _before = caption.substring(0, _index),
        _key = caption.substring(_index, _index + 1),
        _after = caption.substring(_index + 1);

    return _react["default"].createElement("span", {
      className: className,
      style: rootStyle
    }, _react["default"].createElement("span", null, _before), _react["default"].createElement("span", {
      style: S.KEY
    }, _key), _react["default"].createElement("span", null, _after), children);
  } else {
    return _react["default"].createElement("span", {
      className: className,
      style: rootStyle
    }, caption, children);
  }
};

var _default = CaptionInput;
exports["default"] = _default;
//# sourceMappingURL=CaptionInput.js.map