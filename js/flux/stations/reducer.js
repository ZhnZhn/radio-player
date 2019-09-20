'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fByTitle = function fByTitle(title) {
  return function (item) {
    return item.title !== title;
  };
};
var fByCategory = function fByCategory(category) {
  return function (item) {
    return item.category !== category;
  };
};

var _findByCategory = function _findByCategory(arr, category) {
  var _max = arr.length;
  for (var i = 0; i < _max; i++) {
    if (arr[i].category === category) {
      return arr[i];
    }
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.ADD_CATEGORY:
      {
        var categories = action.categories,
            category = action.category,
            currentStation = action.currentStation,
            _ref = currentStation || {},
            title = _ref.title,
            _stationsWithoutCurrent = categories.filter(fByTitle(title)),
            _station = _findByCategory(state, category),
            _categories = _station ? _stationsWithoutCurrent.filter(fByTitle(_station.title)) : _stationsWithoutCurrent;

        return [].concat((0, _toConsumableArray3.default)(_categories), (0, _toConsumableArray3.default)(state));
      }
    case _actions.ACTION.REMOVE_CATEGORY:
      {
        var _category = action.category;

        return state.filter(fByCategory(_category));
      }
    case _actions.ACTION.SET_CURRENT_STATION:
      {
        var station = action.station,
            _currentStation = action.currentStation,
            _ref2 = station || {},
            _title = _ref2.title,
            _stations = state.filter(fByTitle(_title));

        if (_currentStation) {
          _stations.unshift(_currentStation);
        }
        return _stations;
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map