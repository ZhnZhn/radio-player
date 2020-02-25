"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../../flux/stations/actions");

var _SvgChecked = _interopRequireDefault(require("../zhn/SvgChecked"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _style = _interopRequireDefault(require("./style"));

var CategoriesList = function CategoriesList(_ref) {
  var filter = _ref.filter,
      topics = _ref.topics,
      isCategories = _ref.isCategories,
      addCategory = _ref.addCategory,
      removeCategory = _ref.removeCategory;
  return _react["default"].createElement("ul", {
    style: _style["default"].UL
  }, topics.map(function (category) {
    var _is = isCategories[category];
    return _react["default"].createElement("li", {
      key: category
    }, _react["default"].createElement(_FlatButton["default"], {
      className: _style["default"].CL_BT,
      caption: category,
      onClick: _is ? function () {
        return removeCategory(category);
      } : function () {
        return addCategory(category, filter);
      }
    }, _is && _react["default"].createElement(_SvgChecked["default"], null)));
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    filter: state.app.filter,
    topics: state.topics,
    isCategories: state.categories
  };
};

var mapDispatchToProps = {
  addCategory: _actions.addCategory,
  removeCategory: _actions.removeCategory
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CategoriesList);

exports["default"] = _default;
//# sourceMappingURL=CategoriesList.js.map