"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../stations/actions");

var reducer = function reducer(state, action) {
  if (state === void 0) {
    state = {};
  }

  switch (action.type) {
    case _actions.ACTION.ADD_CATEGORY:
      {
        var category = action.category;
        state[category] = true;
        return (0, _extends2["default"])({}, state);
      }

    case _actions.ACTION.REMOVE_CATEGORY:
      {
        var _category = action.category;
        state[_category] = false;
        return (0, _extends2["default"])({}, state);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map