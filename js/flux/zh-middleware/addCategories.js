"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../stations/actions");

var _utils = _interopRequireDefault(require("../../sound/utils"));

var crFilterBy = _utils["default"].crFilterBy,
    getCategory = _utils["default"].getCategory;

var addCategories = function addCategories(_ref) {
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.ADD_CATEGORY) {
        var state = getState(),
            category = action.category,
            _filterBy = crFilterBy(state.app.filter);

        action.categories = getCategory(category).map(function (station) {
          station.category = category;
          return station;
        }).filter(_filterBy);
      }

      return next(action);
    };
  };
};

var _default = addCategories;
exports["default"] = _default;
//# sourceMappingURL=addCategories.js.map