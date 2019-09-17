'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hm = {
  'grey': 'grey',
  //'light': '#e8e8e8',
  'light': '#f9f9f9',
  //'sand': '#f7e8c3'
  'sand': '#fdf1d5'
};

var uiThemeImpl = {
  toBg: function toBg(uiTheme) {
    return {
      backgroundColor: _hm[uiTheme]
    };
  }
};

exports.default = uiThemeImpl;
//# sourceMappingURL=uiTheme.js.map