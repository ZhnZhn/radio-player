"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _categories = _interopRequireDefault(require("./categories"));

var _router = _interopRequireDefault(require("./router"));

var utils = {
  isHttp: function isHttp(src) {
    if (src === void 0) {
      src = '';
    }

    return src.split('://')[0] === 'http';
  },
  filterCategoriesBy: function filterCategoriesBy(filterBy) {
    return _categories["default"].filter(function (category) {
      return _router["default"].getCategory(category).some(filterBy);
    });
  },
  crCategories: function crCategories() {
    return [].concat(_categories["default"]);
  },
  getCategory: _router["default"].getCategory,
  crFilterBy: function crFilterBy(filter) {
    switch (filter) {
      case 'http':
        return function (item) {
          return utils.isHttp(item.src);
        };

      case 'https':
        return function (item) {
          return !utils.isHttp(item.src);
        };

      default:
        return function () {
          return true;
        };
    }
  }
};
var _default = utils;
exports["default"] = _default;
//# sourceMappingURL=utils.js.map