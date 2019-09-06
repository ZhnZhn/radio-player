
const A = {
  SET_LOADING: 'SET_LOADING',
  SET_PLAYING: 'SET_PLAYING',
  PAUSE: 'PAUSE',
  UNLOAD: 'UNLOAD',
  STOP: 'STOP',
  SET_VOLUME: 'SET_VOLUME',
  SET_TITLE: 'SET_TITLE',
  SET_ERROR: 'SET_ERROR'
};

const reducer = (state, action) => {
  switch(action.type){
    case A.SET_LOADING:
      return { ...state, isUnloaded: false, isPlaying: false, msgErr: ''};
    case A.SET_PLAYING:
      return { ...state, isPlaying: true, isUnloaded: false };
    case A.PAUSE:
      return { ...state, isPlaying: false };
    case A.UNLOAD:
      return { ...state, isUnloaded: true };
    case A.STOP:
      return { ...state, isPlaying: false, isUnloaded: true };
    case A.SET_VOLUME:
      return { ...state, volume: action.volume };
    case A.SET_TITLE:
      return { ...state, title: action.title };
    case A.SET_ERROR:
        return { ...state, msgErr: action.msgErr, isPlaying: false, isUnloaded: true };
    default: throw new Error('Unsupported action type: ' + action.type);
  }
};

reducer.A = A

export default reducer
