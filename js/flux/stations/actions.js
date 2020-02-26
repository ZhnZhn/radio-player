"use strict";

exports.__esModule = true;
exports["default"] = exports.ACTION = void 0;
var ACTION = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  SET_CURRENT_STATION: 'SET_CURRENT_STATION'
};
exports.ACTION = ACTION;

var addCategory = function addCategory(category) {
  return {
    type: ACTION.ADD_CATEGORY,
    category: category
  };
};

var removeCategory = function removeCategory(category) {
  return {
    type: ACTION.REMOVE_CATEGORY,
    category: category
  };
};

var setCurrentStation = function setCurrentStation(station) {
  return {
    type: ACTION.SET_CURRENT_STATION,
    station: station
  };
};

var actions = {
  addCategory: addCategory,
  removeCategory: removeCategory,
  setCurrentStation: setCurrentStation
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map