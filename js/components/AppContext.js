"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _actions = _interopRequireDefault(require("../flux/app/actions"));

var _selectors = _interopRequireDefault(require("../flux/selectors"));

var _uiTheme = _interopRequireDefault(require("./ui-theme/uiTheme"));

var AppContext = _react["default"].createContext();

AppContext.value = (0, _extends2["default"])({}, _actions["default"], {}, _selectors["default"], {
  uiThemeImpl: _uiTheme["default"]
});
var _default = AppContext;
exports["default"] = _default;
//# sourceMappingURL=AppContext.js.map