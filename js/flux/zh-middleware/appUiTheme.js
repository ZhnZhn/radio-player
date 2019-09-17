'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../app/actions');

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

exports.default = appUiTheme;
//# sourceMappingURL=appUiTheme.js.map