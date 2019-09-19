'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _howler = require('howler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _roundTo2 = function _roundTo2(n) {
  return parseFloat(n.toFixed(2));
};

var _sound = void 0;

var INITIAL_CONFIF = {
  volume: 0.25,
  autoplay: false,
  html5: true,
  format: ['webm', 'mpeg', 'mp3', 'acc']
  /*
  onloaderror: function(id, err){
    console.log('OnLoad Error')
    console.log(id, err, err.message)
  },
  onplayerror: function(err){
    console.log('OnPlay Error', err.msg)
  }
  */
};

var _isFirtsInit = true;

var sound = {
  INIT_VOLUME: 0.2,
  checkInitVolume: function checkInitVolume() {
    if (_isFirtsInit) {
      _howler.Howler.volume(sound.INIT_VOLUME);
      _isFirtsInit = false;
    }
  },

  getVolume: function getVolume() {
    return _howler.Howler.volume();
  },

  unload: function unload() {
    if (_sound) {
      _sound.unload();
      _sound.off();
    }
  },

  init: function init(src, onloaderror, onplayerror) {
    try {
      sound.checkInitVolume();
      var volume = _howler.Howler.volume();
      sound.unload();

      _sound = new _howler.Howl((0, _extends3.default)({}, INITIAL_CONFIF, {
        src: src,
        onloaderror: onloaderror,
        onplayerror: onplayerror
      }));

      _howler.Howler.volume(volume);

      /*
      console.log(_sound)
      fetch(src).then(res => {
        const _headers = res.headers
        for(let h of _headers.entries()) {
          console.log(h)
        }
        console.log(_headers.get('icy-br'))
        console.log(_headers.get('ICY-BR'))
        console.log(_headers.get('Icy-Br'))
      })
      */

      /*
      _sound._sounds[0]._node.addEventListener('loadedmetadata', (event)=>{
        console.log(event.mozSampleRate)
        console.log(event)
          const _audio = _sound._sounds[0]._node
        if (_audio.getMetaData) {
          console.log(_audio.getMetaData())
        } else {
          console.log('getMetaData not supported')
        }
        if (_audio.mozGetMetaData) {
          console.log(_audio.mozGetMetaData())
        } else {
          console.log('mozGetMetaData not supported')
        }
          console.log('loadedmetadata event')
      })
      _sound._sounds[0]._node.addEventListener('ratechange', event => {
        console.log(event)
        console.log('ratechange event')
      })
      */

      return true;
    } catch (err) {
      _sound = null;
      console.log(err.message);
      return false;
    }
  },
  play: function play() {
    if (_sound) {
      _sound.play();
      return true;
    }
    return false;
  },
  stop: function stop() {
    if (_sound) {
      _sound.stop();
    }
  },
  setVolume: function setVolume(volume) {
    _howler.Howler.volume(_roundTo2(volume));
    return volume;
  },
  increaseVolume: function increaseVolume() {
    var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.05;

    sound.checkInitVolume();
    var volume = _roundTo2(_howler.Howler.volume() + delta);
    if (volume <= 1) {
      _howler.Howler.volume(volume);
    }
    return _howler.Howler.volume();
  },
  decreaseVolume: function decreaseVolume() {
    var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.05;

    sound.checkInitVolume();
    var volume = _roundTo2(_howler.Howler.volume() - delta);
    if (volume >= 0) {
      _howler.Howler.volume(volume);
    }
    return _howler.Howler.volume();
  }
};

exports.default = sound;
//# sourceMappingURL=sound.js.map