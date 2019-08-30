'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.MOVE_TO_TOP:
      {
        var index = action.index,
            station = action.station;

        state.splice(index, 1);
        state.unshift(station);
        return [].concat((0, _toConsumableArray3.default)(state));
      }
    case _actions.ACTION.ADD_CATEGORY:
      {
        var categories = action.categories;

        return [].concat((0, _toConsumableArray3.default)(categories), (0, _toConsumableArray3.default)(state));
      }
    case _actions.ACTION.REMOVE_CATEGORY:
      {
        var category = action.category;

        return state.filter(function (station) {
          return station.category !== category;
        });
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map