'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

var _StationDescr = require('./StationDescr');

var _StationDescr2 = _interopRequireDefault(_StationDescr);

var _StationItem = require('./StationItem');

var _StationItem2 = _interopRequireDefault(_StationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  LIST: 'item-list'
};

var _calcAccessKey = function _calcAccessKey(index) {
  return index < 5 ? index + 1 : void 0;
};

var StationList = function StationList(_ref) {
  var currentStation = _ref.currentStation,
      radioStations = _ref.radioStations,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { className: CL.LIST },
    _react2.default.createElement(_StationDescr2.default, {
      station: currentStation
    }),
    radioStations.map(function (station, index) {
      return _react2.default.createElement(_StationItem2.default, {
        key: station.title,
        station: station,
        accessKey: _has2.default.TOUCH ? void 0 : _calcAccessKey(index),
        onClick: onClick.bind(null, station, index)
      });
    })
  );
};

exports.default = StationList;
//# sourceMappingURL=StationList.js.map