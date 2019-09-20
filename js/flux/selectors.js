"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sApp = exports.sApp = {
  app: function app(state) {
    return state.app || {};
  },
  currentStation: function currentStation(state) {
    return sApp.app(state).currentStation;
  },
  uiTheme: function uiTheme(state) {
    return sApp.app(state).uiTheme;
  },

  stations: function stations(state) {
    return state.stations || [];
  }
};

var selectors = {
  sApp: sApp
};

exports.default = selectors;
//# sourceMappingURL=selectors.js.map