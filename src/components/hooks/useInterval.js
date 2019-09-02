import { useRef } from 'react'

const D = {
  L1: 150,
  L2: 500
};

function useInterval(fn, check, volume) {
  const ID = useRef(), refVolume = useRef();
  refVolume.current = volume
  const stopInInterval = () => clearInterval(ID.current)
  , runInInterval = () => {
    ID.current = setInterval( () => {
       if ( check(refVolume.current) ) {
         stopInInterval()
         ID.current = setInterval(fn, D.L2)
       } else {
        fn()
       }
    }, D.L1)
  }
  return [ runInInterval, stopInInterval ];
}

export default useInterval
