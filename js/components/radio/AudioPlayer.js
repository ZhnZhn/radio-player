'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

var _sound = require('../../sound/sound');

var _sound2 = _interopRequireDefault(_sound);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Equalizer = require('./Equalizer');

var _Equalizer2 = _interopRequireDefault(_Equalizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DF_TITLE = 'Radio Player v0.1.0';
var MSG_NO_STATION = 'At first, please, choose a radio station.';

var CL = {
  PLAYER: 'audio-player'
};

var S = {
  TITLE_CONT: {
    display: 'flex',
    alignItems: 'center'
  }
};

var _setMediaMetadata = function _setMediaMetadata(artist) {
  if (_has2.default.MEDIA_SESSION) {
    /*eslint-disable no-undef*/
    navigator.mediaSession.metadata = new MediaMetadata({
      title: DF_TITLE,
      artist: artist
    });
    /*eslint-enable no-undef*/
  }
};

var AudioPlayer = function AudioPlayer(_ref) {
  var station = _ref.station;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      msgErr = _useState2[0],
      setErrMsg = _useState2[1],
      _useState3 = (0, _react.useState)(DF_TITLE),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1],
      _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      isUnloaded = _useState6[0],
      setUnloaded = _useState6[1],
      _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray3.default)(_useState7, 2),
      isPlaying = _useState8[0],
      setPlaying = _useState8[1],
      _useState9 = (0, _react.useState)(_sound2.default.INIT_VOLUME),
      _useState10 = (0, _slicedToArray3.default)(_useState9, 2),
      volume = _useState10[0],
      setVolume = _useState10[1];

  var _setVolume = function _setVolume(volume) {
    _sound2.default.setVolume(volume);
    setVolume(volume);
  };
  var _increaseVolume = function _increaseVolume() {
    return setVolume(_sound2.default.increaseVolume(0.01));
  };
  var _decreaseVolume = function _decreaseVolume() {
    return setVolume(_sound2.default.decreaseVolume(0.01));
  };

  var play = function play() {
    if (!msgErr && _sound2.default.play()) {
      setPlaying(true);
      setUnloaded(false);
      _setMediaMetadata(title);
    } else {
      setTitle(MSG_NO_STATION);
      _setMediaMetadata();
    }
  };
  var stop = function stop() {
    _sound2.default.stop();
    setPlaying(false);
  };

  var _unload = function _unload() {
    _sound2.default.unload();
    setUnloaded(true);
    _setMediaMetadata();
  };

  var _onError = function _onError(msg) {
    setErrMsg(msg);
    setUnloaded(true);
    setPlaying(false);
    _setMediaMetadata();
  };

  (0, _react.useEffect)(function () {
    if (station && station.src && _sound2.default.init(station.src, _onError.bind(null, 'Load Error'), _onError.bind(null, 'Play Error'))) {
      setUnloaded(false);
      setPlaying(false);
      setErrMsg('');
    }
    return function () {
      _sound2.default.unload();
    };
  }, [station]);

  return _react2.default.createElement(
    'div',
    { className: CL.PLAYER },
    _react2.default.createElement(_Radio2.default.Volume, {
      volume: volume,
      setVolume: _setVolume,
      onIncrease: _increaseVolume,
      onDecrease: _decreaseVolume
    }),
    _react2.default.createElement(
      'div',
      { style: S.TITLE_CONT },
      _react2.default.createElement(_Radio2.default.Command, {
        isPlaying: isPlaying,
        onPlay: play,
        onStop: stop
      }),
      _react2.default.createElement(_Title2.default, {
        station: station,
        msgErr: msgErr,
        title: title
      }),
      _react2.default.createElement(_Equalizer2.default, {
        isPlaying: isPlaying,
        isUnloaded: isUnloaded,
        unload: _unload
      })
    )
  );
};

exports.default = AudioPlayer;
//# sourceMappingURL=AudioPlayer.js.map