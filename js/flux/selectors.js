"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sApp = exports.sApp = {
  app: function app(state) {
    return state.app || {};
  },
  uiTheme: function uiTheme(state) {
    return sApp.app(state).uiTheme;
  }
};

var selectors = {
  sApp: sApp
};

exports.default = selectors;
//# sourceMappingURL=selectors.js.map