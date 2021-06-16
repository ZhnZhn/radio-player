import { FnVoidType, TimeoutIdType } from '../types';

import { useRef } from 'react';

type UseInterval = (
  fn: FnVoidType,
  check: (v: number) => boolean,
  volume: number
) => [
  runInInterval: FnVoidType,
  stopInInterval: FnVoidType
]

const D_L1 = 150, D_L2 = 500; 

const useInterval: UseInterval = (fn, check, volume) => {
  const ID = useRef<TimeoutIdType>(null)
  , refVolume = useRef(volume);
  refVolume.current = volume
  const stopInInterval = () => clearInterval((ID.current as unknown) as number)
  , runInInterval = () => {
    ID.current = setInterval( () => {
       if (check(refVolume.current)) {
         stopInInterval()
         ID.current = setInterval(fn, D_L2)
       } else {
        fn()
       }
    }, D_L1)
  };
  return [ runInInterval, stopInInterval ];
}

export default useInterval
