"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../app/actions");

var _hm = {
  'grey': 'grey',
  'light': '#e1e1e1',
  'sand': '#e8e0cb'
};

var appUiTheme = function appUiTheme(_) {
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.SET_UI_THEME) {
        var uiTheme = action.uiTheme,
            _bgColor = _hm[uiTheme];
        document.body.style.backgroundColor = _bgColor;
      }

      return next(action);
    };
  };
};

var _default = appUiTheme;
exports["default"] = _default;
//# sourceMappingURL=appUiTheme.js.map