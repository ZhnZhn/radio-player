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

var _playerReducer = require('./playerReducer');

var _playerReducer2 = _interopRequireDefault(_playerReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = _playerReducer2.default.A;

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

var _setPlaybackState = function _setPlaybackState(state) {
  if (_has2.default.MEDIA_SESSION) {
    navigator.mediaSession.playbackState = state;
  }
};
var _setPlaybackPlaying = _setPlaybackState.bind(null, 'playing');
var _setPlaybackPaused = _setPlaybackState.bind(null, 'paused');
var _setPlaybackNone = _setPlaybackState.bind(null, 'none');

var _setMediaMetadata = function _setMediaMetadata() {
  var artist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (_has2.default.MEDIA_SESSION) {
    if (!artist || artist === DF_TITLE) {
      _setPlaybackNone();
    } else {
      _setPlaybackPlaying();
    }
    /*eslint-disable no-undef*/
    navigator.mediaSession.metadata = new MediaMetadata({
      title: DF_TITLE,
      artist: artist
    });
    /*eslint-enable no-undef*/
  }
};

var initialState = {
  msgErr: '',
  title: DF_TITLE,
  isUnloaded: true,
  isPlaying: false,
  volume: _sound2.default.INIT_VOLUME
};

var AudioPlayer = function AudioPlayer(_ref) {
  var station = _ref.station;

  var _useReducer = (0, _react.useReducer)(_playerReducer2.default, initialState),
      _useReducer2 = (0, _slicedToArray3.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1],
      isUnloaded = state.isUnloaded,
      isPlaying = state.isPlaying,
      volume = state.volume,
      title = state.title,
      msgErr = state.msgErr;

  var _setVolume = (0, _react.useCallback)(function (newVolume) {
    return dispatch({
      type: A.SET_VOLUME,
      volume: _sound2.default.setVolume(newVolume)
    });
  }, []);
  var _increaseVolume = (0, _react.useCallback)(function () {
    return dispatch({
      type: A.SET_VOLUME,
      volume: _sound2.default.increaseVolume(0.01)
    });
  }, []);
  var _decreaseVolume = (0, _react.useCallback)(function () {
    return dispatch({
      type: A.SET_VOLUME,
      volume: _sound2.default.decreaseVolume(0.01)
    });
  }, []);

  var play = function play() {
    if (!msgErr && _sound2.default.play()) {
      dispatch({ type: A.SET_PLAYING });
      _setMediaMetadata(station && station.title || DF_TITLE);
    } else {
      dispatch({ type: A.SET_TITLE, title: MSG_NO_STATION });
      _setMediaMetadata();
    }
  };
  var pause = function pause() {
    _setPlaybackPaused();
    _sound2.default.stop();
    dispatch({ type: A.PAUSE });
  };

  var _unload = function _unload() {
    _sound2.default.unload();
    dispatch({ type: A.UNLOAD });
    _setMediaMetadata();
  };

  var _onError = function _onError(msg) {
    dispatch({ type: A.SET_ERROR, msgErr: msg });
    _setMediaMetadata();
  };

  (0, _react.useEffect)(function () {
    if (_has2.default.MEDIA_SESSION) {
      var _mediaSession = navigator.mediaSession;
      _mediaSession.setActionHandler('play', play);
      _mediaSession.setActionHandler('pause', pause);
    }
  }, []);

  (0, _react.useEffect)(function () {
    if (station && station.src && _sound2.default.init(station.src, _onError.bind(null, 'Load Error'), _onError.bind(null, 'Play Error'))) {
      dispatch({ type: A.SET_LOADING });
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
        onPause: pause
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