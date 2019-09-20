'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../stations/actions');

var _selectors = require('../selectors');

var appCurrentStation = function appCurrentStation(_ref) {
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.SET_CURRENT_STATION || action.type === _actions.ACTION.ADD_CATEGORY) {
        action.currentStation = _selectors.sApp.currentStation(getState());
      }
      return next(action);
    };
  };
};

exports.default = appCurrentStation;
//# sourceMappingURL=appCurrentStation.js.map