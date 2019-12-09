"use strict";

exports.__esModule = true;
exports["default"] = exports.sApp = void 0;
var sApp = {
  app: function app(state) {
    return state.app || {};
  },
  isDrawer: function isDrawer(state) {
    return sApp.app(state).isDrawer;
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
exports.sApp = sApp;
var selectors = {
  sApp: sApp
};
var _default = selectors;
exports["default"] = _default;
//# sourceMappingURL=selectors.js.map