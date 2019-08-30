'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../stations/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.ADD_CATEGORY:
      {
        var category = action.category;

        state[category] = true;
        return (0, _extends3.default)({}, state);
      }
    case _actions.ACTION.REMOVE_CATEGORY:
      {
        var _category = action.category;

        state[_category] = false;
        return (0, _extends3.default)({}, state);
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map