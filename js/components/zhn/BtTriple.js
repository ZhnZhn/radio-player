'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1],
      _oneStyle = _crBtStyle(value, 1),
      _twoStyle = _crBtStyle(value, 2),
      _threeStyle = _crBtStyle(value, 3),
      _onClick = function _onClick(value) {
    onClick(value);
    setValue(value);
  };

  return _react2.default.createElement(
    'div',
    { className: CL.BT, style: style },
    _react2.default.createElement(
      'button',
      {
        className: CL.BT_ONE,
        style: _oneStyle,
        tabIndex: tabIndex,
        onClick: _onClick.bind(null, 1)
      },
      oneC
    ),
    _react2.default.createElement(
      'button',
      {
        className: CL.BT_TWO,
        style: _twoStyle,
        tabIndex: tabIndex,
        onClick: _onClick.bind(null, 2)
      },
      twoC
    ),
    _react2.default.createElement(
      'button',
      {
        className: CL.BT_THREE,
        style: _threeStyle,
        tabIndex: tabIndex,
        onClick: _onClick.bind(null, 3)
      },
      threeC
    )
  );
};

BtTriple.defaultProps = {
  tabIndex: -1,
  initialValue: 1,
  oneC: 'One',
  twoC: 'Two',
  threeC: 'Three'
};

exports.default = BtTriple;
//# sourceMappingURL=BtTriple.js.map