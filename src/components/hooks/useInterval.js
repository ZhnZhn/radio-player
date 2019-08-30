import { useRef } from 'react'

function useInterval(fn, check, delay=100) {
  const ID = useRef()
  , stopInInterval = () => clearInterval(ID.current)
  , runInInterval = () => {
    ID.current = setInterval(fn, delay)
  }
  return [ runInInterval, stopInInterval ];
}

export default useInterval
