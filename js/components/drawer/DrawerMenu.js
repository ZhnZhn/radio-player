"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _AppContext = _interopRequireDefault(require("../AppContext"));

var _useSwipeGesture = _interopRequireDefault(require("../hooks/useSwipeGesture"));

var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));

var _BtTriple = _interopRequireDefault(require("../zhn/BtTriple"));

var _CategoriesList = _interopRequireDefault(require("./CategoriesList"));

var _style = _interopRequireDefault(require("./style"));

var DrawerMenu = function DrawerMenu() {
  var _useContext = (0, _react.useContext)(_AppContext["default"]),
      setUiTheme = _useContext.setUiTheme,
      toggleDrawer = _useContext.toggleDrawer,
      setSrcFilter = _useContext.setSrcFilter,
      dispatch = (0, _reactRedux.useDispatch)(),
      _setUiTheme = (0, _react.useCallback)(function (uiThemeIndex) {
    return dispatch(setUiTheme(uiThemeIndex));
  }, []),
      _onCloseDrawer = (0, _react.useCallback)(function () {
    return dispatch(toggleDrawer());
  }, []),
      _setFilter = (0, _react.useCallback)(function (srcFilterIndex) {
    return dispatch(setSrcFilter(srcFilterIndex));
  }, []),
      _handlers = (0, _useSwipeGesture["default"])({
    onSwipeGesture: _onCloseDrawer,
    dir: 'R'
  });

  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: _style["default"].CL_ROOT
  }, _handlers), _react["default"].createElement("div", {
    className: _style["default"].CL_HEADER
  }, _react["default"].createElement(_BtTriple["default"], {
    style: _style["default"].BT_TRIPLE,
    oneC: "GREY",
    twoC: "LIGHT",
    threeC: "SAND",
    onClick: _setUiTheme
  }), _react["default"].createElement(_SvgClose["default"], {
    className: _style["default"].CL_BT_CLOSE,
    onClick: _onCloseDrawer
  })), _react["default"].createElement(_CategoriesList["default"], null), _react["default"].createElement("div", {
    className: _style["default"].CL_HEADER
  }, _react["default"].createElement(_BtTriple["default"], {
    style: _style["default"].BT_TRIPLE,
    oneC: "ALL",
    twoC: "HTTPS",
    threeC: "HTTP",
    onClick: _setFilter
  })));
};

var _default = DrawerMenu;
exports["default"] = _default;
//# sourceMappingURL=DrawerMenu.js.map