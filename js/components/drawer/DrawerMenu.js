'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../flux/stations/actions');

var _SvgClose = require('../zhn/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _BtTriple = require('../zhn/BtTriple');

var _BtTriple2 = _interopRequireDefault(_BtTriple);

var _SvgChecked = require('../zhn/SvgChecked');

var _SvgChecked2 = _interopRequireDefault(_SvgChecked);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _setBodyStyle = require('./setBodyStyle');

var _setBodyStyle2 = _interopRequireDefault(_setBodyStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  HEADER: 'drawer__title',
  ROOT: 'drawer__list',
  BT: 'drawer__list-bt'
};

var S = {
  HEADER: {
    paddingTop: 12,
    paddingBottom: 8
  },
  BT_TRIPLE: {
    marginRight: 8
  },
  BT_CLOSE: {
    position: 'relative',
    top: 4
  },
  UL: {
    listStyleType: 'none'
  }
};

var DrawerMenu = function DrawerMenu(_ref) {
  var onCloseDrawer = _ref.onCloseDrawer,
      categories = _ref.categories,
      isCategories = _ref.isCategories,
      addCategory = _ref.addCategory,
      removeCategory = _ref.removeCategory;
  return _react2.default.createElement(
    'div',
    { className: CL.ROOT },
    _react2.default.createElement(
      'div',
      {
        className: CL.HEADER,
        style: S.HEADER
      },
      _react2.default.createElement(_BtTriple2.default, {
        style: S.BT_TRIPLE,
        oneC: 'GREY',
        twoC: 'LIGHT',
        threeC: 'SAND',
        onClick: _setBodyStyle2.default
      }),
      _react2.default.createElement(_SvgClose2.default, {
        style: S.BT_CLOSE,
        onClick: onCloseDrawer
      })
    ),
    _react2.default.createElement(
      'ul',
      { style: S.UL },
      categories.map(function (category) {
        var _is = isCategories[category];
        return _react2.default.createElement(
          'li',
          { key: category },
          _react2.default.createElement(
            _FlatButton2.default,
            {
              className: CL.BT,
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
    )
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DrawerMenu);
//# sourceMappingURL=DrawerMenu.js.map