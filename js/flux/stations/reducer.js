"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../app/actions");

var _actions2 = require("./actions");

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

var reducer = function reducer(state, action) {
  if (state === void 0) {
    state = [];
  }

  switch (action.type) {
    case _actions2.ACTION.ADD_CATEGORY:
      {
        var categories = action.categories,
            category = action.category,
            currentStation = action.currentStation,
            _ref = currentStation || {},
            title = _ref.title,
            _stationsWithoutCurrent = categories.filter(fByTitle(title)),
            _station = _findByCategory(state, category),
            _categories = _station ? _stationsWithoutCurrent.filter(fByTitle(_station.title)) : _stationsWithoutCurrent;

        return [].concat(_categories, state);
      }

    case _actions2.ACTION.REMOVE_CATEGORY:
      {
        var _category = action.category;
        return state.filter(fByCategory(_category));
      }

    case _actions2.ACTION.SET_CURRENT_STATION:
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

    case _actions.ACTION.SET_SRC_FILTER:
      {
        return [];
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map