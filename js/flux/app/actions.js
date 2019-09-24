'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  SET_UI_THEME: 'SET_UI_THEME',
  OPEN_DRAWER: 'OPEN_DRAWER',
  CLOSE_DRAWER: 'CLOSE_DRAWER',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER'
};

var addCategory = exports.addCategory = function addCategory(category) {
  return {
    type: ACTION.SAVE_BOARD,
    category: category
  };
};

var _hmUiTheme = {
  '1': 'grey',
  '2': 'light',
  '3': 'sand'
};

var setUiTheme = exports.setUiTheme = function setUiTheme(uiThemeIndex) {
  return {
    type: ACTION.SET_UI_THEME,
    uiTheme: _hmUiTheme[uiThemeIndex]
  };
};

var toggleDrawer = exports.toggleDrawer = function toggleDrawer() {
  return {
    type: ACTION.TOGGLE_DRAWER
  };
};

var actions = {
  addCategory: addCategory,
  setUiTheme: setUiTheme,
  toggleDrawer: toggleDrawer
};

exports.default = actions;
//# sourceMappingURL=actions.js.map