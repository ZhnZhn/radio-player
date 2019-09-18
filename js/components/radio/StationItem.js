'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};

var StationItem = function StationItem(_ref) {
  var station = _ref.station,
      accessKey = _ref.accessKey,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: CL.ITEM,
      accessKey: accessKey,
      onClick: onClick
    },
    _react2.default.createElement(
      'span',
      null,
      station.title
    ),
    Boolean(accessKey) && _react2.default.createElement(
      'span',
      {
        className: CL.ACCESS_KEY },
      accessKey
    )
  );
};

exports.default = StationItem;
//# sourceMappingURL=StationItem.js.map