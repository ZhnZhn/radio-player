import { useState, useCallback } from '../uiApi';

type UseBoolType = (value?: boolean) => [
  is: boolean,
  setTrue: () => void,
  setFalse: () => void 
]

const useBool: UseBoolType = (initialValue) => {
  const [is, setIs] = useState(() => !!initialValue)
  /*eslint-disable react-hooks/exhaustive-deps */
  , setTrue = useCallback(() => setIs(true), [])
  , setFalse = useCallback(() => setIs(false), []);
  //setIs
  /*eslint-enable react-hooks/exhaustive-deps */
  return [is, setTrue, setFalse];
};

export default useBool
