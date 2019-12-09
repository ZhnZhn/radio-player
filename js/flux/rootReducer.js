"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("./app/reducer"));

var _reducer2 = _interopRequireDefault(require("./stations/reducer"));

var _reducer3 = _interopRequireDefault(require("./categories/reducer"));

var rootReducer = (0, _redux.combineReducers)({
  app: _reducer["default"],
  stations: _reducer2["default"],
  categories: _reducer3["default"]
});
var _default = rootReducer;
exports["default"] = _default;
//# sourceMappingURL=rootReducer.js.map