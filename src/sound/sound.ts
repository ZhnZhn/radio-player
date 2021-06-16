import { HowlErrorCallback } from 'howler';

import { Howl, Howler } from 'howler'

const _roundTo2 = (n: number) => parseFloat(n.toFixed(2))

let _sound: Howl | null = null;

const INITIAL_CONFIF = {
    volume: 0.25,
    autoplay: false,
    html5: true,
    format: ['webm', 'mpeg', 'mp3', 'acc'],
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


let _isFirtsInit = true;

const sound = {
  INIT_VOLUME: 0.2,
  checkInitVolume: () => {
    if (_isFirtsInit) {
      Howler.volume(sound.INIT_VOLUME)
      _isFirtsInit = false
    }
  },

  getVolume: () => {
    return Howler.volume();
  },

  unload: () => {
    if (_sound) {
      _sound.unload()
      _sound.off()
    }
  },

  init: (src: string, onloaderror: HowlErrorCallback, onplayerror: HowlErrorCallback) => {
    try {
      sound.checkInitVolume()
      const volume = Howler.volume();
      sound.unload()

      _sound = new Howl({
        ...INITIAL_CONFIF,
        src,
        onloaderror,
        onplayerror
      })

      Howler.volume(volume)

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
   } catch(err) {
     _sound = null;
     console.log(err.message)
     return false;
   }
  },
  play: () => {
    if (_sound) {
      _sound.play()
      return true;
    }
    return false;
  },
  stop: () => {
    if (_sound) {
      _sound.stop()
    }
  },
  setVolume: (volume: number) => {
    Howler.volume(_roundTo2(volume));
    return volume;
  },
  increaseVolume: (delta=0.05) => {
    sound.checkInitVolume()
    const volume = _roundTo2(Howler.volume()+delta)
    if (volume<=1) {
      Howler.volume(volume)
    }
    return Howler.volume()
  },
  decreaseVolume: (delta=0.05) => {
    sound.checkInitVolume()
    const volume = _roundTo2(Howler.volume()-delta)
    if (volume>=0) {
      Howler.volume(volume)
    }
    return Howler.volume();
  }
}

export default sound
