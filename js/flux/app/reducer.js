"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _initialState = _interopRequireDefault(require("../initialState"));

var _actions = require("./actions");

var _actions2 = require("../stations/actions");

var reducer = function reducer(state, action) {
  if (state === void 0) {
    state = _initialState["default"].app;
  }

  switch (action.type) {
    case _actions.ACTION.SET_UI_THEME:
      {
        var uiTheme = action.uiTheme;
        return state.uiTheme !== uiTheme ? (0, _extends2["default"])({}, state, {
          uiTheme: uiTheme
        }) : state;
      }

    case _actions.ACTION.TOGGLE_DRAWER:
      return (0, _extends2["default"])({}, state, {
        isDrawer: !state.isDrawer
      });

    case _actions.ACTION.SET_SRC_FILTER:
      {
        return (0, _extends2["default"])({}, state, {
          filter: action.filter
        });
      }

    case _actions2.ACTION.SET_CURRENT_STATION:
      {
        var station = action.station;
        return (0, _extends2["default"])({}, state, {
          currentStation: station
        });
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map