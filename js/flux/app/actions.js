"use strict";

exports.__esModule = true;
exports["default"] = exports.ACTION = void 0;
var ACTION = {
  SET_UI_THEME: 'SET_UI_THEME',
  SET_SRC_FILTER: 'SET_SRC_FILTER',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER'
};
exports.ACTION = ACTION;
var _hmUiTheme = {
  '1': 'grey',
  '2': 'light',
  '3': 'sand'
};

var setUiTheme = function setUiTheme(uiThemeIndex) {
  return {
    type: ACTION.SET_UI_THEME,
    uiTheme: _hmUiTheme[uiThemeIndex]
  };
};

var toggleDrawer = function toggleDrawer() {
  return {
    type: ACTION.TOGGLE_DRAWER
  };
};

var _hmSrcFilter = {
  '1': 'none',
  '2': 'https',
  '3': 'http'
};

var setSrcFilter = function setSrcFilter(filterIndex) {
  return {
    type: ACTION.SET_SRC_FILTER,
    filter: _hmSrcFilter[filterIndex]
  };
};

var actions = {
  setUiTheme: setUiTheme,
  setSrcFilter: setSrcFilter,
  toggleDrawer: toggleDrawer
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map