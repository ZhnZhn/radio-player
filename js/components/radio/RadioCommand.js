'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BtPlay = require('../zhn/BtPlay');

var _BtPlay2 = _interopRequireDefault(_BtPlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioCommand = function RadioCommand(_ref) {
  var isPlaying = _ref.isPlaying,
      onPlay = _ref.onPlay,
      onPause = _ref.onPause;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_BtPlay2.default, {
      isPlaying: isPlaying,
      onPlay: onPlay,
      onStop: onPause
    })
  );
};

exports.default = RadioCommand;
//# sourceMappingURL=RadioCommand.js.map