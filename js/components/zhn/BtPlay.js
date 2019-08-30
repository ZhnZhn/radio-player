'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircleButton = require('./CircleButton');

var _CircleButton2 = _interopRequireDefault(_CircleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconPlay = _react2.default.createElement('path', { d: 'M12.458 22.667l10-6.5-10-6.5z' });
var IconStop = _react2.default.createElement(
  _react.Fragment,
  null,
  _react2.default.createElement('path', { d: 'M11.5 10h3v13h-3v-13z' }),
  _react2.default.createElement('path', { d: 'M17.5 10h3v13h-3v-13z' })
);

var BtPlay = function BtPlay(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onStop = _ref.onStop;

  var _onClick = isPlaying ? onStop : onPlay,
      _svgIconEl = isPlaying ? IconStop : IconPlay,
      accessKey = isPlaying ? 's' : 'p';
  return _react2.default.createElement(
    _CircleButton2.default,
    { accessKey: accessKey, onClick: _onClick },
    _svgIconEl
  );
};

exports.default = BtPlay;
//# sourceMappingURL=BtPlay.js.map