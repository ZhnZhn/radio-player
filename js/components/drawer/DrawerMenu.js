'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _AppContext = require('../AppContext');

var _AppContext2 = _interopRequireDefault(_AppContext);

var _useSwipeGesture = require('../hooks/useSwipeGesture');

var _useSwipeGesture2 = _interopRequireDefault(_useSwipeGesture);

var _SvgClose = require('../zhn/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _BtTriple = require('../zhn/BtTriple');

var _BtTriple2 = _interopRequireDefault(_BtTriple);

var _CategoriesList = require('./CategoriesList');

var _CategoriesList2 = _interopRequireDefault(_CategoriesList);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerMenu = function DrawerMenu(_ref) {
  var categories = _ref.categories;

  var _useContext = (0, _react.useContext)(_AppContext2.default),
      setUiTheme = _useContext.setUiTheme,
      toggleDrawer = _useContext.toggleDrawer,
      dispatch = (0, _reactRedux.useDispatch)(),
      _setUiTheme = (0, _react.useCallback)(function (uiThemeIndex) {
    return dispatch(setUiTheme(uiThemeIndex));
  }, []),
      _onCloseDrawer = (0, _react.useCallback)(function () {
    return dispatch(toggleDrawer());
  }, []),
      _handlers = (0, _useSwipeGesture2.default)({ onSwipeGesture: _onCloseDrawer, dir: 'R' });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: _style2.default.CL_ROOT }, _handlers),
    _react2.default.createElement(
      'div',
      { className: _style2.default.CL_HEADER },
      _react2.default.createElement(_BtTriple2.default, {
        style: _style2.default.BT_TRIPLE,
        oneC: 'GREY',
        twoC: 'LIGHT',
        threeC: 'SAND',
        onClick: _setUiTheme
      }),
      _react2.default.createElement(_SvgClose2.default, {
        className: _style2.default.CL_BT_CLOSE,
        onClick: _onCloseDrawer
      })
    ),
    _react2.default.createElement(_CategoriesList2.default, { categories: categories })
  );
};

exports.default = DrawerMenu;
//# sourceMappingURL=DrawerMenu.js.map