'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('../zhn-ch/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _DrawerMenu = require('./DrawerMenu');

var _DrawerMenu2 = _interopRequireDefault(_DrawerMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderDrawer = function HeaderDrawer(props) {
  return _react2.default.createElement(
    _Drawer2.default,
    null,
    _react2.default.createElement(_DrawerMenu2.default, props)
  );
};

exports.default = HeaderDrawer;
//# sourceMappingURL=HeaderDrawer.js.map