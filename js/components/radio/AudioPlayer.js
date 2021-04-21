"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

var _AppContext = _interopRequireDefault(require("../AppContext"));

var _sound = _interopRequireDefault(require("../../sound/sound"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _Title = _interopRequireDefault(require("./Title"));

var _Equalizer = _interopRequireDefault(require("./Equalizer"));

var _playerReducer = _interopRequireDefault(require("./playerReducer"));

var _jsxRuntime = require("react/jsx-runtime");

var A = _playerReducer["default"].A;
var DF_TITLE = 'Radio Player v0.2.0';
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
/*
const _setPlaybackState = (state) => {
  if (HAS.MEDIA_SESSION) {
    navigator.mediaSession.playbackState = state
  }
}
const _setPlaybackPlaying = _setPlaybackState.bind(null, 'playing')
const _setPlaybackPaused = _setPlaybackState.bind(null, 'paused')
const _setPlaybackNone = _setPlaybackState.bind(null, 'none')
*/

var _setMediaMetadata = function _setMediaMetadata(artist) {
  if (artist === void 0) {
    artist = '';
  }

  if (_has["default"].MEDIA_SESSION) {
    /*
    if (!artist || artist === DF_TITLE) {
      _setPlaybackNone()
    } else {
      _setPlaybackPlaying()
    }
    */

    /*eslint-disable no-undef*/
    navigator.mediaSession.metadata = new MediaMetadata({
      title: DF_TITLE,
      artist: artist
    });
    /*eslint-enable no-undef*/
  }
};
/*
const _setMediaSessionHandlers = (onPlay=null, onPause=null) => {
  const _mediaSession = navigator.mediaSession;
  _mediaSession.setActionHandler('play', onPlay)
  _mediaSession.setActionHandler('pause', onPause)
  if (onPlay) {
    _mediaSession.playbackState ='paused'
  } else if (onPause) {
    _mediaSession.playbackState = 'playing'
  } else {
    _mediaSession.playbackState = 'none'
  }
};
*/


var _clearTimeout = function _clearTimeout(ref) {
  clearTimeout(ref.current);
  ref.current = void 0;
};

var PAUSE_TIMEOUT_MLS = 1000 * 60 * 3;
var initialState = {
  msgErr: '',
  title: DF_TITLE,
  isUnloaded: true,
  isPlaying: false,
  volume: _sound["default"].INIT_VOLUME
};

var AudioPlayer = function AudioPlayer() {
  var _refPauseID = (0, _react.useRef)(),
      _useContext = (0, _react.useContext)(_AppContext["default"]),
      uiThemeImpl = _useContext.uiThemeImpl,
      sApp = _useContext.sApp,
      useSelector = _useContext.useSelector,
      uiTheme = useSelector(sApp.uiTheme),
      station = useSelector(sApp.currentStation),
      _useReducer = (0, _react.useReducer)(_playerReducer["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1],
      isUnloaded = state.isUnloaded,
      isPlaying = state.isPlaying,
      volume = state.volume,
      title = state.title,
      msgErr = state.msgErr;

  var _setVolume = (0, _react.useCallback)(function (newVolume) {
    return dispatch({
      type: A.SET_VOLUME,
      volume: _sound["default"].setVolume(newVolume)
    });
  }, []);

  var _increaseVolume = (0, _react.useCallback)(function () {
    return dispatch({
      type: A.SET_VOLUME,
      volume: _sound["default"].increaseVolume(0.01)
    });
  }, []);

  var _decreaseVolume = (0, _react.useCallback)(function () {
    return dispatch({
      type: A.SET_VOLUME,
      volume: _sound["default"].decreaseVolume(0.01)
    });
  }, []);

  var play = function play() {
    _clearTimeout(_refPauseID);

    if (!msgErr && _sound["default"].play()) {
      dispatch({
        type: A.SET_PLAYING
      });

      _setMediaMetadata(station && station.title || DF_TITLE); //_setMediaSessionHandlers(null, pause)

    } else {
      dispatch({
        type: A.SET_TITLE,
        title: MSG_NO_STATION
      });

      _setMediaMetadata(); //_setMediaSessionHandlers()

    }
  };

  var pause = function pause() {
    _sound["default"].stop(); //_setMediaSessionHandlers(play)
    //_setPlaybackPaused()


    _refPauseID.current = setTimeout(function () {
      return dispatch({
        type: A.UNLOAD
      });
    }, PAUSE_TIMEOUT_MLS);
    dispatch({
      type: A.PAUSE
    });
  };

  var _unload = function _unload() {
    _sound["default"].unload();

    dispatch({
      type: A.UNLOAD
    }); //_setMediaSessionHandlers()

    _setMediaMetadata();
  };

  var stop = (0, _react.useCallback)(function () {
    _sound["default"].stop();

    _sound["default"].unload();

    dispatch({
      type: A.STOP
    });
  }, []);

  var _onError = function _onError(msg) {
    dispatch({
      type: A.SET_ERROR,
      msgErr: msg
    });

    _setMediaMetadata();
  };

  (0, _react.useEffect)(function () {
    if (_has["default"].MEDIA_SESSION) {
      navigator.mediaSession.setActionHandler('pause', stop);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (station && station.src && _sound["default"].init(station.src, _onError.bind(null, 'Load Error'), _onError.bind(null, 'Play Error'))) {
      dispatch({
        type: A.SET_LOADING
      });
    }

    return function () {
      _sound["default"].unload();
    };
  }, [station]);

  var _style = uiThemeImpl.toBg(uiTheme);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL.PLAYER,
    style: _style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio["default"].Volume, {
      volume: volume,
      setVolume: _setVolume,
      onIncrease: _increaseVolume,
      onDecrease: _decreaseVolume
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S.TITLE_CONT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio["default"].Command, {
        isPlaying: isPlaying,
        onPlay: play,
        onPause: pause
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Title["default"], {
        station: station,
        msgErr: msgErr,
        title: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Equalizer["default"], {
        isPlaying: isPlaying,
        isUnloaded: isUnloaded,
        unload: _unload
      })]
    })]
  });
};

var _default = AudioPlayer;
exports["default"] = _default;
//# sourceMappingURL=AudioPlayer.js.map