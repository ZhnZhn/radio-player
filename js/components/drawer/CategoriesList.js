'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../flux/stations/actions');

var _SvgChecked = require('../zhn/SvgChecked');

var _SvgChecked2 = _interopRequireDefault(_SvgChecked);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoriesList = function CategoriesList(_ref) {
  var categories = _ref.categories,
      isCategories = _ref.isCategories,
      addCategory = _ref.addCategory,
      removeCategory = _ref.removeCategory;
  return _react2.default.createElement(
    'ul',
    { style: _style2.default.UL },
    categories.map(function (category) {
      var _is = isCategories[category];
      return _react2.default.createElement(
        'li',
        { key: category },
        _react2.default.createElement(
          _FlatButton2.default,
          {
            className: _style2.default.CL_BT,
            caption: category,
            onClick: _is ? function () {
              return removeCategory(category);
            } : function () {
              return addCategory(category);
            }
          },
          _is && _react2.default.createElement(_SvgChecked2.default, null)
        )
      );
    })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isCategories: state.categories
  };
};

var mapDispatchToProps = {
  addCategory: _actions.addCategory,
  removeCategory: _actions.removeCategory
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CategoriesList);
//# sourceMappingURL=CategoriesList.js.map