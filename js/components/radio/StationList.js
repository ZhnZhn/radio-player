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

var StationList = function StationList(_ref) {
  var radioStations = _ref.radioStations,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    null,
    radioStations.map(function (station, index) {
      var accessKey = index < 6 && index !== 0 ? index : undefined;
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