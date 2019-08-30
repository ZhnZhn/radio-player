'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('./app/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./stations/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./categories/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  app: _reducer2.default,
  stations: _reducer4.default,
  categories: _reducer6.default
});

exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map