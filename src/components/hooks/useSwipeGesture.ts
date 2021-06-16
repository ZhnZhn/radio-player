import { FnVoidType } from '../types';

import React, { useCallback } from 'react';
import HAS from '../has';

type DirType = 'L' | 'U' | 'R'
interface UseSwipeGestureProps {
  onSwipeGesture: FnVoidType, 
  dir?: DirType, 
  delta?: number
}
type UseSwipeGestureType = (props: UseSwipeGestureProps) => {
  onTouchStart: (event: React.TouchEvent) => void,
  onTouchEnd: (event: React.TouchEvent) => void
 } | void 

type StateType = {
  fromClientX?: number
}

const DF_DELTA = 30;
const _state: StateType = {
  fromClientX: void 0
};

const _getClientX = (event?: React.TouchEvent) => {
  const { changedTouches=[] } = event || {};
  return changedTouches[0]
    ? changedTouches[0].clientX
    : void 0;
};

const _isNumber = (n: any): n is number => 
   typeof n === 'number' && n-n === 0;

const _isSwipeGesture = (
  dir: string, 
  delta: number, 
  toClientX?: number
) => {
  const { fromClientX } = _state;
  if (!_isNumber(fromClientX) || !_isNumber(toClientX)) {
    return false;
  }
  return dir === 'L' || dir === 'U'
    ? fromClientX - toClientX > delta    
    : toClientX - fromClientX > delta;
}  

const useSwipeGesture: UseSwipeGestureType = ({ onSwipeGesture, dir='L', delta = DF_DELTA }) => {

  const onTouchStart = useCallback(event => {
    _state.fromClientX = _getClientX(event)
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , onTouchEnd = useCallback(event => {
    if (_isSwipeGesture(dir, delta, _getClientX(event))) {
      onSwipeGesture()
      _state.fromClientX = void 0;
    }
  }, []);
  /*eslint-enable react-hooks/exhaustive-deps */

  if (!HAS.TOUCH) {
    return void 0;
  }

  return {
    onTouchStart,
    onTouchEnd
  };
};

export default useSwipeGesture
