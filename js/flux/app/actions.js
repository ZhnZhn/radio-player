"use strict";

exports.__esModule = true;
exports["default"] = exports.toggleDrawer = exports.setUiTheme = exports.addCategory = exports.ACTION = void 0;
var ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  SET_UI_THEME: 'SET_UI_THEME',
  SET_SRC_FILTER: 'SET_SRC_FILTER',
  OPEN_DRAWER: 'OPEN_DRAWER',
  CLOSE_DRAWER: 'CLOSE_DRAWER',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER'
};
exports.ACTION = ACTION;

var addCategory = function addCategory(category) {
  return {
    type: ACTION.SAVE_BOARD,
    category: category
  };
};

exports.addCategory = addCategory;
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

exports.setUiTheme = setUiTheme;

var toggleDrawer = function toggleDrawer() {
  return {
    type: ACTION.TOGGLE_DRAWER
  };
};

exports.toggleDrawer = toggleDrawer;
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
  //addCategory,
  setUiTheme: setUiTheme,
  setSrcFilter: setSrcFilter,
  toggleDrawer: toggleDrawer
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map