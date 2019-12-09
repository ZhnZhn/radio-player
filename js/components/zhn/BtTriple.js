"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

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
  return nowValue === btValue ? S.SELECTED : undefined;
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
      _onClick = function _onClick(value) {
    onClick(value);
    setValue(value);
  };

  return _react["default"].createElement("div", {
    className: CL.BT,
    style: style
  }, _react["default"].createElement("button", {
    className: CL.BT_ONE,
    style: _oneStyle,
    tabIndex: tabIndex,
    onClick: _onClick.bind(null, 1)
  }, oneC), _react["default"].createElement("button", {
    className: CL.BT_TWO,
    style: _twoStyle,
    tabIndex: tabIndex,
    onClick: _onClick.bind(null, 2)
  }, twoC), _react["default"].createElement("button", {
    className: CL.BT_THREE,
    style: _threeStyle,
    tabIndex: tabIndex,
    onClick: _onClick.bind(null, 3)
  }, threeC));
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