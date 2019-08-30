'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCategory = exports.addCategory = exports.moveToTop = exports.ACTION = undefined;

var _router = require('../../sound/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTION = exports.ACTION = {
  MOVE_TO_TOP: 'MOVE_TO_TOP',
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY'
};

var moveToTop = exports.moveToTop = function moveToTop(station, index) {
  return {
    type: ACTION.MOVE_TO_TOP,
    station: station,
    index: index
  };
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
//# sourceMappingURL=actions.js.map