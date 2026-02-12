import type { 
  CSSProperties, 
  TabIndexType 
} from '../types';

import { 
  useState, 
  useMemo
} from '../uiApi';
import crCn from '../crCn';

type BtValueType = '1' | '2' | '3'

interface BtTripleProps {
  style?: CSSProperties,
  className?: string, 
  tabIndex?: TabIndexType,
  initialValue?: BtValueType,
  oneC?: string, 
  twoC?: string, 
  threeC?: string,
  onClick: (v: BtValueType) => void
}

const CL_BT_TRIPLE = 'bt-triple'
, CL_BT_TRIPLE_ONE = `${CL_BT_TRIPLE}__one`
, CL_BT_TRIPLE_TWO = `${CL_BT_TRIPLE}__two`
, CL_BT_TRIPLE_THREE = `${CL_BT_TRIPLE}__three`;

const S_BT_SELECTED: CSSProperties = { 
  backgroundColor: '#1b2836'  
};

const _crBtStyle = (
  nowValue: BtValueType, 
  btValue: BtValueType
  ) => nowValue === btValue
    ? S_BT_SELECTED
    : void 0;

const BtTriple = ({
  style,
  className,
  tabIndex=-1,
  initialValue='1',
  oneC='One', 
  twoC='Two', 
  threeC='Three',
  onClick
}: BtTripleProps) => {
  const [
    value, 
    setValue
  ] = useState(initialValue)
  , _cn = crCn(CL_BT_TRIPLE, className)
  , [
    _oneStyle, 
    _twoStyle, 
    _threeStyle
  ] = useMemo(() => [
    _crBtStyle(value, '1'),
    _crBtStyle(value, '2'),
    _crBtStyle(value, '3')
  ], [value])  
  , _onClick = useMemo(() => (value : BtValueType) => {
      onClick(value)
      setValue(value)
    }, [onClick])
  , [
    _onClick1, 
    _onClick2, 
    _onClick3
  ] = useMemo(() => [
    _onClick.bind(null, '1'),
    _onClick.bind(null, '2'),
    _onClick.bind(null, '3')
  ], [_onClick]);

  return (
  <div className={_cn} style={style}>
    <button
      type="button"
      className={CL_BT_TRIPLE_ONE}
      style={_oneStyle}
      tabIndex={tabIndex}
      onClick={_onClick1}
    >
      {oneC}
    </button>
    <button
      type="button"
      className={CL_BT_TRIPLE_TWO}
      style={_twoStyle}
      tabIndex={tabIndex}
      onClick={_onClick2}
    >
      {twoC}
    </button>
    <button
      type="button"
      className={CL_BT_TRIPLE_THREE}
      style={_threeStyle}
      tabIndex={tabIndex}
      onClick={_onClick3}
    >
      {threeC}
    </button>
  </div>
 )
};

export default BtTriple
