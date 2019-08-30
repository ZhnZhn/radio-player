'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BT: {
    width: 34,
    height: 34
  },
  SVG: {
    fill: '#fff',
    width: 34,
    height: 34
  }
};

var IconPlay = function IconPlay() {
  return _react2.default.createElement('path', { d: 'M12.458 22.667l10-6.5-10-6.5z' });
};
var IconStop = function IconStop() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('path', { d: 'M11.5 10h3v13h-3v-13z' }),
    _react2.default.createElement('path', { d: 'M17.5 10h3v13h-3v-13z' })
  );
};

var BtPlay = function BtPlay(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onStop = _ref.onStop;
  return _react2.default.createElement(
    'button',
    { style: S.BT, onClick: isPlaying ? onStop : onPlay },
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 32 32', width: '100%', height: '100%', style: S.SVG },
      _react2.default.createElement(
        'g',
        null,
        isPlaying ? _react2.default.createElement(IconStop, null) : _react2.default.createElement(IconPlay, null),
        _react2.default.createElement('path', { fill: '#64e346', d: 'M16 32c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zM16 2c-7.719 0-14 6.28-14 14s6.281 14 14 14c7.721 0 14-6.28 14-14s-6.279-14-14-14z' })
      )
    )
  );
};

exports.default = BtPlay;
//# sourceMappingURL=BtPlay.js.map