"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../app/actions");

var _utils = _interopRequireDefault(require("../../sound/utils"));

var isHttp = _utils["default"].isHttp,
    filterCategoriesBy = _utils["default"].filterCategoriesBy,
    crCategories = _utils["default"].crCategories;

var _crTopicsBy = function _crTopicsBy(filter) {
  var _filterBy = filter === 'https' ? function (item) {
    return !isHttp(item.src);
  } : filter === 'http' ? function (item) {
    return isHttp(item.src);
  } : void 0;

  return _filterBy ? filterCategoriesBy(_filterBy) : crCategories();
};

var reducer = function reducer(state, action) {
  if (state === void 0) {
    state = {};
  }

  switch (action.type) {
    case _actions.ACTION.SET_SRC_FILTER:
      {
        return _crTopicsBy(action.filter);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map