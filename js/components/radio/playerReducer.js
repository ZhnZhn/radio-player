'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = {
  SET_LOADING: 'SET_LOADING',
  SET_PLAYING: 'SET_PLAYING',
  PAUSE: 'PAUSE',
  UNLOAD: 'UNLOAD',
  SET_VOLUME: 'SET_VOLUME',
  SET_TITLE: 'SET_TITLE',
  SET_ERROR: 'SET_ERROR'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case A.SET_LOADING:
      return (0, _extends3.default)({}, state, { isUnloaded: false, isPlaying: false, msgErr: '' });
    case A.SET_PLAYING:
      return (0, _extends3.default)({}, state, { isPlaying: true, isUnloaded: false });
    case A.PAUSE:
      return (0, _extends3.default)({}, state, { isPlaying: false });
    case A.UNLOAD:
      return (0, _extends3.default)({}, state, { isUnloaded: true });
    case A.SET_VOLUME:
      return (0, _extends3.default)({}, state, { volume: action.volume });
    case A.SET_TITLE:
      return (0, _extends3.default)({}, state, { title: action.title });
    case A.SET_ERROR:
      return (0, _extends3.default)({}, state, { msgErr: action.msgErr, isPlaying: false, isUnloaded: true });
    default:
      throw new Error('Unsupported action type: ' + action.type);
  }
};

reducer.A = A;

exports.default = reducer;
//# sourceMappingURL=playerReducer.js.map