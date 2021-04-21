"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  BT: 'bt-triple',
  BT_ONE: 'bt-triple__one',
  BT_TWO: 'bt-triple__two',
  BT_THREE: 'bt-triple__three'
};
var S = {
  SELECTED: {
    backgroundColor: '#1b2836'
  }
};

var _crBtStyle = function _crBtStyle(nowValue, btValue) {
  return nowValue === btValue ? S.SELECTED : void 0;
};

var BtTriple = function BtTriple(_ref) {
  var style = _ref.style,
      tabIndex = _ref.tabIndex,
      initialValue = _ref.initialValue,
      oneC = _ref.oneC,
      twoC = _ref.twoC,
      threeC = _ref.threeC,
      onClick = _ref.onClick;

  var _useState = (0, _react.useState)(initialValue),
      value = _useState[0],
      setValue = _useState[1],
      _oneStyle = _crBtStyle(value, 1),
      _twoStyle = _crBtStyle(value, 2),
      _threeStyle = _crBtStyle(value, 3),
      _onClick = (0, _react.useCallback)(function (value) {
    onClick(value);
    setValue(value);
  }, [onClick]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL.BT,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: CL.BT_ONE,
      style: _oneStyle,
      tabIndex: tabIndex,
      onClick: _onClick.bind(null, 1),
      children: oneC
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: CL.BT_TWO,
      style: _twoStyle,
      tabIndex: tabIndex,
      onClick: _onClick.bind(null, 2),
      children: twoC
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: CL.BT_THREE,
      style: _threeStyle,
      tabIndex: tabIndex,
      onClick: _onClick.bind(null, 3),
      children: threeC
    })]
  });
};

BtTriple.defaultProps = {
  tabIndex: -1,
  initialValue: 1,
  oneC: 'One',
  twoC: 'Two',
  threeC: 'Three'
};
var _default = BtTriple;
exports["default"] = _default;
//# sourceMappingURL=BtTriple.js.map