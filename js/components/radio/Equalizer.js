'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  EQUALIZER: 'equalizer',
  EQUALIZER_NOT_PLAYING: 'equalizer--not-playing'
};

/*
const S = {
  EQUALIZER_PLAYING: {
    width: 24,
    height: 24,
    marginLeft: 16,
    background: 'url(./css/ani_equalizer_green.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transform: 'rotateZ(90deg)'
  },
  EQUALIZER_NOT_PLAYING: {
    width: 24,
    height: 24,
    marginLeft: 16
  }
};
*/

var Equalizer = function Equalizer(_ref) {
  var isPlaying = _ref.isPlaying,
      isUnloaded = _ref.isUnloaded,
      unload = _ref.unload;
  return isPlaying ? _react2.default.createElement('div', { className: CL.EQUALIZER }) : isUnloaded ? _react2.default.createElement('div', { className: CL.EQUALIZER_NOT_PLAYING }) : _react2.default.createElement('button', { className: CL.EQUALIZER_NOT_PLAYING,
    'data-loader': 'circle',
    onClick: unload
  });
};

exports.default = Equalizer;
//# sourceMappingURL=Equalizer.js.map