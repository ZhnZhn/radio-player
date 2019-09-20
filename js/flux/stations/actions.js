'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentStation = exports.removeCategory = exports.addCategory = exports.ACTION = undefined;

var _router = require('../../sound/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTION = exports.ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};

var addCategory = exports.addCategory = function addCategory(category) {
  var categories = _router2.default.getCategory(category).map(function (station) {
    station.category = category;
    return station;
  });
  return {
    type: ACTION.ADD_CATEGORY,
    categories: categories,
    category: category
  };
};

var removeCategory = exports.removeCategory = function removeCategory(category) {
  return {
    type: ACTION.REMOVE_CATEGORY,
    category: category
  };
};

var setCurrentStation = exports.setCurrentStation = function setCurrentStation(station) {
  return {
    type: ACTION.SET_CURRENT_STATION,
    station: station
  };
};
//# sourceMappingURL=actions.js.map