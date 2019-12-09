"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Drawer = _interopRequireDefault(require("../zhn-ch/Drawer"));

var _DrawerMenu = _interopRequireDefault(require("./DrawerMenu"));

var HeaderDrawer = function HeaderDrawer(props) {
  return _react["default"].createElement(_Drawer["default"], null, _react["default"].createElement(_DrawerMenu["default"], props));
};

var _default = HeaderDrawer;
exports["default"] = _default;
//# sourceMappingURL=HeaderDrawer.js.map