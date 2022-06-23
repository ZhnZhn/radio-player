import type { StateUpdater } from '../types';
import { useState } from '../uiApi';

const useInitialValue = <T>(
  initialValue: T
): [
  value: T, 
  setValue: StateUpdater<T>
] => {
    const [
        value,
        setValue
    ] = useState(initialValue)
    , [
        prevInitialValue, 
        setPrevInitialValue
    ] = useState(initialValue);

    if (prevInitialValue !== initialValue) {
       setValue(initialValue)
       setPrevInitialValue(initialValue)
    }
    return [
       value,
       setValue
    ];
}

export default useInitialValue