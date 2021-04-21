"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Drawer = _interopRequireDefault(require("../zhn-ch/Drawer"));

var _DrawerMenu = _interopRequireDefault(require("./DrawerMenu"));

var _jsxRuntime = require("react/jsx-runtime");

var HeaderDrawer = function HeaderDrawer(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drawer["default"], {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DrawerMenu["default"], (0, _extends2["default"])({}, props))
  });
};

var _default = HeaderDrawer;
exports["default"] = _default;
//# sourceMappingURL=HeaderDrawer.js.map