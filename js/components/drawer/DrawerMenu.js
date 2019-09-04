'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhn/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _BtTriple = require('../zhn/BtTriple');

var _BtTriple2 = _interopRequireDefault(_BtTriple);

var _CategoriesList = require('./CategoriesList');

var _CategoriesList2 = _interopRequireDefault(_CategoriesList);

var _setBodyStyle = require('./setBodyStyle');

var _setBodyStyle2 = _interopRequireDefault(_setBodyStyle);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerMenu = function DrawerMenu(_ref) {
  var onCloseDrawer = _ref.onCloseDrawer,
      categories = _ref.categories;
  return _react2.default.createElement(
    'div',
    { className: _style2.default.CL_ROOT },
    _react2.default.createElement(
      'div',
      { className: _style2.default.CL_HEADER },
      _react2.default.createElement(_BtTriple2.default, {
        style: _style2.default.BT_TRIPLE,
        oneC: 'GREY',
        twoC: 'LIGHT',
        threeC: 'SAND',
        onClick: _setBodyStyle2.default
      }),
      _react2.default.createElement(_SvgClose2.default, {
        style: _style2.default.BT_CLOSE,
        onClick: onCloseDrawer
      })
    ),
    _react2.default.createElement(_CategoriesList2.default, { categories: categories })
  );
};

exports.default = DrawerMenu;
//# sourceMappingURL=DrawerMenu.js.map