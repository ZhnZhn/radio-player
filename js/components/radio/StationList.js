'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  LIST: 'item-list',
  ITEM: 'item-station',
  ACCESS_KEY: 'item-station__access'
};

var _calcAccessKey = function _calcAccessKey(index) {
  return index < 6 && index !== 0 ? index : void 0;
};

var StationList = function StationList(_ref) {
  var radioStations = _ref.radioStations,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { className: CL.LIST },
    radioStations.map(function (station, index) {
      var accessKey = _has2.default.TOUCH ? void 0 : _calcAccessKey(index);
      return _react2.default.createElement(
        'button',
        {
          className: CL.ITEM,
          key: station.title,
          accessKey: accessKey,
          onClick: onClick.bind(null, station, index)
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
    })
  );
};

exports.default = StationList;
//# sourceMappingURL=StationList.js.map