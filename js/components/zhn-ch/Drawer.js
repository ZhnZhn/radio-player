"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _AppContext = _interopRequireDefault(require("../AppContext"));

var _uiTheme = _interopRequireDefault(require("../ui-theme/uiTheme"));

var CL = {
  DRAWER_BT: 'drawer-bt',
  DRAWER_SPAN: 'drawer-span',
  DRAWER_SVG: 'drawer-svg',
  DRAWER: 'drawer',
  DRAWER_MODAL: 'drawer-modal'
};
var S = {
  BT_DRAWER: {
    position: 'absolute',
    top: 8,
    right: 18
  },
  DRAWER_OFF: {
    //transform: 'translateX(-264px)',
    transform: 'translateX(264px)',
    pointerEvents: 'none'
  },
  DRAWER_ON: {
    transform: 'translate(0px, 0px)'
  },
  MODAL_OFF: {
    display: 'none',
    opacity: 0,
    zIndex: -1,
    transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  MODAL_ON: {
    display: 'block',
    opacity: 1,
    zIndex: 1000,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
};

var Drawer = function Drawer(_ref) {
  var btStyle = _ref.btStyle,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_AppContext["default"]),
      toggleDrawer = _useContext.toggleDrawer,
      sApp = _useContext.sApp,
      useSelector = _useContext.useSelector,
      isOpen = useSelector(sApp.isDrawer),
      uiTheme = useSelector(sApp.uiTheme);

  (0, _react.useEffect)(function () {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });

  var _asideStyle = (0, _extends2["default"])({}, isOpen ? S.DRAWER_ON : S.DRAWER_OFF, {}, _uiTheme["default"].toBg(uiTheme)),
      _drawerModalStyle = isOpen ? S.MODAL_ON : S.MODAL_OFF,
      _onClickWrapper = isOpen ? toggleDrawer : void 0;

  return [_react["default"].createElement("button", {
    key: "bt-drawer",
    className: CL.DRAWER_BT,
    style: (0, _extends2["default"])({}, S.BT_DRAWER, {}, btStyle),
    "aria-label": "Open Drawer",
    onClick: toggleDrawer
  }, _react["default"].createElement("span", {
    className: CL.DRAWER_SPAN
  }, _react["default"].createElement("svg", {
    className: CL.DRAWER_SVG,
    focusable: "false",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  })))), _react["default"].createElement("div", {
    key: "wrapper",
    role: "presentation",
    "aria-hidden": !isOpen,
    className: CL.DRAWER_MODAL,
    style: _drawerModalStyle,
    onClick: _onClickWrapper
  }), _react["default"].createElement("aside", {
    key: "aside",
    className: CL.DRAWER,
    style: _asideStyle
  }, _react["default"].createElement("div", null, children))];
};

var _default = Drawer;
exports["default"] = _default;
//# sourceMappingURL=Drawer.js.map