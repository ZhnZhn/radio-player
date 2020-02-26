"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _actions = _interopRequireDefault(require("../flux/app/actions"));

var _actions2 = _interopRequireDefault(require("../flux/stations/actions"));

var _selectors = _interopRequireDefault(require("../flux/selectors"));

var _uiTheme = _interopRequireDefault(require("./ui-theme/uiTheme"));

var AppContext = _react["default"].createContext();

var _value;

AppContext.getValue = function (dispatch) {
  return _value || (_value = (0, _extends2["default"])({}, (0, _redux.bindActionCreators)(_actions["default"], dispatch), {}, (0, _redux.bindActionCreators)(_actions2["default"], dispatch), {}, _selectors["default"], {
    useSelector: _reactRedux.useSelector,
    uiThemeImpl: _uiTheme["default"]
  }));
};

var _default = AppContext;
exports["default"] = _default;
//# sourceMappingURL=AppContext.js.map