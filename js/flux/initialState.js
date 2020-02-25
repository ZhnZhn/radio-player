"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _categories = _interopRequireDefault(require("../sound/categories"));

var initialState = {
  app: {
    isDrawer: false,
    filter: 'none',
    currentStation: void 0,
    uiTheme: 'grey'
  },
  topics: [].concat(_categories["default"]),
  categories: {},
  stations: []
};
var _default = initialState;
exports["default"] = _default;
//# sourceMappingURL=initialState.js.map