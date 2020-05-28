"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("./components/App"));

var _store = _interopRequireDefault(require("./flux/store"));

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: _store["default"]
}, /*#__PURE__*/_react["default"].createElement(_App["default"], null)), document.getElementById("app"));
//# sourceMappingURL=index.js.map