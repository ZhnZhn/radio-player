'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  SET_UI_THEME: 'SET_UI_THEME'
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
//# sourceMappingURL=actions.js.map