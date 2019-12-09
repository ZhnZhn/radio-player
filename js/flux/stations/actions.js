"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.setCurrentStation = exports.removeCategory = exports.addCategory = exports.ACTION = void 0;

var _router = _interopRequireDefault(require("../../sound/router"));

var ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};
exports.ACTION = ACTION;

var addCategory = function addCategory(category) {
  var categories = _router["default"].getCategory(category).map(function (station) {
    station.category = category;
    return station;
  });

  return {
    type: ACTION.ADD_CATEGORY,
    categories: categories,
    category: category
  };
};

exports.addCategory = addCategory;

var removeCategory = function removeCategory(category) {
  return {
    type: ACTION.REMOVE_CATEGORY,
    category: category
  };
};

exports.removeCategory = removeCategory;

var setCurrentStation = function setCurrentStation(station) {
  return {
    type: ACTION.SET_CURRENT_STATION,
    station: station
  };
};

exports.setCurrentStation = setCurrentStation;
//# sourceMappingURL=actions.js.map