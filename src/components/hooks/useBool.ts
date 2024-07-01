import { 
  useState, 
  useMemo
} from '../uiApi';

type UseBoolType = (value?: boolean) => [
  is: boolean,
  setTrue: () => void,
  setFalse: () => void 
]

const useBool: UseBoolType = (initialValue) => {
  const [
    is, 
    setIs
  ] = useState(() => !!initialValue)
  , [
    setTrue,
    setFalse
  ] = useMemo(() => [
    () => setIs(true),
    () => setIs(false)
  ], []);
      
  return [
    is, 
    setTrue, 
    setFalse
  ];
};

export default useBool
