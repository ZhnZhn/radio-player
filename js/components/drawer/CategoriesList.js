"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppContext = _interopRequireDefault(require("../AppContext"));

var _SvgChecked = _interopRequireDefault(require("../zhn/SvgChecked"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _style = _interopRequireDefault(require("./style"));

var CategoriesList = function CategoriesList() {
  var _useContext = (0, _react.useContext)(_AppContext["default"]),
      sApp = _useContext.sApp,
      addCategory = _useContext.addCategory,
      removeCategory = _useContext.removeCategory,
      useSelector = _useContext.useSelector,
      topics = useSelector(sApp.topics),
      isCategories = useSelector(sApp.categories);

  return _react["default"].createElement("ul", {
    style: _style["default"].UL
  }, topics.map(function (category) {
    var _is = isCategories[category];
    return _react["default"].createElement("li", {
      key: category
    }, _react["default"].createElement(_FlatButton["default"], {
      className: _style["default"].CL_BT,
      caption: category,
      timeout: 0,
      onClick: _is ? function () {
        return removeCategory(category);
      } : function () {
        return addCategory(category);
      }
    }, _is && _react["default"].createElement(_SvgChecked["default"], null)));
  }));
};

var _default = CategoriesList;
exports["default"] = _default;
//# sourceMappingURL=CategoriesList.js.map