"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.setCurrentStation = exports.removeCategory = exports.addCategory = exports.ACTION = void 0;

var _utils = _interopRequireDefault(require("../../sound/utils"));

var ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};
exports.ACTION = ACTION;
var crFilterBy = _utils["default"].crFilterBy,
    getCategory = _utils["default"].getCategory;

var addCategory = function addCategory(category, filter) {
  var _filterBy = crFilterBy(filter),
      categories = getCategory(category).map(function (station) {
    station.category = category;
    return station;
  }).filter(_filterBy);

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