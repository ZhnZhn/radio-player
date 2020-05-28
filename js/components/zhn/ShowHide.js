"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var CL_SHOW_POPUP = 'show-popup';
var S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  }
};

var ShowHide = function ShowHide(_ref) {
  var isShow = _ref.isShow,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children;

  var _styleShow = isShow ? S.SHOW : S.HIDE,
      _classShow = isShow ? CL_SHOW_POPUP : '',
      _className = className ? className + " " + _classShow : _classShow !== '' ? _classShow : void 0;

  return (/*#__PURE__*/_react["default"].createElement("div", {
      className: _className,
      style: (0, _extends2["default"])({}, style, _styleShow)
    }, children)
  );
};

var _default = ShowHide;
exports["default"] = _default;
//# sourceMappingURL=ShowHide.js.map