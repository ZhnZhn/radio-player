import { useCallback } from 'react'

import HAS from '../has'

const DF_DELTA = 30;
const _state = {
  fromClientX: void 0
};

const _getClientX = event => {
  const { changedTouches=[] } = event || {};
  return changedTouches[0]
    ? changedTouches[0].clientX
    : void 0;
};

const _isSwipeGesture = (dir, delta, toClientX) => dir === 'L' || dir === 'U'
  ? _state.fromClientX - toClientX > delta
  : toClientX - _state.fromClientX > delta;

const useSwipeGesture = ({ onSwipeGesture, dir='L', delta = DF_DELTA }) => {

  const onTouchStart = useCallback(event => {
    _state.fromClientX = _getClientX(event)
  }, [])
  , onTouchEnd = useCallback(event => {
    if (_state.fromClientX
        && _isSwipeGesture(dir, delta, _getClientX(event))) {
      onSwipeGesture()
      _state.fromClientX = void 0;
    }
  }, []);

  if (!HAS.TOUCH) {
    return void 0;
  }

  return {
    onTouchStart,
    onTouchEnd
  };
};

export default useSwipeGesture
